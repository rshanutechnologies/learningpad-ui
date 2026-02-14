import { useRef, useEffect, useState } from "react";
import "./DrawingOverlay.css"
function DrawingOverlay() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [drawingMode, setDrawingMode] = useState(false);
  const [color, setColor] = useState("#ffff00");
  const [size, setSize] = useState(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctxRef.current = ctx;
  }, [color, size]);

  const start = (e) => {
    if (!drawingMode) return;
    const rect = canvasRef.current.getBoundingClientRect();
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    );
  };

  const draw = (e) => {
    if (!drawingMode) return;
    const rect = canvasRef.current.getBoundingClientRect();
    ctxRef.current.lineTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    );
    ctxRef.current.stroke();
  };

  const clearCanvas = () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  return (
    <>
      {/* LEFT TOOL BUTTON */}
      <div
        className="neo-draw-btn"
        onClick={() => setDrawingMode(!drawingMode)}
      >
        ✏
      </div>

      {/* TOOL PANEL */}
      {drawingMode && (
        <div className="neo-draw-panel">
          <label>Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <label>Size</label>
          <input
            type="range"
            min="2"
            max="15"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          <button onClick={clearCanvas}>Clear</button>
        </div>
      )}

      {/* CANVAS */}
     <canvas
  ref={canvasRef}
  className="neo-draw-canvas"
  style={{ pointerEvents: drawingMode ? "auto" : "none" }}
  onMouseDown={start}
  onMouseMove={draw}
/>

    </>
  );
}

export default DrawingOverlay;
