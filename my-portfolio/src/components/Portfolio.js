import React from 'react';
import Project from './Projects';

const Portfolio = () => {
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
                {projects.map((project, index) =>(
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;