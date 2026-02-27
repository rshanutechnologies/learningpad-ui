import { useLocation, useNavigate } from "react-router-dom";
import { brainBustersData } from "../features/brainBusters/brainBustersData";
import { useState } from "react";
import "./brainBusters.css";

function BrainBustersPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { course, lesson, topicId, activityId, type } =
    location.state || {};

  const selectedId =
    type === "topic" ? topicId : activityId;

  const data = brainBustersData.find(
    (item) =>
      item.course === course &&
      item.lesson === lesson &&
      item.type === type &&
      item.id === selectedId
  );

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!data) return <div>No Brain Busters Found</div>;

  const question = data.questions[index];

  return (
    <div className="bb-wrapper">
      <h1>Brain Busters for {lesson}</h1>

      <div
        className="bb-card"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2>{question.question}</h2>

        {!showAnswer &&
          question.options.map((opt, i) => (
            <p key={i}>{String.fromCharCode(97 + i)}. {opt}</p>
          ))}

        {showAnswer && (
          <h3>Answer: {question.answer}</h3>
        )}
      </div>

      <div className="bb-nav">
        <button
          disabled={index === 0}
          onClick={() => {
            setIndex(index - 1);
            setShowAnswer(false);
          }}
        >
          ◀
        </button>

        <button
          disabled={index === data.questions.length - 1}
          onClick={() => {
            setIndex(index + 1);
            setShowAnswer(false);
          }}
        >
          ▶
        </button>
      </div>

     <button
  onClick={() =>
    navigate("/dashboard", { state: location.state })
  }
>
  Go Back
</button>
    </div>
  );
}

export default BrainBustersPage;
