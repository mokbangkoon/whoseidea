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
import Updatepro from './pages/Updatepro';

import { isauthenticated } from './modules/function';
import { islogin } from './modules/islogin';
import Signout from './pages/Signout';
import Mypost from './pages/Mypost';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernickname, setusernickname] = useState('');
  const isAuthenticated = () => {
    axios.get('https://localhost:8080/auth').then(data => {
      dispatch(islogin(true));
      console.log(data);
      navigate('/');
    });
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleLogout = () => {
    axios.post('https://localhost:8080/logout').then(res => {
      console.log(res.data);
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
        <Route path="/updatepro" element={<Updatepro />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/mypost" element={<Mypost />} />
      </Routes>
    </div>
  );
}

export default App;
