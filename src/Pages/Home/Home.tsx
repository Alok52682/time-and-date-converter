import React from 'react';
import Converter from '../Converter';
import Css from './Css';
import Html from './Html';
import JavaScript from './JavaScript';
import Node from './Node';
import ReactJs from './ReactJs';

const Home = () => {
    return (
        <div>
            <Converter />
            <Html />
            <Css />
            <JavaScript />
            <ReactJs />
            <Node />
        </div >
    );
};

export default Home;