import React, { useState } from "react";
import "../Styles/ourmenu.css";
import Navbar from "./Navbar";

const menuItems = [
  {
    id: 1,
    title: "Fried Eggs",
    price: "€ 15.99",
    category: "Breakfast",
    image:
      "https://framerusercontent.com/modules/kvBnhR6eeyUGM0dBaoAU/53HRNStLzAnUNiHlYh6v/assets/512/LvRK72ggYvlLMsIDSBBJIQXsTI.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    id: 2,
    title: "Hawaiian Pizza",
    price: "€ 15.99",
    category: "Main Dishes",
    image:
      "https://framerusercontent.com/modules/vIqahy1NvUUharASXFjZ/zNvevJndKG4yczEVhP16/assets/512/QjPVdzwoY2C6v8NoUx5Auns0x0Y.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    id: 3,
    title: "Martinez Cocktail",
    price: "€ 7.25",
    category: "Drinks",
    image:
      "https://framerusercontent.com/modules/vIqahy1NvUUharASXFjZ/zNvevJndKG4yczEVhP16/assets/512/QmqcvN0y5xaVCxfwPsP53mxXG8.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    id: 4,
    title: "Butterscotch Cake",
    price: "€ 20.99",
    category: "Desserts",
    image:
      "https://framerusercontent.com/modules/vIqahy1NvUUharASXFjZ/zNvevJndKG4yczEVhP16/assets/512/gq2yd0QB1n5dQxnxTMd10hLWGg.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    id: 5,
    title: "Mint Lemonade",
    price: "€ 5.89",
    category: "Drinks",
    image:
      "https://framerusercontent.com/modules/vIqahy1NvUUharASXFjZ/zNvevJndKG4yczEVhP16/assets/512/GbSQrSeuo9AIzVmnBE4zgzTluM.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    id: 6,
    title: "Chocolate Icecream",
    price: "€ 18.05",
    category: "Desserts",
    image:
      "https://framerusercontent.com/modules/vIqahy1NvUUharASXFjZ/zNvevJndKG4yczEVhP16/assets/512/o07xzfn0HveFVuhIyBPQ0XArgs.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    id: 7,
    title: "Cheese Burger",
    price: "€ 12.55",
    category: "Main Dishes",
    image:
      "https://framerusercontent.com/modules/vIqahy1NvUUharASXFjZ/zNvevJndKG4yczEVhP16/assets/512/dDtNJVfHvU6ow7zPDRbNt7ZN47M.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    id: 8,
    title: "Classic Waffles",
    price: "€ 12.99",
    category: "Breakfast",
    image:
      "https://framerusercontent.com/modules/vIqahy1NvUUharASXFjZ/zNvevJndKG4yczEVhP16/assets/512/GBvMS4SkPB5BxQuNGwlf5yNnuJU.png",
    desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
];

const OurMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = ["All", "Breakfast", "Main Dishes"];
  const dropdownCategories = ["Snacks", "Desserts", "Drinks", "Specials"];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="menu-section">
        <div className="menu-header">
          <h2>Our Menu</h2>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
          <div className="menu-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}

            {/* Dropdown */}
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                More ▾
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  {dropdownCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setDropdownOpen(false);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="menu-info">
                <h4 className="menu-price">{item.price}</h4>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurMenu;
