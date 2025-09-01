import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Menu1 from "./Components/Menu1";
import Service from "./Components/Service";
import DeliverySection from "./Components/DeliverySection";
import Testimonials from "./Components/Testimonials";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import OurMenu from "./Components/OurMenu";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page (Default Route) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu />
              <Menu1 />
              <Service />
              <DeliverySection />
              <Testimonials />
              <Blog />
              <Footer />
            </>
          }
        />
        {/* Menu Page */}
        <Route path="/menu" element={<OurMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
