import { FaMedal, FaGlobe, FaUniversity, FaChartBar } from "react-icons/fa";
import "./whychoose.css";

function WhyChoose() {
  return (
    <section className="why-section" id="why">
      <div className="container">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          Why institutions love LearningPad.
        </p>

        <div className="why-grid">

          <div className="why-card">
            <FaMedal className="why-icon" />
            <h3>Proven Expertise</h3>
            <p>
              Backed by 20+ years of academic leadership and 15+ years of 
              building education solutions, certified with CMMI Level 3 
              and ISO standards.
            </p>
          </div>

          <div className="why-card">
            <FaGlobe className="why-icon" />
            <h3>Global Impact</h3>
            <p>
              A diverse R&D team delivering impact-driven solutions 
              to strengthen education worldwide.
            </p>
          </div>

          <div className="why-card">
            <FaUniversity className="why-icon" />
            <h3>Aligned with NEP 2024</h3>
            <p>
              Designed to meet National Education Policy goals and 
              ICT frameworks for modern, effective learning environments.
            </p>
          </div>

          <div className="why-card">
            <FaChartBar className="why-icon" />
            <h3>Enhanced Outcomes</h3>
            <p>
              Boost student retention by 5X and teaching effectiveness 
              by 10X with immersive and personalized learning experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
