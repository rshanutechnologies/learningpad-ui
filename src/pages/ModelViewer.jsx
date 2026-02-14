// import ThreeDViewer from "../components/ThreeDViewer";
// import modelData from "../data/modelData";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import "./modelviewer.css";

// function ModelViewer() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { title } = location.state || { title: "Model Viewer" };
//   const { course, lesson, topicId } = location.state || {};

//   const isScience = course?.includes("SCIENCE");
//   const isMaths = course?.includes("MATHS");

//   const canvasRef = useRef(null);
//   const ctxRef = useRef(null);

//   const [drawing, setDrawing] = useState(false);
//   const [sequenceType, setSequenceType] = useState("counting");
//   const [showToolbar, setShowToolbar] = useState(false);

//   if (!course || !lesson || !topicId) {
//     return (
//       <div style={{ padding: "40px" }}>
//         <h2>Invalid Model Data</h2>
//         <button onClick={() => navigate("/")}>
//           Go Back To Dashboard
//         </button>
//       </div>
//     );
//   }

//   const currentModel = modelData?.[course]?.[lesson]?.[topicId];

//   /* ================= DRAWING SETUP ================= */

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const ctx = canvas.getContext("2d");
//     ctx.lineCap = "round";
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = "#ffffff";
//     ctxRef.current = ctx;
//   }, [currentModel]);

//   const startDrawing = (e) => {
//     if (!showToolbar) return;
//     const rect = canvasRef.current.getBoundingClientRect();
//     ctxRef.current.beginPath();
//     ctxRef.current.moveTo(e.clientX - rect.left, e.clientY - rect.top);
//     setDrawing(true);
//   };

//   const draw = (e) => {
//     if (!drawing || !showToolbar) return;
//     const rect = canvasRef.current.getBoundingClientRect();
//     ctxRef.current.lineTo(e.clientX - rect.left, e.clientY - rect.top);
//     ctxRef.current.stroke();
//   };

//   const finishDrawing = () => {
//     ctxRef.current?.closePath();
//     setDrawing(false);
//   };

//   const clearCanvas = () => {
//     ctxRef.current?.clearRect(
//       0,
//       0,
//       canvasRef.current.width,
//       canvasRef.current.height
//     );
//   };

//   /* ================= SEQUENCE DATA ================= */

//   const counting = [1,2,3,4,5,6,7,8,9,10];
//   const odd = [1,3,5,7,9,11,13,15,17,19];
//   const even = [2,4,6,8,10,12,14,16,18,20];
//   const triangular = [1,3,6,10,15,21,28,36,45,55];
//   const square = [1,4,9,16,25,36,49,64,81,100];

//   const getSequence = () => {
//     switch(sequenceType){
//       case "odd": return odd;
//       case "even": return even;
//       case "triangular": return triangular;
//       case "square": return square;
//       default: return counting;
//     }
//   };

//   const colors = ["#ff6b6b","#4ecdc4","#f7c948","#f78fb3","#786fa6"];

//   const renderLeftContent = () => {
//     const sequence = getSequence();
//     return (
//       <div className="demo-sequence">
//         {sequence.slice(0,10).map((num,i)=>(
//           <div
//             key={i}
//             className="circle"
//             style={{background: colors[i % colors.length]}}
//           >
//             {num}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   /* ================= MAIN LAYOUT ================= */

//   return (
//     <>
//       {/* ================= SCIENCE VIEW ================= */}
//       {isScience && currentModel?.type === "3d" && (
//         <div className="science-viewer-wrapper">
//           {currentModel?.modelFile && (
//             <ThreeDViewer modelFile={currentModel.modelFile} />
//           )}

//           <div className="science-header">
//             <h1>{currentModel.heading}</h1>
//           </div>

//           <div className="science-bottom-bar">
//             <button onClick={() => navigate(-1)}>← Back</button>
//           </div>
//         </div>
//       )}

//       {/* ================= MATHS VIEW ================= */}
//       {isMaths && currentModel?.type === "sequence" && (
//         <div className="viewer-wrapper">
//           <div className="viewer-left">
//             {renderLeftContent()}
//             <div className="bottom-controls">
//               <button onClick={() => navigate(-1)}>← Back</button>
//             </div>
//           </div>

//           <div className="viewer-right">
//             <h1>{currentModel.heading}</h1>

//             <div className="sequence-buttons">
//               <button onClick={()=>setSequenceType("counting")}>Counting</button>
//               <button onClick={()=>setSequenceType("odd")}>Odd</button>
//               <button onClick={()=>setSequenceType("even")}>Even</button>
//               <button onClick={()=>setSequenceType("triangular")}>Triangular</button>
//               <button onClick={()=>setSequenceType("square")}>Square</button>
//             </div>

//             <div className="sequence-display">
//               {getSequence().join(", ")}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ================= UNIVERSAL DRAWING OVERLAY ================= */}

//       <canvas
//         ref={canvasRef}
//         className="drawing-overlay"
//         onMouseDown={startDrawing}
//         onMouseUp={finishDrawing}
//         onMouseMove={draw}
//         onMouseLeave={finishDrawing}
//       />

//       <button
//         className="floating-toggle"
//         onClick={() => setShowToolbar(!showToolbar)}
//       >
//         ✏
//       </button>

//       {showToolbar && (
//         <div className="left-toolbar">
//           <button
//             className="tool"
//             onClick={() => {
//               ctxRef.current.globalCompositeOperation = "source-over";
//             }}
//           >
//             ✏
//           </button>

//           <button
//             className="tool"
//             onClick={() => {
//               ctxRef.current.globalCompositeOperation = "destination-out";
//             }}
//           >
//             🧽
//           </button>

//           <button className="tool" onClick={clearCanvas}>
//             🗑
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default ModelViewer;

import { useLocation, useNavigate } from "react-router-dom";
import modelData from "../data/modelData";
import MathsLayout from "../layouts/MathsLayout";
import ScienceLayout from "../layouts/ScienceLayout";
import { resourceData } from "../features/resources/resourceData";
import AtAGlance from "../features/atAGlance/AtAGlance";
function ModelViewer() {
  const location = useLocation();
  const navigate = useNavigate();

const { course, lesson, topicId, activityId, resourceId, type } =
  location.state || {};


  // Safety check
if (
  !course ||
  !lesson ||
  (
    type === "activity" ? !activityId :
    type === "resource" ? !resourceId :
    !topicId
  )
)
 {

    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Invalid Data</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // Get correct model
 let currentModel;

if (type === "activity") {
  currentModel =
    modelData?.[course]?.[lesson]?.activities?.[
      Number(activityId)
    ];
} 
else if (type === "resource") {

  const pages = resourceData.filter(
    (item) =>
      item.course === course &&
      item.lesson === lesson &&
      item.resourceId === Number(resourceId)
  );

  if (!pages.length) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>No Resource Content Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return <AtAGlance data={pages} />;
}

else {
  currentModel =
    modelData?.[course]?.[lesson]?.topics?.[
      Number(topicId)
    ];
}


  console.log("course:", course);
  console.log("lesson:", lesson);
  console.log("topicId:", topicId);
  console.log("currentModel:", currentModel);

  if (!currentModel) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>No Topic Found</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // Maths layout
  if (course.includes("MATHS")) {
    return <MathsLayout model={currentModel} />;
  }

  // Science layout
  if (course.includes("SCIENCE")) {
    return <ScienceLayout model={currentModel} />;
  }

  return null;
}

export default ModelViewer;
