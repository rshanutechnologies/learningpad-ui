// import { useEffect, useState } from "react";
// import Login from "../pages/Login";

// function Navbar() {
//   const [active, setActive] = useState("");
//   const [showLogin, setShowLogin] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");

//       sections.forEach((sec) => {
//         if (window.scrollY >= sec.offsetTop - 150) {
//           setActive(sec.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     // ✅ important cleanup
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="navbar">
//         <div className="container nav-flex">
//           <h3 style={{ color: "#28C76F" , fontSize:"40px" }}>WisePad</h3>

//           <div className="nav-links">
//             <a
//               href="#products"
//               className={active === "products" ? "active" : ""}
//             >
//               Our Products
//             </a>

//             <a
//               href="#why"
//               className={active === "why" ? "active" : ""}
//             >
//               Why Choose Us
//             </a>

//             <a
//               href="#customers"
//               className={active === "customers" ? "active" : ""}
//             >
//               Our Customers
//             </a>

//             <a
//               href="#contact"
//               className={active === "contact" ? "active" : ""}
//             >
//               Contact Us
//             </a>

//             <a
//               href="#about"
//               className={active === "about" ? "active" : ""}
//             >
//               About Us
//             </a>

//             <button
//               className="login-btn"
//               onClick={() => setShowLogin(true)}
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Login Modal */}
//       {showLogin && <Login close={() => setShowLogin(false)} />}
//     </>
//   );
// }

// export default Navbar;




import { useEffect, useState } from "react";
import Login from "../pages/Login";
import "./navbar.css";
function Navbar() {
  const [active, setActive] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ NEW

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu after click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-container nav-flex">
          <h3 style={{ color: "#28C76F", fontSize: "40px" }}>
            WisePad
          </h3>

          {/* ✅ Toggle Button */}
          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* ✅ Nav Links */}
          <div className={`nav-links ${menuOpen ? "show" : ""}`}>
            <a
              href="#products"
              className={active === "products" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Our Products
            </a>

            <a
              href="#why"
              className={active === "why" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Why Choose Us
            </a>

            <a
              href="#customers"
              className={active === "customers" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Our Customers
            </a>

            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Contact Us
            </a>

            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={handleLinkClick}
            >
              About Us
            </a>

            <button
              className="login-btn"
              onClick={() => {
                setShowLogin(true);
                setMenuOpen(false);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {showLogin && <Login close={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;