// BioCalculusPage.js
import React from 'react';
import { Navigation } from './navigation';
import { Home } from './home'; 

import { Bioabout } from './bioabout';
export const BioCalculus = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <Bioabout />

    </div>
  );
};
