import React from 'react';
import Exemplar from '../exemplar';
import Features from '../features';
import Footer from '../footer';
import Splash from '../splash';

function Home(props) {
    return(
        <React.Fragment>
            <Splash/>
            <Exemplar/>
            <Features/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;