import { FaGraduationCap, FaCube } from "react-icons/fa";
import { GiMicroscope } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

import "./products.css";

function Products() {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="products-title">Our Products</h2>
        <p className="products-subtitle">
          Discover how LearningPad's integrated platform elevates teaching
          and learning experiences.
        </p>

        <div className="products-grid">

          <div className="product-card">
            <FaGraduationCap className="icon blue" />
            <h3>Neoboard</h3>
            <p>Comprehensive course management and online learning platform</p>
          </div>

          <div className="product-card">
            <GiMicroscope className="icon green" />
            <h3>AR</h3>
            <p>Interactive laboratory experiments and simulations</p>
          </div>

          <div className="product-card">
            <FaCube className="icon purple" />
            <h3>Assess AI</h3>
            <p>Immersive 3D learning environments and experiences</p>
          </div>

          <div className="product-card">
            <FaBrain className="icon teal" />
            <h3>Eval AI</h3>
            <p>AI-powered teaching assistant and evaluation system</p>
          </div>

          <div className="product-card">
            <FaBookOpen className="icon pink" />
            <h3>Governance Platform</h3>
            <p>Digital library resources and management system</p>
          </div>

          <div className="product-card">
            <FaMobileAlt className="icon orange" />
            <h3>Student App</h3>
            <p>Integrated business process management solution</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Products;
