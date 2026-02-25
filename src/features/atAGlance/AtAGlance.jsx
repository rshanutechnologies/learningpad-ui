import { useNavigate, useLocation } from "react-router-dom";
import "./AtAGlance.css";

function Spiral({ side }) {
  return (
    <svg
      className={`spiral ${side}`}
      viewBox="0 0 40 800"
      preserveAspectRatio="none"
    >
      {[...Array(30)].map((_, i) => (
        <circle
          key={i}
          cx="20"
          cy={20 + i * 25}
          r="8"
          fill="#cfe3dd"
          stroke="#8fb2a9"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

function AtAGlance({ data }) {
  const navigate = useNavigate();
  const location = useLocation();
  if (!data || data.length === 0) {
    return <div style={{ color: "white" }}>No Data Found</div>;
  }

  return (
    <div className="atag-wrapper">
       <button
    className="back-btn"
    onClick={() => navigate("/dashboard", { state: location.state })}
  >
    ← Back
  </button>
      {data.map((page, index) => (
        <div className="atag-page" key={index}>

          {/* Watermark */}
          <div className="watermark">LearningPad</div>

          {/* Spirals */}
          <Spiral side="left" />
          <Spiral side="right" />

          <div className="atag-content">

            <h2>{page.title}</h2>

            <div className="content-body">

              <div className="text-section">

                {page.paragraphs &&
                  page.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                {page.bullets &&
                  page.bullets.map((item, i) => (
                    <p key={i}>
                      <strong>• {item.heading}: </strong>
                      {item.text}
                    </p>
                  ))}

              </div>

              {page.image && (
                <div className="image-section">
                  <img src={page.image} alt="" />
                </div>
              )}

            </div>

            <div className="copyright">
              ©LearningPad 2024
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default AtAGlance;
