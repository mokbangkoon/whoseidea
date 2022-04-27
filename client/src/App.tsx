import React from 'react';
import Main from './pages/Main';
import Headerbar from './components/Headerbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Headerbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
