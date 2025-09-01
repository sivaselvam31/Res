import {
  FaMugHot,
  FaUtensils,
  FaGlassCheers,
  FaBirthdayCake,
} from "react-icons/fa";
import "../Styles/menu.css";

const menuItems = [
  {
    id: 1,
    icon: <FaMugHot size={55} color="#7C8A4A" />,
    title: "Breakfast",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "Explore Menu",
  },
  {
    id: 2,
    icon: <FaUtensils size={55} color="#7C8A4A" />,
    title: "Main Dishes",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "Explore Menu",
  },
  {
    id: 3,
    icon: <FaGlassCheers size={55} color="#7C8A4A" />,
    title: "Drinks",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "Explore Menu",
  },
  {
    id: 4,
    icon: <FaBirthdayCake size={55} color="#7C8A4A" />,
    title: "Desserts",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "Explore Menu",
  },
];

const Menu = () => {
  return (
    <section className="menu-section">
      <h2 className="menu-title auto-show">Browse Our Menu</h2>
      <div className="menu-container ">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card card-reveal">
            <div className="menu-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#" className="menu-link">
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
