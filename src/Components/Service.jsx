import React from "react";
import "../Styles/service.css";

import birthdayImg from "../../public/images/catering2.avif";
import cateringImg from "../../public/images/catering1.avif";
import weddingImg from "../../public/images/catering3.avif";
import eventImg from "../../public/images/catering4.avif";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Caterings",
      description:
        "In the new era of technology we look in the future with certainty for life.",
      image: cateringImg,
    },
    {
      id: 2,
      title: "Birthdays",
      description:
        "In the new era of technology we look in the future with certainty for life.",
      image: birthdayImg,
    },
    {
      id: 3,
      title: "Weddings",
      description:
        "In the new era of technology we look in the future with certainty for life.",
      image: weddingImg,
    },
    {
      id: 4,
      title: "Events",
      description:
        "In the new era of technology we look in the future with certainty for life.",
      image: eventImg,
    },
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h2>
          We also offer unique <br /> services for your events
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
