import { useEffect } from 'react';
import Main from './pages/Main';
import Headerbar from './components/Headerbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import IdeaList from './pages/IdeaList';
import Rank from './pages/Rank';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './modules';

import { isauthenticated } from './modules/function';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isauthenticated());
  }, []);

  return (
    <BrowserRouter>
      <Headerbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/idealist" element={<IdeaList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
