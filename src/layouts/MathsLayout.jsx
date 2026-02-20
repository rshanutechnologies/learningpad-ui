// import SequenceViewer from "../features/maths/SequenceViewer";
// import AtAGlance from "../features/atAGlance/AtAGlance";
// import BrainBuster from "../features/brainBuster/BrainBuster";
// import DrawingOverlay from "../features/modelViewer/DrawingOverlay";

// function MathsLayout({ topic }) {
//   return (
//     <div className="maths-wrapper">

//       <div className="maths-left">
//         <SequenceViewer topic={topic} />
//       </div>

//       <div className="maths-right">
//         <h1>{topic.heading}</h1>
//         <AtAGlance data={topic.atAGlance} />
//         <BrainBuster data={topic.brainBuster} />
//       </div>

//       <DrawingOverlay />

//     </div>
//   );
// }

// export default MathsLayout;










// import SequenceViewer from "../features/maths/SequenceViewer";
// import AtAGlance from "../features/atAGlance/AtAGlance";
// import BrainBuster from "../features/brainBuster/BrainBuster";
// import DrawingOverlay from "../features/modelViewer/DrawingOverlay";
// import ThreeDViewer from "../features/science/ThreeDViewer";

// function MathsLayout({ model }) {

//   if (!model) return <h2>No Maths Data</h2>;

//   return (
//     <div className="maths-wrapper">

//       {/* ================= LEFT VIEWER ================= */}
//       <div className="maths-left">

//         {/* ===== SEQUENCE / GAME ===== */}
//         {(model.type === "sequence" || model.type === "game") && (
//           <SequenceViewer topic={model} />
//         )}

//         {/* ===== 3D MODEL ===== */}
//         {model.type === "3d" && (
//           <ThreeDViewer modelFile={model.modelFile} />
//         )}

//         {/* ===== VIDEO ===== */}
//         {model.type === "video" && (
//           <video
//             src={model.file}
//             controls
//             autoPlay
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "contain",
//               borderRadius: "12px"
//             }}
//           />
//         )}

//         {/* ===== PDF ===== */}
//         {model.type === "pdf" && (
//           <iframe
//             src={model.file}
//             title="PDF Viewer"
//             width="100%"
//             height="100%"
//             style={{ border: "none" }}
//           />
//         )}

//         {/* ===== TEXT ===== */}
//         {model.type === "text" && (
//           <div className="maths-text-view">
//             <h2>{model.heading}</h2>
//             <p>Text content goes here.</p>
//           </div>
//         )}

//       </div>

//       {/* ================= RIGHT PANEL ================= */}
//       <div className="maths-right">
//         <h1>{model.heading}</h1>

//         {model.atAGlance && (
//           <AtAGlance data={model.atAGlance} />
//         )}

//         {model.brainBuster && (
//           <BrainBuster data={model.brainBuster} />
//         )}
//       </div>

//       {/* DRAW TOOL */}
//       <DrawingOverlay />

//     </div>
//   );
// }

//export default MathsLayout;




import SequenceViewer from "../features/maths/SequenceViewer";
import IntegerViewer from "../features/maths/IntegerViewer";
import AtAGlance from "../features/atAGlance/AtAGlance";
import BrainBuster from "../features/brainBuster/BrainBuster";
import DrawingOverlay from "../features/modelViewer/DrawingOverlay";

function MathsLayout({ model }) {

  if (!model) return <h2>No Maths Data</h2>;

  const renderViewer = () => {

    switch (model.type) {

      case "integer":
        return <IntegerViewer topic={model} />;

      case "sequence":
        return <SequenceViewer topic={model} />;

      default:
        return <h2>Viewer Not Available</h2>;
    }
  };

  return (
    <div className="maths-wrapper">

      <div className="maths-left">
        {renderViewer()}
      </div>

      {/* <div className="maths-right">
        <h1>{model.heading}</h1>
 {/*
        {model.atAGlance && (
          <AtAGlance data={model.atAGlance} />
        )}

        {model.brainBuster && (
          <BrainBuster data={model.brainBuster} />
        )}
      </div> */}

      <DrawingOverlay />
    </div>
  );
}

export default MathsLayout;
