import React from "react";
import "../Styles/blog.css";

// import local images
import blog1 from "../images/blog1.avif";
import blog2 from "../images/blog2.avif";
import blog3 from "../images/blog3.avif";
import blog4 from "../images/blog4.avif";
import blog5 from "../images/blog5.avif";

const blogs = [
  {
    id: 1,
    title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tincidunt ipsum. Ut interdum nulla tellus, nec egestas. Sed fringilla dolor quis ex faucibus laoreet.",
    date: "January 3, 2023",
    img: blog1,
    featured: true,
  },
  {
    id: 2,
    title: "How to prepare a delicious gluten free sushi",
    date: "Apr 8, 2022",
    img: blog2,
  },
  {
    id: 3,
    title: "Exclusive baking lessons from the pastry king",
    date: "Mar 15, 2022",
    img: blog3,
  },
  {
    id: 4,
    title: "How to prepare the perfect fries in an air fryer",
    date: "Feb 28, 2022",
    img: blog4,
  },
  {
    id: 5,
    title: "How to prepare delicious chicken tenders",
    date: "Feb 6, 2022",
    img: blog5,
  },
];

export default function BlogSection() {
  return (
    <section className="blog">
      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <h2 className="section-title">Our Blog & Articles</h2>
          <button className="blog-btn">Read All Articles</button>
        </div>

        {/* Blog Layout */}
        <div className="blog-layout">
          {/* Left featured card */}
          <div className="featured-card">
            <img src={blogs[0].img} alt={blogs[0].title} />
            <div className="blog-content">
              <p className="date">{blogs[0].date}</p>
              <h3 className="title">{blogs[0].title}</h3>
              <p className="desc">{blogs[0].description}</p>
            </div>
          </div>

          {/* Right grid (4 blogs) */}
          <div className="right-grid">
            {blogs.slice(1).map((b) => (
              <div className="blog-card" key={b.id}>
                <img src={b.img} alt={b.title} />
                <div className="blog-content">
                  <p className="date">{b.date}</p>
                  <h3 className="title">{b.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
