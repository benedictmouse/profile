import React from 'react';
import Logo from '../assets/logoo.png';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <ul className='nav-links'>
        <li className='contact_link' ><Link to="/contact">Contact</Link></li>
        <li className='linkedin_link' ><a href="https://www.linkedin.com/in/benedict-omondi-398b7a2a6/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        <li className='github_link'><a href='https://github.com/benedictmouse' target='_blank' rel='noopener noreferrer'><FaGithub /></a></li>

      </ul>    
    </nav>
  );
};

export default Navbar;