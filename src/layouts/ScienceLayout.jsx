// import ThreeDViewer from "../features/science/ThreeDViewer";
// import AtAGlance from "../features/atAGlance/AtAGlance";
// import BrainBuster from "../features/brainBuster/BrainBuster";
// import DrawingOverlay from "../features/modelViewer/DrawingOverlay";

// function ScienceLayout({ model }) {
//   if (!model) {
//     return (
//       <div style={{ padding: "40px", textAlign: "center" }}>
//         <h2>No Model Data Found</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="science-wrapper">

//       <h1 className="science-heading">
//         {model.heading}
//       </h1>

//       {model.type === "3d" && model.modelFile && (
//         <ThreeDViewer modelFile={model.modelFile} />
//       )}

//       {model.atAGlance && (
//         <AtAGlance data={model.atAGlance} />
//       )}

//       {model.brainBuster && (
//         <BrainBuster data={model.brainBuster} />
//       )}

//       <DrawingOverlay />

//     </div>
//   );
// }

// export default ScienceLayout;
import { useNavigate } from "react-router-dom";
import ThreeDViewer from "../features/science/ThreeDViewer";
import DrawingOverlay from "../features/modelViewer/DrawingOverlay";
import "./scienceLayout.css";

function ScienceLayout({ model }) {
    const navigate = useNavigate();
  if (!model) return <h2>No Model Data</h2>;

  return (
    <div className="viewer-wrapper">

      {/* TITLE */}
      <div className="viewer-title">
        01. {model.heading}
      </div>

      {/* FULLSCREEN MODEL */}
      <div className="viewer-model">
        <ThreeDViewer modelFile={model.modelFile} />
      </div>

      {/* DRAWING UI */}
      <DrawingOverlay />

      {/* BOTTOM CONTROLS */}
      <div className="viewer-bottom">
        <button className="viewer-back"  onClick={() => navigate("/dashboard")}>← Back</button>

        <div className="viewer-player">
          ▶
          <div className="viewer-progress"></div>
        </div>
      </div>

      {/* RIGHT SIDE SWITCHES */}
      <div className="viewer-right">
        <div className="viewer-switch"></div>
        <div className="viewer-switch"></div>
      </div>

    </div>
  );
}

export default ScienceLayout;
