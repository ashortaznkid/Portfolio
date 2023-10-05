import React from "react";

const NavLink = ({ section, currentSection, onNavClick }) => (
    <li 
        onClick={() => onNavClick(section)} 
        className={currentSection === section ? 'active' : ''}
    >
        {section}
    </li>
);

const Navbar = ({ currentSection, onNavClick }) => {
    const sections = ['About Me', 'Contact', 'Portfolio'];

    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    <NavLink 
                        key={section}
                        section={section}
                        currentSection={currentSection}
                        onNavClick={onNavClick}
                        />
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;