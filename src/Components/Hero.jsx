import "../Styles/hero.css";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <Navbar />{" "}
      <div className="hero-content">
        {" "}
        <h1>
          {" "}
          Best food for <br /> your taste{" "}
        </h1>{" "}
        <p>
          {" "}
          Discover delectable cuisine and unforgettable moments <br /> in our
          welcoming culinary haven.{" "}
        </p>{" "}
        <div className="hero-buttons">
          {" "}
          <button className="btn-primary">Book A Table</button>{" "}
          <button className="btn-outline">Explore Menu</button>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Hero;
