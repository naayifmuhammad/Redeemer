import React from 'react';
import './bioabout.css';

export const Bioabout = () => {
  return (
    <div className="bioabout-container">
      <h1>ABOUT</h1>
      <h2> Biocalculus Holter Monitor and ELR Device</h2>

      <section className="bio-intro">
        <p>
          Discover the advanced Biocalculus Holter Monitor and ELR Device, designed to provide continuous heart monitoring anywhere, anytime. Our innovative device and its accompanying mobile application are perfect for individuals who need regular monitoring for non-lethal cardiac arrhythmias.
        </p>
      </section>

      <section className="specifications">
        <h2>Device Specifications</h2>
        <ul>
          <li><strong>Connectivity:</strong> USB 2.0, Bluetooth V4.2</li>
          <li><strong>ECG Channel:</strong> Single Channel</li>
          <li><strong>On-board Memory:</strong> 4 Days (NAND)</li>
          <li><strong>Recording Format:</strong> Continuous</li>
          <li><strong>Frequency Response:</strong> 0.5Hz to 40Hz</li>
          <li><strong>CMRR:</strong> 768</li>
          <li><strong>Input Impedance:</strong> +100 MOhm</li>
          <li><strong>A/D Sampling Rate:</strong> 256 Samples/second</li>
          <li><strong>Resolution:</strong> 16 bit</li>
          <li><strong>Battery Life:</strong> Up to 4 days of continuous usage</li>
          <li><strong>Battery Type:</strong> Rechargeable Lithium-Polymer</li>
          <li><strong>Dimensions:</strong> 84 x 28 x 10 mm</li>
          <li><strong>Weight:</strong> 20 gm including batteries</li>
          <li><strong>Compatibility:</strong> Android operating systems</li>
        </ul>
      </section>

      <section className="key-features">
        <h2>Key Features</h2>
        <ul>
          <li>24-hour continuous heart monitoring</li>
          <li>Wireless functionality for increased convenience</li>
          <li>ELR technology for enhanced accuracy</li>
          <li>Suitable for home use with various monitoring durations</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          The Biocalculus Holter Monitor and ELR Device is a portable system designed to monitor the electrical activity of the heart over extended periods. Using small adhesive electrodes attached to the chest, the device records continuous electrocardiogram (ECG) data, which is then analyzed to detect any irregular heart rhythms or other cardiac issues.
        </p>
        <p>
          Our device ensures precise data collection with its advanced ELR technology, making it an invaluable tool for individuals needing ongoing cardiac monitoring.
        </p>
      </section>
    </div>
  );
};
