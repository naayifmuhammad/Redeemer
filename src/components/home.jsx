import React from 'react';
import './home.css';


export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className='text-left'>Biocalculus</h1>
        <h2>Biocalculus Holter Monitor Device /ELR Device</h2>
        <p className='para'>
        
        Monitor Your Heart Anywhere, Anytime with Our Advanced ELR and Holter Monitor Device. The Biocalculus Holter Monitor and its mobile application are designed to continuously measure, record, and periodically transmit physiological data. <br/> The system is ideal for patients who require monitoring for the detection of non-lethal cardiac arrhythmias. This Holter monitor is a type of portable electrocardiogram (ECG), providing real-time monitoring of your heart's activity directly to your smartphone.
        </p>
        <a href="#contact" class="book-now-btn">Book Now</a>
      </div>
      <div className="home-right">
        <img src="../img/biocalculus.png" alt="Biocalculus" className="biocalculus-image" />
      </div>
    </div>
  );
};
