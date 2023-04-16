import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App';
import { GlobalStyles } from './styles/global-styles';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Group from './pages/group';
import Jobs from './pages/jobs';
import Contact from './pages/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/group' element={<Group />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
