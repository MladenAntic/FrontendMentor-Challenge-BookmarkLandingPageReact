import React, { useState } from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  const [input, setInput] = useState("");
  const [validation, setValidation] = useState("");
  const [error, setError] = useState("");

  const inputPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function checkInput(e) {
    e.preventDefault();

    if (!inputPattern.test(input)) {
      setValidation("inputError");
      setError("errorMessage");
    } else {
      setValidation("");
      setError("");
    }
  }

  return (
    <section className="newsletter">
      <span className="newsletter__joined">35,000+ already joined</span>
      <h3 className="newsletter__title">
        Stay up-to-date with what <br />
        we're doing
      </h3>

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`email ${validation}`}
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button
          type="submit"
          className="newsletter__submit"
          onClick={checkInput}
        >
          Contact Us
        </button>

        <div className={`newsletter__error ${error}`}>
          Whoops, make sure it's an email
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
