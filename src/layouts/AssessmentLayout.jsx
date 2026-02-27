import { useLocation, useNavigate } from "react-router-dom";
import "./scienceLayout.css";

function AssessmentLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { assessment, heading, course, lesson } =
    location.state || {};

  // ✅ Back handler (same as ScienceLayout)
  const handleBack = () => {
    navigate("/dashboard", {
      state: {
        course,
        lesson,
        from: "dashboard"
      }
    });
  };

  if (!assessment) return <h2>No Assessment Found</h2>;

  return (
    <div className="viewer-wrapper">

      {/* TITLE */}
      <div className="viewer-title">
        Assessment - {heading}
      </div>

      {/* CONTENT */}
      <div className="viewer-model">

        {assessment.type === "link" && (
          <iframe
            src={assessment.link}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Assessment Viewer"
          />
        )}

        {assessment.type === "pdf" && (
          <iframe
            src={assessment.file}
            width="100%"
            height="100%"
            title="Assessment PDF"
          />
        )}

      </div>

      {/* ✅ BACK BUTTON AREA (same as ScienceLayout) */}
      <div className="viewer-bottom">
        <button className="viewer-back" onClick={handleBack}>
          ← Back
        </button>

        <div className="viewer-player">
        
          <div className="viewer-progress"></div>
        </div>
      </div>

    </div>
  );
}

export default AssessmentLayout;