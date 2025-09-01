import React from "react";
import "../Styles/menu1.css";
import menu1Img from "../images/menu1.avif";
import useScrollAnimation from "./UseScrollAnimations";

const Menu1 = () => {
  useScrollAnimation();

  return (
    <section className="menu1">
      {/* Left Side - Image with overlay card */}
      <div className="menu1-left">
        <div className="menu1-image-wrapper">
          <img src={menu1Img} alt="Healthy Food" className="menu1-image" />
          <div className="menu1-card">
            <h3>Come and visit us</h3>
            <p>📞 (414) 867 - 0107</p>
            <p>✉️ happytummy@restaurant.com</p>
            <p>📍 837 W, Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </div>
        </div>
      </div>

      {/* Right Side - Text and Button */}
      <div className="menu1-right">
        <h1>
          We provide healthy <br /> food for your <span>family.</span>
        </h1>
        <p>
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city’s rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
        </p>
        <p>
          At place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        <button className="menu1-button">Book A Table</button>
      </div>
    </section>
  );
};

export default Menu1;
