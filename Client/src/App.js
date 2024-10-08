import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/About';
import LogIn from './pages/LogIn/LogIn';
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import GetStarted from './pages/GetStarted/GetStarted';  // Import the GetStarted component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<Team />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/get-started' element={<GetStarted />} /> {/* Add the Get Started route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
