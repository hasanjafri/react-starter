import React from 'react';

const Features = () => {
  return (
    <section id="features" className="grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col m3"></div>
          <div className="col m6 center-align">
            <h2>Services</h2>
            <p>Discover Our Expertise</p>
          </div>
          <div className="col m3"></div>
        </div>
        <div className="row">
          <div className="col m3">
            <i className="material-icons">create</i>
            <h5>Data Strategy</h5>
            <p>Have a thesis in mind but not sure what or how to collect the data for your research? Our data strategy services can support in framing your research and uncover the powerful insights you may be able to capture to support your research. If you already have your research planned we still are able to reaffirm your thought process as well as provide new ideas that your data can highlight in relation to your research.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">devices</i>
            <h5>Research Reporting</h5>
            <p>You've got the data. We've got the tools. Allow our firm to translate your raw research data into insights that can propel your thesis forward. We save the need to learn a new software, apply statistical methods and interpret results so that you can focus on collecting more evidence, gaining more exposure and connecting with other researchers.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">build</i>
            <h5>Data Visualization</h5>
            <p>Unsure of how to communicate your findings effectively with your data? Let us build a story with your data that impacts viewers and delivers your message in an unforgettable way.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">mood</i>
            <h5>Real-Time Monitoring</h5>
            <p>With a minimalistic, modern dashboard providing insights and tips on the efficiency of your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;