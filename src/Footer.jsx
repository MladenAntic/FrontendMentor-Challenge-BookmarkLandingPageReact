import React from "react";
import "./Footer.scss";
import footerLogo from "./assets/images/footer_logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <nav className="footer__navigation">
          <ul>
            <li>
              <a href="#">
                <img src={footerLogo} alt="Footer Logo" />
              </a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <ul className="footer__social">
          <a href="#">
            <FacebookIcon className="footer__icon"/>
          </a>
          <a href="#">
            <TwitterIcon className="footer__icon"/>
          </a>
          <a href="#">
            <InstagramIcon className="footer__icon"/>
          </a>
          <a href="#">
            <PinterestIcon className="footer__icon"/>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
