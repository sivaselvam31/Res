import React from "react";
import "../Styles/footer.css";

import img1 from "../../public/images/footer1.avif";
import img2 from "../../public/images/footer2.avif";
import img3 from "../../public/images/footer3.avif";
import img4 from "../../public/images/footer4.avif";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">🍲</span>
            <span className="logo-text">Cuisine</span>
          </div>
          <p>
            In the new era of technology we look a<br />
            in the future with certainty and pride to<br />
            for our company and.
          </p>
          <div className="socials">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h5>Pages</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Utility Pages</h5>
            <ul>
              <li><a href="#">Start Here</a></li>
              <li><a href="#">Breakfast</a></li>
              <li><a href="#">Dinner</a></li>
              <li><a href="#">Lunch</a></li>
            </ul>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="footer-insta">
          <h5>Follow Us On Instagram</h5>
          <div className="insta-grid">
            <img src={img1} alt="food1" />
            <img src={img2} alt="food2" />
            <img src={img3} alt="food3" />
            <img src={img4} alt="food4" />
          </div>
        </div>
      </div>

      <div className="footer-copy">
        Copyright © 2023 FramerBite. All Rights Reserved
      </div>
    </footer>
  );
}
