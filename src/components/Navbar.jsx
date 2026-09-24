import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        <div className="logo-icon">
          H
        </div>

        <div className="logo-text">
          <h2>HARAPARVATI</h2>
          <span>BIKE GARAGE & SPARE PARTS</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => {
          const isActive =
            link.path === "/"
              ? location.pathname === "/"
              : link.path === "/shop"
                ? location.pathname.startsWith("/shop")
                : location.pathname === link.path;

          return (
            <Link
              to={link.path}
              key={link.name}
              className={
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Actions */}
      <div className="nav-actions">

        {/* Contact Icon */}
        <Link
          to="/contact"
          className="nav-contact"
          aria-label="Contact garage"
          onClick={closeMenu}
        >
          <Phone size={19} />
        </Link>

        {/* Boxed Mobile Menu Icon */}
        <button
          type="button"
          className="mobile-menu flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-[#1b1e24] transition hover:border-[#ff6b1a] hover:bg-[#ff6b1a]/10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>
    </header>
  );
};

export default Navbar;