// Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';

export const Header = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Empowering Tomorrow's Innovation, Today",
      paragraph: "Building Cutting-Edge Solutions with 10+ Years of Expertise.",
      background: "../img/intro-bg.jpg",
      link: "#features" // Default link for the first slide
    },
    {
      title: "Leading the Future with Innovation",
      paragraph: "Driving Success through Innovative Technologies.",
      background: "../img/cover.png",
      link: "/biocalculus" // This is now a route
    },
    // Add more slides here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <header id="header">
      <div
        className="intro"
        style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>
                  {slides[currentSlide].title}
                  <span></span>
                </h2>
                <p>{slides[currentSlide].paragraph}</p>
                {slides[currentSlide].link.startsWith("/") ? (
                  <Link
                    to={slides[currentSlide].link}
                    className="btn buttons custom btn-lg page-scroll"
                  >
                    Learn More
                  </Link>
                ) : (
                  <a
                    href={slides[currentSlide].link}
                    className="btn buttons custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          </div>
          <button className="slide-arrow left-arrow" onClick={prevSlide}>‹</button>
          <button className="slide-arrow right-arrow" onClick={nextSlide}>›</button>
        </div>
      </div>
    </header>
  );
};
