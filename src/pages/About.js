import React from 'react';
import HeroAbout from '../components/HeroAbout';
import MeetOurAuthors from '../components/MeetOurAuthors';
import { Helmet } from "react-helmet";
import Layout from '../components/Layout';

const About = () => {
    return (
        <>
        <Layout>
            <Helmet>
                <title>About us | Notebook</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <HeroAbout/>
            <MeetOurAuthors/>
        </Layout>
        </>
    );
};

export default About;