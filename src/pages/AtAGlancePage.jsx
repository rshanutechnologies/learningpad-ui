// import AtAGlance from "../features/atAGlance/AtAGlance";
// import { atAGlanceData } from "../features/atAGlance/atAGlanceData";

// function AtAGlancePage() {
//   return <AtAGlance data={atAGlanceData} />;
// }

// export default AtAGlancePage;


import { useLocation, useNavigate } from "react-router-dom";
import AtAGlance from "../features/atAGlance/AtAGlance";
import { atAGlanceData } from "../features/atAGlance/atAGlanceData";

function AtAGlancePage() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return (
      <div style={{ padding: 40 }}>
        <h2>No Data Found</h2>
        <button onClick={() => navigate("/dashboard")}>
          Go Back
        </button>
      </div>
    );
  }

const { course, lesson, topicId, activityId, type } =
  location.state;

const selectedId =
  type === "topic" ? topicId : activityId;

const pageData = atAGlanceData.filter(
  (item) =>
    item.course === course &&
    item.lesson === lesson &&
    item.type === type &&
    item.id === selectedId
);

  return <AtAGlance data={pageData} />;
}

export default AtAGlancePage;
