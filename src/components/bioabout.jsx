import {useEffect,React} from 'react';
import './bioabout.css';

export const Bioabout = () => {
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target); // Stop observing once the class is added
        }
      });
    }, options);

    // Observe each section
    document.querySelectorAll('.fade-in-element').forEach(section => {
      observer.observe(section);
    });
  }, []);
  
  return (
    <div className="bioabout-container">
      <h1>ABOUT</h1>
      <h2> Biocalculus Holter Monitor and ELR Device</h2>

      <section className="fade-in-element bio-intro">
        <p className='para'>
        Discover the advanced Biocalculus Holter Monitor and ELR (External Cardiac Loop Recorder) Device, specifically designed to provide continuous heart monitoring anywhere, anytime. Our innovative device, along with its user-friendly mobile application, is perfect for individuals who need regular monitoring for non-lethal cardiac arrhythmias. Whether you're at home or on the go, you can trust our technology to keep track of your heart's health.
        </p>
      </section>

      <section className="fade-in-element specifications">
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

      <section className="fade-in-element key-features">
        <h2>Key Features</h2>
        <ul>
          <li>24-hour continuous heart monitoring</li>
          <li>Wireless functionality for increased convenience</li>
          <li>ELR technology for enhanced accuracy</li>
          <li>Suitable for home use with various monitoring durations</li>
        </ul>
      </section>

      <section className="fade-in-element how-it-works">
        <h2>How It Works</h2>
        <p className='para'>
        The Biocalculus Holter Monitor and ELR Device is a portable system created to monitor the electrical activity of the heart over extended periods. Using small adhesive electrodes attached to the chest, the device records continuous electrocardiography (ECG/EKG) data, which is then analyzed to detect any irregular heart rhythms or other cardiac issues.
        </p>
        <p className='para'>
          Our device ensures precise data collection with its advanced ELR technology, making it an invaluable tool for individuals requiring ongoing cardiac monitoring. For those looking to book a Holter Monitor test, or need more information on Holter Monitoring costs, we provide services across India, including the convenience of testing at your home. To contact for Holter test pricing or to find the nearest locations, reach out to us today.
        </p>
        
      </section>
    </div>
  );
};
