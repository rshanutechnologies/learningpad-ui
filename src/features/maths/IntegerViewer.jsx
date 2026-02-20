import { useState } from "react";
import "./integerViewer.css";

function IntegerViewer() {
  const [position, setPosition] = useState(0);

  const moveLeft = () => setPosition((p) => Math.max(-7, p - 1));
  const moveRight = () => setPosition((p) => Math.min(7, p + 1));
  const reset = () => setPosition(0);

  const getStatus = () => {
    if (position > 0) return `You're at +${position}, a positive integer!`;
    if (position < 0) return `You're at ${position}, a negative integer!`;
    return "You're at 0, neither positive nor negative!";
  };

  const numbers = Array.from({ length: 15 }, (_, i) => i - 7);

  return (
    <div className="integer-page">
      <div className="integer-card">

        {/* TITLE */}
        <h1 className="integer-title">
          Fun with Integers: The Number Line Adventure!
        </h1>

        {/* NUMBER LINE BOX */}
        <div className="line-container">
          <div className="number-line">

            {/* POINTER */}
            <div
              className="pointer"
              style={{
                left: `${((position + 7) / 14) * 100}%`
              }}
            >
              ▼
            </div>

            {/* MARKS */}
            {numbers.map((num) => (
              <div
                key={num}
                className="mark"
                style={{ left: `${((num + 7) / 14) * 100}%` }}
              >
                <span>{num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="controls">
          <button onClick={moveLeft}>Move Left</button>
          <button onClick={moveRight}>Move Right</button>
          <button onClick={reset}>Reset</button>
        </div>

        {/* STATUS */}
        <p className="status">{getStatus()}</p>

        {/* INFO CARD */}
        <div className="info-box">
          <h2>What are Integers?</h2>

          <p>
            Integers are whole numbers that can be positive,
            negative, or zero. On our number line:
          </p>

          <ul>
            <li>Numbers to the right of 0 are positive integers (+1, +2, +3...)</li>
            <li>Numbers to the left of 0 are negative integers (-1, -2, -3...)</li>
            <li>0 is neither positive nor negative</li>
          </ul>

          <p>
            Use the buttons to move along the number line and explore integers!
          </p>
        </div>

      </div>
    </div>
  );
}

export default IntegerViewer;
