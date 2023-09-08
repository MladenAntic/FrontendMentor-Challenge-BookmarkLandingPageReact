import React, { useRef, useState } from "react";
import "./Features.scss";
import illustrationFeaturesTab1 from "./assets/images/illustration-features-tab-1.svg";
import illustrationFeaturesTab2 from "./assets/images/illustration-features-tab-2.svg";
import illustrationFeaturesTab3 from "./assets/images/illustration-features-tab-3.svg";

const Features = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const illustrationRef = useRef(null);
  const contentRef = useRef(null);

  const [item1, setItem1] = useState("features__highlight");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");

  function selectItem1() {
    setItem1("features__highlight");

    setItem2("");
    setItem3("");

    imageRef.current.src = illustrationFeaturesTab1;
    titleRef.current.innerText = "Bookmark in one click";
    descriptionRef.current.innerText =
      "Organize you bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";

    animate();
  }

  function selectItem2() {
    setItem2("features__highlight");

    setItem1("");
    setItem3("");

    imageRef.current.src = illustrationFeaturesTab2;
    titleRef.current.innerText = "Intelligent search";
    descriptionRef.current.innerText =
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";

    animate();
  }

  function selectItem3() {
    setItem3("features__highlight");

    setItem1("");
    setItem2("");

    imageRef.current.src = illustrationFeaturesTab3;
    titleRef.current.innerText = "Share your bookmarks";
    descriptionRef.current.innerText =
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";

    animate();
  }

  function animate() {
    illustrationRef.current.className = "features__illustration";
    contentRef.current.className = "features__animateContent";
    requestAnimationFrame(() => {
      illustrationRef.current.classList.add("animation-left");
      contentRef.current.classList.add("animation-right");
    });
  }

  return (
    <section className="features">
      <h3 className="features__title">Features</h3>
      <p className="features__description">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmark sync between your devices so you can access them
        on the go.
      </p>
      <ul className="features__list">
        <li onClick={selectItem1} className={item1}>
          Simple Bookmarking
        </li>
        <li onClick={selectItem2} className={item2}>
          Speedy Searching
        </li>
        <li onClick={selectItem3} className={item3}>
          Easy Sharing
        </li>
      </ul>
      <div className="wrapper">
        <div className="features__illustration" ref={illustrationRef}>
          <img
            ref={imageRef}
            src={illustrationFeaturesTab1}
            alt="Feature Tab Illustration"
          />
        </div>

        <div className="features__content">
          <div className="features__animateContent" ref={contentRef}>
            <h3 ref={titleRef}>Bookmark in one click</h3>
            <p ref={descriptionRef}>
              Organize you bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          </div>
          <div className="features__infoBtn">More Info</div>
        </div>
      </div>

      <div className="features__pattern"></div>
    </section>
  );
};

export default Features;
