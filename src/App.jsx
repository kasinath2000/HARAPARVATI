import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Developer from "./pages/Developer";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
            </>
          }
        />

        {/* All Products */}
        <Route path="/shop" element={<ProductsPage />} />
        {/* Category Products */}
        <Route path="/shop/:category" element={<ProductsPage />} />
        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
