// BioCalculusPage.js
import React, { useState, useEffect } from "react";
import { Navigation } from './navigation';
import { Home } from './home'; 
import { Contact } from './contact'; 
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

import { Bioabout } from './bioabout';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const BioCalculus = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Home />
      <Bioabout />
      <Contact data={landingPageData.Contact} />

    </div>
  );
};
