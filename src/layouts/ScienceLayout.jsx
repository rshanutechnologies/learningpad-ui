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
import VideoViewer from "../features/video3d/VideoViewer";

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

  {model.type === "3d" && (
    <ThreeDViewer modelFile={model.modelFile} />
  )}

 {model.type === "video3d" && (
   <VideoViewer video={model.modelFile} />

  )}

  {model.type === "video" && (
    <video controls width="100%" height="100%">
      <source src={model.file} type="video/mp4" />
    </video>
  )}

  {model.type === "pdf" && (
    <iframe src={model.file} width="100%" height="100%" />
  )}

{model.type === "link" && (
  <iframe
    src={model.link}
    width="100%"
    height="100%"
    style={{ border: "none" }}
    title="External Viewer"
  />
)}
</div>

{model.type === "3d" && <DrawingOverlay />}


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











// import { useNavigate } from "react-router-dom";
// import ThreeDViewer from "../features/science/ThreeDViewer";
// import DrawingOverlay from "../features/modelViewer/DrawingOverlay";
// import VideoViewer from "../features/video3d/VideoViewer";
// import { useRef, useState, useEffect } from "react";
// import "./scienceLayout.css";

// function ScienceLayout({ model }) {
//   const navigate = useNavigate();

//   // ✅ Hooks MUST be inside component
//   const audioRef = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);

//   if (!model) return <h2>No Model Data</h2>;

//   // ✅ Load audio when topic changes
//   useEffect(() => {
//     if (!model.audio) return;

//     // stop old audio
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }

//     const audio = new Audio(model.audio);
//     audioRef.current = audio;

//     audio.ontimeupdate = () => {
//       if (!audio.duration) return;

//       const p = audio.currentTime / audio.duration;
//       setProgress(p * 100);
//     };

//     audio.onended = () => {
//       setPlaying(false);
//     };

//     return () => {
//       audio.pause();
//     };
//   }, [model]);

//   // ✅ Play / Pause
//   const togglePlay = () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (playing) {
//       audio.pause();
//     } else {
//       audio.play();
//     }

//     setPlaying(!playing);
//   };

//   return (
//     <div className="viewer-wrapper">

//       {/* TITLE */}
//       <div className="viewer-title">
//         01. {model.heading}
//       </div>

//       {/* MODEL AREA */}
//       <div className="viewer-model">

//         {model.type === "3d" && (
//           <ThreeDViewer
//             modelFile={model.modelFile}
//             playing={playing}
//           />
//         )}

//         {model.type === "video3d" && (
//           <VideoViewer video={model.modelFile} />
//         )}

//         {model.type === "video" && (
//           <video controls width="100%" height="100%">
//             <source src={model.file} type="video/mp4" />
//           </video>
//         )}

//         {model.type === "pdf" && (
//           <iframe src={model.file} width="100%" height="100%" />
//         )}
//       </div>

//       {/* DRAW TOOL */}
//       {model.type === "3d" && <DrawingOverlay />}

//       {/* PLAYER CONTROLS */}
//       <div className="viewer-bottom">

//         <button
//           className="viewer-back"
//           onClick={() => navigate("/dashboard")}
//         >
//           ← Back
//         </button>

//         <div className="viewer-player" onClick={togglePlay}>
//           {playing ? "⏸" : "▶"}

//           <div className="viewer-progress">
//             <div
//               style={{
//                 width: `${progress}%`,
//                 height: "4px",
//                 background: "#4da6ff",
//                 transition: "width 0.1s linear"
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SWITCHES */}
//       <div className="viewer-right">
//         <div className="viewer-switch"></div>
//         <div className="viewer-switch"></div>
//       </div>

//     </div>
//   );
// }

// export default ScienceLayout;