import { useState } from "react";

function BrainBuster({ data }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="brain-buster">
      <h2>Brain Buster</h2>

      <p>{data.question}</p>

      {!showAnswer ? (
        <button onClick={() => setShowAnswer(true)}>
          Show Answer
        </button>
      ) : (
        <p className="answer">{data.answer}</p>
      )}
    </div>
  );
}

export default BrainBuster;
