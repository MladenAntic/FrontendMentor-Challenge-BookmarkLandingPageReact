import React, { useRef, useState } from "react";
import "./Faq.scss";
import iconArrow from "./assets/images/icon-arrow.svg";

const Faq = () => {
  const [arrow1, setArrow1] = useState("");
  const [arrow2, setArrow2] = useState("");
  const [arrow3, setArrow3] = useState("");
  const [arrow4, setArrow4] = useState("");

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  const faqListRef = useRef(null);

  function toggleFaq1() {
    if (arrow1 === "") {
      setArrow1("rotate");
    } else {
      setArrow1("");
    }

    if (answer1 === "") {
      setAnswer1("show");
    } else {
      setAnswer1("");
    }
  }

  function toggleFaq2() {
    if (arrow2 === "") {
      setArrow2("rotate");
    } else {
      setArrow2("");
    }

    if (answer2 === "") {
      setAnswer2("show");
    } else {
      setAnswer2("");
    }
  }

  function toggleFaq3() {
    if (arrow3 === "") {
      setArrow3("rotate");
    } else {
      setArrow3("");
    }

    if (answer3 === "") {
      setAnswer3("show");
    } else {
      setAnswer3("");
    }
  }

  function toggleFaq4() {
    if (arrow4 === "") {
      setArrow4("rotate");
    } else {
      setArrow4("");
    }

    if (answer4 === "") {
      setAnswer4("show");
    } else {
      setAnswer4("");
    }
  }

  return (
    <section className="faq">
      <h3 className="faq__title">Frequently Asked Questions</h3>
      <p className="faq__description">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <ul className="faq__list" ref={faqListRef}>
        <li className="faq__question" onClick={toggleFaq1}>
          What is bookmark?
          <img
            src={iconArrow}
            className={`faq__arrow ${arrow1}`}
            alt="Icon Arrow"
          />
          <p className={`faq__answer ${answer1}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            tempora deserunt autem amet iste dolore obcaecati sint, commodi
            rerum minima ipsum velit eos laborum excepturi magni laboriosam,
            natus minus inventore nobis dolorem pariatur, quo illo ullam?
            Repellendus laborum, necessitatibus magnam neque totam explicabo
            vitae. Ratione odit eveniet saepe minus tempora.
          </p>
        </li>
        <li className="faq__question" onClick={toggleFaq2}>
          How can I request a new browser?
          <img
            src={iconArrow}
            className={`faq__arrow ${arrow2}`}
            alt="Icon Arrow"
          />
          <p className={`faq__answer ${answer2}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            tempora deserunt autem amet iste dolore obcaecati sint, commodi
            rerum minima ipsum velit eos laborum excepturi magni laboriosam,
            natus minus inventore nobis dolorem pariatur, quo illo ullam?
            Repellendus laborum, necessitatibus magnam neque totam explicabo
            vitae. Ratione odit eveniet saepe minus tempora.
          </p>
        </li>
        <li className="faq__question" onClick={toggleFaq3}>
          Is there a mobile app?
          <img
            src={iconArrow}
            className={`faq__arrow ${arrow3}`}
            alt="Icon Arrow"
          />
          <p className={`faq__answer ${answer3}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            tempora deserunt autem amet iste dolore obcaecati sint, commodi
            rerum minima ipsum velit eos laborum excepturi magni laboriosam,
            natus minus inventore nobis dolorem pariatur, quo illo ullam?
            Repellendus laborum, necessitatibus magnam neque totam explicabo
            vitae. Ratione odit eveniet saepe minus tempora.
          </p>
        </li>
        <li className="faq__question" onClick={toggleFaq4}>
          What about other Chromium browsers?
          <img
            src={iconArrow}
            className={`faq__arrow ${arrow4}`}
            alt="Icon Arrow"
          />
          <p className={`faq__answer ${answer4}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            tempora deserunt autem amet iste dolore obcaecati sint, commodi
            rerum minima ipsum velit eos laborum excepturi magni laboriosam,
            natus minus inventore nobis dolorem pariatur, quo illo ullam?
            Repellendus laborum, necessitatibus magnam neque totam explicabo
            vitae. Ratione odit eveniet saepe minus tempora.
          </p>
        </li>
      </ul>

      <button className="faq__info">More Info</button>
    </section>
  );
};

export default Faq;
