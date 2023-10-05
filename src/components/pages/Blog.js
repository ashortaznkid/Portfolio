import React from 'react';

const Project = ({ title, description, webLink, gitLink }) => {
  return (
    <div className='project'>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='project-links'>
        <a href={webLink}>
          Demo
        </a>
        <a href={gitLink}>
          Github Repository
        </a>
      </div>
    </div>
  );
};

export default function Blog() {
  const projects = [
    {
      title: 'social-network-api',
      description: 'No SQL',
      webLink: 'https://drive.google.com/file/d/12QA7X0JyaHDI8h-SjYVF-oWRJJPpK4GU/view',
      gitLink: 'https://github.com/ashortaznkid/social-network-api'
    }
  ]
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
