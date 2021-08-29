import React from 'react';
import NavSec from './NavSec';
import Reveal from 'react-reveal/Reveal';
import Info from './Info';

const HomeMain = () => {
    return (
        <div id="home">
            <Reveal effect="animNav" duration="750">
                <NavSec />
            </Reveal>
            <Info />
        </div>
    );
};


export default HomeMain;