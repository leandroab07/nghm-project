import React, { useState } from 'react';
import { GlobalStyles } from './styles/global-styles';
import Header from './components/Header';
import Home from './templates/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Group from './pages/group';
import Jobs from './pages/jobs';
import Contact from './pages/contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <GlobalStyles theme={isDarkMode ? '#000F3B': '#fff'}/>
      <BrowserRouter>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home isDarkMode={isDarkMode} />} />
          <Route path='/group' element={<Group isDarkMode={isDarkMode} />} />
          <Route path='/jobs' element={<Jobs isDarkMode={isDarkMode} />} />
          <Route path='/contact' element={<Contact isDarkMode={isDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
