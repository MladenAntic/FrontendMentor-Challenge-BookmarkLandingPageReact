import React from "react";
import "./Hero.scss";
import illustrationHero from "./assets/images/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero__content">
          <h2 className="hero__title">A Simple Bookmark Manager</h2>
          <p className="hero__description">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <button className="hero__btn hero__chrome">Get it on Chrome</button>
          <button className="hero__btn hero__firefox">Get it on Firefox</button>
        </div>

        <img
          src={illustrationHero}
          className="hero__illustration"
          alt="Illustration Hero"
        />
      </div>

      <div className="hero__pattern"></div>
    </section>
  );
};

export default Hero;
