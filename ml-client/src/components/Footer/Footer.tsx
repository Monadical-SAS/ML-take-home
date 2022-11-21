import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        Made with love &#10084; by the
        <a href="https://monadical.com" target="_blank" rel="noreferrer">
          Monadical
        </a>
        team
      </p>

      <a
        target="_blank"
        href="https://github.com/monadical-SAS"
        rel="noreferrer"
      >
        github: Monadical SAS
      </a>
      <a
        target="_blank"
        href="https://twitter.com/MonadicalHQ"
        rel="noreferrer"
      >
        twitter: @monadicalHQ
      </a>
    </footer>
  );
};

export default Footer;
