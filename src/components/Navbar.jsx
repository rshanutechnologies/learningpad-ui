import { useEffect, useState } from "react";
import Login from "../pages/Login";

function Navbar() {
  const [active, setActive] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 150) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // ✅ important cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="container nav-flex">
          <h3 style={{ color: "#1e73e8" }}>LearningPad</h3>

          <div className="nav-links">
            <a
              href="#products"
              className={active === "products" ? "active" : ""}
            >
              Our Products
            </a>

            <a
              href="#why"
              className={active === "why" ? "active" : ""}
            >
              Why Choose Us
            </a>

            <a
              href="#customers"
              className={active === "customers" ? "active" : ""}
            >
              Our Customers
            </a>

            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
            >
              Contact Us
            </a>

            <a
              href="#about"
              className={active === "about" ? "active" : ""}
            >
              About Us
            </a>

            <button
              className="login-btn"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Login Modal */}
      {showLogin && <Login close={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
