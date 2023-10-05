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

export default Project;