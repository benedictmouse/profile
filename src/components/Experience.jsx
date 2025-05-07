import React from 'react';


const Experience = () => {
  const experiences = [
    {
      id: 1,
      text: "Interned at Attache Tech Africa (2023), building full-stack apps with React & Django while optimizing PostgreSQL performance."
    },
    {
      id: 2,
      text: "Freelancing (2024–Present) on Fiverr & Upwork, delivering scalable web solutions with clean code and efficient databases."
    },
    {
      id: 3,
      text: "Currently developing Kibarua App, a gig-service platform with React, Django & PostgreSQL, focusing on UX and scalability."
    }
  ];

  return (
    <section className="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__container">
        <ul className="experience__list">
          {experiences.map((exp) => (
            <li key={exp.id} className="experience__item">
              <div className="experience__bullet"></div>
              <p className="experience__text">{exp.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;