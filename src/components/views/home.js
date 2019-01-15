import React from 'react';
import Exemplar from '../exemplar';
import Features from '../features';
import Splash from '../splash';

function Home(props) {
    return(
        <React.Fragment>
            <Splash/>
            <Exemplar/>
            <Features/>
        </React.Fragment>
    )
}

export default Home;