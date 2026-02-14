import "./trusted.css";

function Trusted() {
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
  ];

  return (
    <section className="trusted-section">
      <div className="container">
        <h2>Trusted by Schools Worldwide</h2>
        <p className="subtitle">
          We've partnered with over <span>1,00,000+</span> customers
        </p>

        <div className="logo-slider">
          <div className="logo-track">
            {logos.concat(logos).map((logo, index) => (
              <div className="logo-card" key={index}>
                <img src={logo} alt="school logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
