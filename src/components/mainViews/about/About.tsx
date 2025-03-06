import './About.module.scss'
import React from 'react';

interface aboutProps {
    title?: string;
}

const About: React.FC<aboutProps> = ({ title = 'About' }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Some info</p>
        </div>
    );
};

export default About;