import React from 'react';
import Main from './pages/Main';
import Headerbar from './components/Headerbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import IdeaList from './pages/IdeaList';
import Rank from './pages/Rank';

function App() {
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
