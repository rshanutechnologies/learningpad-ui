import courseData from "../../data/courseData";
import MathsLayout from "../../layouts/MathsLayout";
import ScienceLayout from "../../layouts/ScienceLayout";
import { useLocation } from "react-router-dom";

function ModelViewer() {
  const { state } = useLocation();
  const { course, lesson, topicId } = state;

  const topic =
    courseData?.[course]?.lessons?.[lesson]?.topics?.[topicId];

  if (!topic) return <h2>No Topic Found</h2>;

  if (course.includes("MATHS")) {
    return <MathsLayout topic={topic} />;
  }

  if (course.includes("SCIENCE")) {
    return <ScienceLayout topic={topic} />;
  }

  return null;
}

export default ModelViewer;
