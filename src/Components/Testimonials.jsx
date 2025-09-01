import React from "react";
import "../Styles/testimonials.css";

const testimonials = [
  {
    id: 1,
    quote: "The best restaurant",
    review:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.and it is looking very good to eat",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    img: "https://i.pravatar.cc/50?img=32",
  },
  {
    id: 2,
    quote: "Simply delicious",
    review:
      "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented. I love very much to eat",
    name: "Jack Doe",
    location: "Los Angeles, CA",
    img: "https://i.pravatar.cc/50?img=12",
  },
  {
    id: 3,
    quote: "One of a kind restaurant",
    review:
      "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    img: "https://i.pravatar.cc/50?img=44",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <h3 className="quote">“{t.quote}”</h3>
              <p className="review">{t.review}</p>
              <div className="reviewer">
                <img src={t.img} alt={t.name} />
                <div>
                  <h4 className="name">{t.name}</h4>
                  <p className="location">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
