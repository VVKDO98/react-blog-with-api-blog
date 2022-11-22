import React from 'react';
import HeroAbout from '../components/HeroAbout';
import MeetOurAuthors from '../components/MeetOurAuthors';
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About us | Notebook</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <HeroAbout/>
            <MeetOurAuthors/>
        </>
    );
};

export default About;