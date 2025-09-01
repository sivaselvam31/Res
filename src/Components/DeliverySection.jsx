import React from "react";
import "../Styles/delivery.css";

import chefImg from "../images/chef1.avif";
import chickenImg from "../images/chef2.avif";
import partyImg from "../images/chef3.avif";

const DeliverySection = () => {
  return (
    <section className="delivery">
      <div className="delivery-wrap">
        {/* images column (left + middle stacked) */}
        <div className="images-col">
          <div className="main-image">
            <img src={chefImg} alt="Chef" />
          </div>

          <div className="stacked-images">
            <img src={chickenImg} alt="Chicken" className="stack-img top" />
            <img src={partyImg} alt="Party" className="stack-img bottom" />
          </div>
        </div>

        {/* content column (right) */}
        <div className="content-col">
          <h2 className="title">
            Fastest Food
            <br />
            Delivery in City
          </h2>

          <p className="lead">
            Our visual designer lets you quickly and easily drag and drop your
            way to custom apps for both desktop and mobile.
          </p>

          <ul className="features">
            <li>
              <span className="feature-bullet">⏱</span>
              <span>Delivery within 30 minutes</span>
            </li>
            <li>
              <span className="feature-bullet">🏷</span>
              <span>Best Offer & Prices</span>
            </li>
            <li>
              <span className="feature-bullet">💻</span>
              <span>Online Services Available</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
