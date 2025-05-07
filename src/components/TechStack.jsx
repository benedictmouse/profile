import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiMysql, SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from 'framer-motion';


const TechStack = () => {
  const icons = [
    { id: 1, icon: <FaReact size="3.5em" color="#61DAFB" /> },
    { id: 2, icon: <SiMysql size="3.5em" color="#4479A1" /> },
    { id: 3, icon: <BiLogoPostgresql size="3.5em" color="#336791" /> },
    { id: 4, icon: <SiDjango size="3.5em" color="#092E20" /> },
    { id: 5, icon: <FaReact size="3.5em" color="#61DAFB" /> },
    { id: 6, icon: <SiMysql size="3.5em" color="#4479A1" /> },
    { id: 7, icon: <BiLogoPostgresql size="3.5em" color="#336791" /> }
  ];

  return (
    <div className="tech-stack">
      <h2 className="tech-stack__title">Tech Stack</h2>
      
      <div className="tech-stack__container">
        <div className="tech-stack__fade tech-stack__fade--left"></div>
        
        <motion.div
          className="tech-stack__scroller"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <ul className="tech-stack__icons">
            {icons.map((item) => (
              <li key={item.id} className="tech-stack__icon">
                {item.icon}
              </li>
            ))}
          </ul>
          
          <ul className="tech-stack__icons">
            {icons.map((item) => (
              <li key={`copy-${item.id}`} className="tech-stack__icon">
                {React.cloneElement(item.icon, { key: `copy-${item.id}` })}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="tech-stack__fade tech-stack__fade--right"></div>
      </div>
    </div>
  );
};

export default TechStack;