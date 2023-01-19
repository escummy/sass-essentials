// import React from 'react'
import logo from "../../assets/tmdb.png";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="inner-footer">
          <div className="footer-text">
            <h4>What is TMDB's API?</h4>
            <p>
              The API service is for those of you interested in using the
              movies, TV show, actor images or updated data in your application.
              A system that provides to programmatically fetch and use TMDB data
              or images.
            </p>
          </div>
          <div>
            <img src={logo} alt="TMDB spin logo" className="tmdb-logo" />
          </div>
          <div className="footer-links">
            <ul className="links">
              <li>Contact</li>
              <li>Cookie Settings</li>
              <li>Privacy Policy</li>
              <li>More About</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
        <p className="copyrigth">
          Copyright &copy;2023 escummy | All Right are reserved.
        </p>
      </footer>
    </>
  );
};
