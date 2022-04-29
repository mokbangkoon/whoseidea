import { useEffect, useState } from 'react';
import Main from './pages/Main';
import Headerbar from './components/Headerbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import IdeaList from './pages/IdeaList';
import Rank from './pages/Rank';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './modules';
import Mypage from './pages/Mypage';

import { isauthenticated } from './modules/function';
import { islogin } from './modules/islogin';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = () => {
    axios.get('https://localhost:8080/auth').then(data => {
      dispatch(islogin(data.data));
      navigate('/');
    });
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post('https://localhost:8080/logout').then(res => {
      dispatch(islogin(false));
      navigate('/');
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Headerbar handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Main handleResponseSuccess={handleResponseSuccess} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/idealist" element={<IdeaList />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;
