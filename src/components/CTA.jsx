import "./cta.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">

          {/* Floating Shapes */}
          <div className="shape pink"></div>
          <div className="shape red"></div>
          <div className="shape yellow"></div>
          <div className="shape orange"></div>

          <div className="cta-content">
            <div className="cta-left">
              <h2>
                Transform your institution today <br />
                Join the Future of Learning
              </h2>
              <p>
                Get a demo, explore the platform, and see how LearningPad
                transforms classrooms.
              </p>
            </div>

            <div className="cta-right">
              <button>Book a Free Demo</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;
