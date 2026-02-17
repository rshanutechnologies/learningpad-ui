import { useNavigate } from "react-router-dom";
import modelData from "../data/modelData";
import "./courses.css";

function CoursesPage() {
  const navigate = useNavigate();

  const courses = Object.keys(modelData);

  return (
    <div className="courses-wrapper">

      <h2 className="courses-title">Please select a course to continue</h2>

      <div className="courses-list">
        {courses.map((course) => (
          <div
            key={course}
            className="course-card"
            onClick={() =>
              navigate("/dashboard", {
                state: { selectedCourse: course }
              })
            }
          >
            <div className="course-left">
              <div className="course-icon">📘</div>
              <h3>{course}</h3>
            </div>

            <div className="course-arrow">➜</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CoursesPage;
