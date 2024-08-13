import React from 'react';
import './home.css';


export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Biocalculus</h1>
        <h2>Biocalculus Holter Monitor Device /ELR Device</h2>
        <p>
        
        Monitor Your Heart Anywhere, Anytime with Our Advanced ELR and Holter Monitor Device. The Biocalculus and its mobile application are intended to continuously measure, record and periodically transmit physiological data. The system is indicated for those patients who require monitoring for the detection of non- lethal cardiac arrhythmias. Device will monitor, derive and display on Smartphone application parameters which Biocalculus monitors.
        </p>
      </div>
      <div className="home-right">
        <img src="../img/biocalculus.png" alt="Biocalculus" className="biocalculus-image" />
      </div>
    </div>
  );
};
