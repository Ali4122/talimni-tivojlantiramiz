import React from 'react';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import PageInfo from './PageInfo';
import Informations from './Informations';
import Footer from '../footer/Footer';

const About = () => {
    return (
        <>
            <Reveal effect="animNav" duration="750">
                <NavSec />
            </Reveal>
            <Reveal effect="fadeInUp" duration="1250">
                <PageInfo />
            </Reveal>
            <Reveal effect="infoAnim" duration="1800">
                <Informations />
                <Footer />
            </Reveal>
            
        </>
    );
};


export default About;