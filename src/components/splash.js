import React from 'react';
import Button from '@material-ui/core/Button';
import SplashImg from '../assets/908284.jpeg';

const Splash = () => {
    return(
        <section id="hero" style={{backgroundImage: 'url(' + SplashImg + ')', backgroundColor: 'rgba(0, 0, 0, 0.66)', backgroundBlendMode: 'multiply'}}>
            <div className="container valign-wrapper jc-center">
                <div className="valign center-align white-text">
                    <p className="flowtext">We do X better than Y because we use Z</p>
                    <h3>Develop, Deploy, Done</h3>
                    <p className="big">
                        We build your website using cutting edge frameworks
                        <br/>
                        entirely customized and made to order
                    </p>
                    <Button color="secondary" variant="contained">
                        Sign Up
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Splash;