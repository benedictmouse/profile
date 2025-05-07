import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Profile from './components/Profile'
import './App.css';
import TechStack from './components/TechStack';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <Navbar />
      <Profile/>
      <TechStack/>
      <Experience/>
      <Contact/>
    </Router>
  );
}

export default App;