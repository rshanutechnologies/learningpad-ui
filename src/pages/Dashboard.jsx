// import modelData from "../data/modelData";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./dashboard.css";

// // const data = {
// //   "CBSE-VI-MATHS-VI-A": {
// //     lessons: {
// //       "L1. Patterns in Mathematics": {
// //         topics: [
// //           { id: 1, title: "01.Number Sequences" },
// //           { id: 2, title: "02.Shape Sequences" }
// //         ],
// //         activities: [
// //           { id: 1, title: "Pattern Puzzle Activity" },
// //           { id: 2, title: "Shape Matching Game" }
// //         ]
// //       },
// //       "L2. Lines and Angles": {
// //         topics: [
// //           { id: 1, title: "01.Terms and Definitions" },
// //           { id: 2, title: "02.Angles" },
// //           { id: 3, title: "03.Comparing Angles" }
// //         ],
// //         activities: [
// //           { id: 1, title: "Angle Drawing Activity" },
// //           { id: 2, title: "Measure The Angle Game" }
// //         ]
// //       }
// //     }
// //   },

// //   "CBSE-VI-SCIENCE-VI-A": {
// //     lessons: {
// //       "L1. Components of Food": {
// //         topics: [
// //           { id: 1, title: "01.Introduction" },
// //           { id: 2, title: "02.Food Items Contain" },
// //           { id: 3, title: "03.Nutrients Work in Body" },
// //           { id: 4, title: "04.Balanced Diet" }
// //         ],
// //         activities: [
// //           { id: 1, title: "Protein Test Experiment" },
// //           { id: 2, title: "Starch Test Activity" }
// //         ]
// //       },
// //       "L2. Sorting Materials into Groups": {
// //         topics: [
// //           { id: 1, title: "01.Introduction" },
// //           { id: 2, title: "02.Shape of Objects" },
// //           { id: 3, title: "03.Properties of Materials" },
// //           { id: 4, title: "04.Solubility" }
// //         ],
// //         activities: [
// //           { id: 1, title: "Group The Materials" },
// //           { id: 2, title: "Solubility Experiment" }
// //         ]
// //       }
// //     }
// //   }
// // };

// function Dashboard() {
//   const [selectedCourse, setSelectedCourse] = useState("CBSE-VI-MATHS-VI-A");
// const [selectedLesson, setSelectedLesson] = useState(
//   Object.keys(modelData["CBSE-VI-MATHS-VI-A"])[0]
// );

//   const [activeTab, setActiveTab] = useState("Topics");
//   const navigate = useNavigate();

//   const lessons = Object.keys(modelData[selectedCourse]);


//   const lessonData =
//   modelData[selectedCourse][selectedLesson];


//  const topics = lessonData?.topics
//   ? Object.entries(lessonData.topics).map(([id, value]) => ({
//       id: Number(id),
//       title: value.heading
//     }))
//   : [];

// const activities = lessonData?.activities
//   ? Object.entries(lessonData.activities).map(([id, value]) => ({
//       id: Number(id),
//       title: value.heading
//     }))
//   : [];

// const resources = lessonData?.resources
//   ? Object.entries(lessonData.resources).map(([id, value]) => ({
//       id: Number(id),
//       title: value.heading
//     }))
//   : [];


//   const handleCourseChange = (e) => {
//     const newCourse = e.target.value;
//     setSelectedCourse(newCourse);
//    setSelectedLesson(Object.keys(modelData[newCourse])[0]);

//     setActiveTab("Topics");
//   };

//   return (
//     <div className="dashboard-wrapper">

//       {/* ===== TOP NAVBAR ===== */}
//       <div className="top-navbar">

//         <div className="logo-section">
//           <h1>Neoboard</h1>
//           <span className="version">v1.3.3</span>
//         </div>

//         <div className="search-box">
//           <input placeholder="Search Topics / Activities" />
//           <span className="shortcut">Ctrl K</span>
//         </div>

//         <div className="right-actions">
//           <select className="language-select">
//             <option>IN English</option>
//           </select>
//           <button className="logout-btn">Logout</button>
//         </div>

//       </div>

//       {/* ===== COURSE + LESSON ===== */}
//       <div className="common">
//         <div className="select-row">

//           <div>
//             <label>Select Course</label>
//             <select value={selectedCourse} onChange={handleCourseChange}>
//              {Object.keys(modelData).map((course) => (

//                 <option key={course}>{course}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label>Select Lesson</label>
//             <select
//               value={selectedLesson}
//               onChange={(e) => setSelectedLesson(e.target.value)}
//             >
//               {lessons.map((lesson) => (
//                 <option key={lesson}>{lesson}</option>
//               ))}
//             </select>
//           </div>

//         </div>

//         {/* ===== TAB NAVBAR ===== */}
//         <div className="tab-navbar">
//           <button
//             className={activeTab === "Topics" ? "tab active" : "tab"}
//             onClick={() => setActiveTab("Topics")}
//           >
//             Topics
//           </button>

//           <button
//             className={activeTab === "Activities" ? "tab active" : "tab"}
//             onClick={() => setActiveTab("Activities")}
//           >
//             Activities
//           </button>

//           <button
//             className={activeTab === "Resources" ? "tab active" : "tab"}
//             onClick={() => setActiveTab("Resources")}
//           >
//             Resources
//           </button>
//         </div>
//       </div>

//       {/* ===== TOPICS ===== */}
//       {activeTab === "Topics" && (
//         <div className="card-grid">
//           {topics.map((topic) => (
//             <div key={topic.id} className="topic-card">
//               <div className="image-box"></div>
//               <h3>{topic.title}</h3>

//               <button
//                 className="blue-btn"
//                 onClick={() =>
//                   navigate("/model-viewer", {
//                     state: {
//                       course: selectedCourse,
//                       lesson: selectedLesson,
//                       topicId: topic.id,
//                       title: topic.title
//                     }
//                   })
//                 }
//               >
//                 Model/Simulation Viewer
//               </button>

//               <div className="small-btns">
//       <button
//   className="green-btn"
//   onClick={() =>
//     navigate("/at-a-glance", {
//       state: {
//         course: selectedCourse,
//         lesson: selectedLesson,
//         topicId: topic.id,
//         title: topic.title,
//         type: "topic"
//       }
//     })
//   }
// >
//   At A Glance
// </button>


//                 <button className="purple-btn">
//                   Brain Busters
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ===== ACTIVITIES ===== */}
//       {activeTab === "Activities" && (
//         <div className="card-grid">
//           {activities.map((activity) => (
//             <div key={activity.id} className="topic-card">
//               <div className="image-box"></div>
//               <h3>{activity.title}</h3>

//               <button
//                 className="blue-btn"
//                 onClick={() =>
//                   navigate("/model-viewer", {
//                     state: {
//                       course: selectedCourse,
//                       lesson: selectedLesson,
//                       activityId: activity.id,
//                       title: activity.title,
//                       type: "activity"
//                     }
//                   })
//                 }
//               >
//                 Model/Simulation Viewer
//               </button>

//               <div className="small-btns">
//               <button
//   className="green-btn"
//   onClick={() =>
//     navigate("/at-a-glance", {
//       state: {
//         course: selectedCourse,
//         lesson: selectedLesson,
//         activityId: activity.id,
//         title: activity.title,
//         type: "activity"
//       }
//     })
//   }
// >
//   At A Glance
// </button>


//                 <button className="purple-btn">
//                   Brain Busters
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ===== RESOURCES ===== */}
//      {activeTab === "Resources" && (
//   <div className="card-grid">
//     {resources.map((res) => (

//       <div key={res.id} className="topic-card">
//         <div className="image-box"></div>
//         <h3>{res.title}</h3>

//         <button
//           className="blue-btn"
//           onClick={() =>
//             navigate("/model-viewer", {
//               state: {
//                 course: selectedCourse,
//                 lesson: selectedLesson,
//                 resourceId: res.id,
//                 type: "resource",
//                 title: res.title
//               }
//             })
//           }
//         >
//           Open Resource
//         </button>
//       </div>
//     ))}
//   </div>
// )}


//     </div>
//   );
// }

// export default Dashboard;




import modelData from "../data/modelData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const [selectedCourse, setSelectedCourse] = useState("CBSE-VI-MATHS-VI-A");
  const [selectedLesson, setSelectedLesson] = useState(
    Object.keys(modelData["CBSE-VI-MATHS-VI-A"])[0]
  );
  const [activeTab, setActiveTab] = useState("Topics");
  const navigate = useNavigate();

  const lessons = Object.keys(modelData[selectedCourse]);

  const lessonData = modelData[selectedCourse][selectedLesson];

  // 🔥 Convert objects → arrays INCLUDING image
  const topics = lessonData?.topics
    ? Object.entries(lessonData.topics).map(([id, value]) => ({
        id: Number(id),
        title: value.heading,
        image: value.image
      }))
    : [];

  const activities = lessonData?.activities
    ? Object.entries(lessonData.activities).map(([id, value]) => ({
        id: Number(id),
        title: value.heading,
        image: value.image
      }))
    : [];

  const resources = lessonData?.resources
    ? Object.entries(lessonData.resources).map(([id, value]) => ({
        id: Number(id),
        title: value.heading,
        image: value.image
      }))
    : [];

  const handleCourseChange = (e) => {
    const newCourse = e.target.value;
    setSelectedCourse(newCourse);
    setSelectedLesson(Object.keys(modelData[newCourse])[0]);
    setActiveTab("Topics");
  };

  return (
    <div className="dashboard-wrapper">

      {/* ===== TOP NAVBAR ===== */}
      <div className="top-navbar">
        <div className="logo-section">
          <h1>Neoboard</h1>
          <span className="version">v1.3.3</span>
        </div>

        <div className="search-box">
          <input placeholder="Search Topics / Activities" />
          <span className="shortcut">Ctrl K</span>
        </div>

        <div className="right-actions">
          <select className="language-select">
            <option>IN English</option>
          </select>
          <button className="logout-btn">Logout</button>
        </div>
      </div>

      {/* ===== COURSE + LESSON ===== */}
      <div className="common">
        <div className="select-row">

          <div>
            <label>Select Course</label>
            <select value={selectedCourse} onChange={handleCourseChange}>
              {Object.keys(modelData).map((course) => (
                <option key={course}>{course}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Select Lesson</label>
            <select
              value={selectedLesson}
              onChange={(e) => setSelectedLesson(e.target.value)}
            >
              {lessons.map((lesson) => (
                <option key={lesson}>{lesson}</option>
              ))}
            </select>
          </div>

        </div>

        {/* ===== TAB NAVBAR ===== */}
        <div className="tab-navbar">
          <button
            className={activeTab === "Topics" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Topics")}
          >
            Topics
          </button>

          <button
            className={activeTab === "Activities" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Activities")}
          >
            Activities
          </button>

          <button
            className={activeTab === "Resources" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Resources")}
          >
            Resources
          </button>
        </div>
      </div>

      {/* ===== CARD RENDER FUNCTION ===== */}
      {["Topics", "Activities", "Resources"].includes(activeTab) && (
        <div className="card-grid">
          {(activeTab === "Topics"
            ? topics
            : activeTab === "Activities"
            ? activities
            : resources
          ).map((item) => (
            <div key={item.id} className="topic-card">

              {/* 🔥 IMAGE SECTION */}
              <div className="image-box">
                <img
                  src={item.image || "/images/default.jpg"}
                  alt=""
                />
              </div>

              <h3>{item.title}</h3>

              <button
                className="blue-btn"
                onClick={() =>
                  navigate("/model-viewer", {
                    state: {
                      course: selectedCourse,
                      lesson: selectedLesson,
                      topicId:
                        activeTab === "Topics" ? item.id : undefined,
                      activityId:
                        activeTab === "Activities" ? item.id : undefined,
                      resourceId:
                        activeTab === "Resources" ? item.id : undefined,
                      type:
                        activeTab === "Topics"
                          ? "topic"
                          : activeTab === "Activities"
                          ? "activity"
                          : "resource"
                    }
                  })
                }
              >
                {activeTab === "Resources"
                  ? "Open Resource"
                  : "Model/Simulation Viewer"}
              </button>

              {activeTab !== "Resources" && (
                <div className="small-btns">
                  <button
                    className="green-btn"
                    onClick={() =>
                      navigate("/at-a-glance", {
                        state: {
                          course: selectedCourse,
                          lesson: selectedLesson,
                          topicId:
                            activeTab === "Topics"
                              ? item.id
                              : undefined,
                          activityId:
                            activeTab === "Activities"
                              ? item.id
                              : undefined,
                          type:
                            activeTab === "Topics"
                              ? "topic"
                              : "activity"
                        }
                      })
                    }
                  >
                    At A Glance
                  </button>

                  <button className="purple-btn">
                    Brain Busters
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Dashboard;
