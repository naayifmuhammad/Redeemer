import {React,useEffect} from 'react';
import './careersabout.css';


export const CareersAbout = () => {
  useEffect(() => {
    const section = document.querySelector('.section');
    section.classList.add('loaded'); // Add 'loaded' class after component mounts
  }, []);


  return (
    <div className="career-content-container">
      <h1>Build a Career with Redeemer Technologies</h1>
      <div className="section explore-opportunities row">
        <div className="section-text-area col-md-6">
          <h2>Explore Opportunities</h2>
          <p>
            Join Redeemer Technologies and be part of our growing team! We are
            hiring for our branches in Mumbai, Bangalore, Hyderabad, and Pune.
            We also offer flexible work-from-home opportunities to accommodate
            diverse work styles.
          </p>
        </div>
        <div className="section-image col-md-6">
          <img
            src="img/careers/opportunities.jpg"
            className="img-fluid"
            width="100%"
            alt="opportunities"
          />
        </div>
      </div>
      <div className="section">
        <h2>Culture and Work Environment</h2>
        <p>
          At Redeemer Technologies, we are committed to creating an environment
          where innovation thrives. Our culture is centered around a strong
          commitment to delivering impactful solutions while avoiding
          traditional organizational politics. We align our team’s interests
          with our clients’ needs, fostering a collaborative and supportive
          atmosphere.
        </p>
        <p>
          Our focus on R&D and emerging technologies such as AI, IoT, and
          Blockchain ensures that our employees are engaged and empowered. We
          invest in employee incentives and benefits that promote long-term
          growth and satisfaction.
        </p>
      </div>
    </div>
  );
};
