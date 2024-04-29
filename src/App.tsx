import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/navbar/navbar';
import Main from './components/pages/main';
import AboutMe from './components/pages/aboutme';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <AboutMe/>
      </Router> 

    </>
  )
}

export default App