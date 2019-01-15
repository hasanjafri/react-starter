import React from 'react';
import dataExemplarImg from '../assets/dataExemplar.jpeg';

const Exemplar = () => {
  return (
    <section id="examplar ">
      <div className="container">
        <div className="row">
          <div className="col l1"></div>
          <div className="col l10 center-align">
            <h1>Take Your Work to New Heights</h1>
            <p>You’ve designed your study, spent hours reviewing peer articles and months collecting all of your data but get to a point of loss on your next steps. This is where Datagram comes in. At Datagram, we help you answer the important questions that not only strengthen your work but save you countless hours (~100) spent learning statistical modelling, familiarizing with software tools (SPSS, R etc.) and interpreting results.Our services can help you solve the questions needed for your research.</p>
            <img className="responsive-img" alt='dataExemplarImg' src={dataExemplarImg} />
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default Exemplar;