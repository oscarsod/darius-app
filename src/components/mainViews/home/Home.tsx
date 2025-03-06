import ToolTable from '../../subLayouts/toolTable/ToolTable';
import './home.module.scss'
import React from 'react';

interface HomeProps {
    title?: string;
}

const Home: React.FC<HomeProps> = ({ title = '' }) => {
    return (
        <div className='home-container'>
            <h1>{title}</h1>
            <ToolTable />
        </div>
    );
};

export default Home;