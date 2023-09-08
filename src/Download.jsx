import React from "react";
import "./Download.scss";
import bgDots from "./assets/images/bg-dots.svg";
import logoChrome from "./assets/images/logo-chrome.svg";
import logoFirefox from "./assets/images/logo-firefox.svg";
import logoOpera from "./assets/images/logo-opera.svg";

const Download = () => {
  return (
    <section className="download">
      <h3 className="download__title">Download the extension</h3>
      <p className="download__description">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <div className="download__cards">
        <div className="download__card">
          <img src={logoChrome} alt="Browser Icon" />
          <h4>Add to Chrome</h4>
          <small>Minimum version 62</small>

          <img src={bgDots} className="download__dots" alt="Bg Dots" />

          <button className="download__btn">Add & Install Extension</button>
        </div>

        <div className="download__card download__firefox">
          <img src={logoFirefox} alt="Browser Icon" />
          <h4>Add to Firefox</h4>
          <small>Minimum version 55</small>

          <img src={bgDots} className="download__dots" alt="Bg Dots" />

          <button className="download__btn download__btnFirefox">
            Add & Install Extension
          </button>
        </div>

        <div className="download__card download__opera">
          <img src={logoOpera} alt="Browser Icon" />
          <h4>Add to Opera</h4>
          <small>Minimum version 46</small>

          <img src={bgDots} className="download__dots" alt="Bg Dots" />

          <button className="download__btn download__btnOpera">
            Add & Install Extension
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;
