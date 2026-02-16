











// import modelData from "../data/modelData";
// import { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// // import logo from "../models/logo.png";

// import "./dashboard.css";

// function Dashboard() {
//   const [selectedCourse, setSelectedCourse] = useState("CBSE-VI-SCIENCE-VI-A");

//   const [selectedLesson, setSelectedLesson] = useState(
//   Object.keys(modelData["CBSE-VI-SCIENCE-VI-A"])[0]
// );

//   const [activeTab, setActiveTab] = useState("Topics");
//   const navigate = useNavigate();

//   const lessons = Object.keys(modelData[selectedCourse]);

//   const lessonData = modelData[selectedCourse][selectedLesson];

//   // 🔥 Convert objects → arrays INCLUDING image
//   const topics = lessonData?.topics
//     ? Object.entries(lessonData.topics).map(([id, value]) => ({
//         id: Number(id),
//         title: value.heading,
//         image: value.image
//       }))
//     : [];

//   const activities = lessonData?.activities
//     ? Object.entries(lessonData.activities).map(([id, value]) => ({
//         id: Number(id),
//         title: value.heading,
//         image: value.image
//       }))
//     : [];

//   const resources = lessonData?.resources
//     ? Object.entries(lessonData.resources).map(([id, value]) => ({
//         id: Number(id),
//         title: value.heading,
//         image: value.image
//       }))
//     : [];

//   const handleCourseChange = (e) => {
//     const newCourse = e.target.value;
//     setSelectedCourse(newCourse);
//     setSelectedLesson(Object.keys(modelData[newCourse])[0]);
//     setActiveTab("Topics");
//   };
// const handleLogout = () => {
//   localStorage.removeItem("token");
//   navigate("/", { replace: true });
// };
// useEffect(() => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     navigate("/", { replace: true });
//   }
// }, [navigate]);



//   return (
//     <div className="dashboard-wrapper">

//       {/* ===== TOP NAVBAR ===== */}
//       <div className="top-navbar">
//       {/* <div className="logo-section">
// <img src="/models/logo.png" alt="logo" className="app-logo" />
//   <h1>Neoboard</h1>
//   <span className="version">v1.0.0</span>
// </div> */}

// <div className="logo-section">
//   <img src="/models/logo.png" alt="logo" className="app-logo-top" />
//   <div className="brand-row">
//     <h1 className="brand-name">Neoboard</h1>
//     <span className="version">v1.0.0</span>
//   </div>
// </div>
//         <div className="search-box">
//           <input placeholder="Search Topics / Activities" />
//           <span className="shortcut">Ctrl K</span>
//         </div>

//         <div className="right-actions">
//           <select className="language-select">
//             <option>IN English</option>
//           </select>
//           <button className="logout-btn" onClick={handleLogout}>
//   Logout
// </button>

//         </div>
//       </div>

//       {/* ===== COURSE + LESSON ===== */}
//       <div className="common">
//         <div className="select-row">

//           <div>
//             <label>Select Course</label>
//             <select value={selectedCourse} onChange={handleCourseChange}>
//               {Object.keys(modelData).map((course) => (
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

//       {/* ===== CARD RENDER FUNCTION ===== */}
//       {["Topics", "Activities", "Resources"].includes(activeTab) && (
//         <div className="card-grid">
//           {(activeTab === "Topics"
//             ? topics
//             : activeTab === "Activities"
//             ? activities
//             : resources
//           ).map((item) => (
//             <div key={item.id} className="topic-card">

//               {/* 🔥 IMAGE SECTION */}
//               <div className="image-box">
//                 <img
//                   src={item.image || "/images/default.jpg"}
//                   alt=""
//                 />
//               </div>

//               <h3>{item.title}</h3>

//               <button
//                 className="blue-btn"
//                 onClick={() =>
//                   navigate("/model-viewer", {
//                     state: {
//                       course: selectedCourse,
//                       lesson: selectedLesson,
//                       topicId:
//                         activeTab === "Topics" ? item.id : undefined,
//                       activityId:
//                         activeTab === "Activities" ? item.id : undefined,
//                       resourceId:
//                         activeTab === "Resources" ? item.id : undefined,
//                       type:
//                         activeTab === "Topics"
//                           ? "topic"
//                           : activeTab === "Activities"
//                           ? "activity"
//                           : "resource"
//                     }
//                   })
//                 }
//               >
//                 {activeTab === "Resources"
//                   ? "Open Resource"
//                   : "Model/Simulation Viewer"}
//               </button>

//               {activeTab !== "Resources" && (
//                 <div className="small-btns">
//                   <button
//                     className="green-btn"
//                     onClick={() =>
//                       navigate("/at-a-glance", {
//                         state: {
//                           course: selectedCourse,
//                           lesson: selectedLesson,
//                           topicId:
//                             activeTab === "Topics"
//                               ? item.id
//                               : undefined,
//                           activityId:
//                             activeTab === "Activities"
//                               ? item.id
//                               : undefined,
//                           type:
//                             activeTab === "Topics"
//                               ? "topic"
//                               : "activity"
//                         }
//                       })
//                     }
//                   >
//                     At A Glance
//                   </button>

//                  <button
//   className="purple-btn"
//   onClick={() =>
//     navigate("/brain-busters", {
//       state: {
//         course: selectedCourse,
//         lesson: selectedLesson,
//         topicId:
//           activeTab === "Topics" ? item.id : undefined,
//         activityId:
//           activeTab === "Activities" ? item.id : undefined,
//         type:
//           activeTab === "Topics"
//             ? "topic"
//             : "activity"
//       }
//     })
//   }
// >
//   Brain Busters
// </button>

//                 </div>
//               )}

//             </div>
//           ))}
//         </div>
//       )}

//     </div>
//   );
// }

// export default Dashboard;



















import modelData from "../data/modelData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import logo from "../models/logo.png";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [selectedCourse, setSelectedCourse] = useState(
    "CBSE-VI-SCIENCE-VI-A"
  );


  const [selectedLesson, setSelectedLesson] = useState(
    Object.keys(modelData["CBSE-VI-SCIENCE-VI-A"])[0]
  );

  const [activeTab, setActiveTab] = useState("Topics");
  const [searchTerm, setSearchTerm] = useState("");
const [showSearchModal, setShowSearchModal] = useState(false);
const [showProfileModal, setShowProfileModal] = useState(false);

  const lessons = Object.keys(modelData[selectedCourse]);
 const lessonData =
  modelData[selectedCourse] &&
  modelData[selectedCourse][selectedLesson]
    ? modelData[selectedCourse][selectedLesson]
    : null;



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
console.log("Active Tab:", activeTab);
console.log("Topics:", topics);
console.log("Activities:", activities);
console.log("Resources:", resources);
  const handleCourseChange = (e) => {
    const newCourse = e.target.value;
    setSelectedCourse(newCourse);
    setSelectedLesson(Object.keys(modelData[newCourse])[0]);
    setActiveTab("Topics");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const dataToRender =
    activeTab === "Topics"
      ? topics
      : activeTab === "Activities"
      ? activities
      : resources;


const allItems = [];

Object.keys(modelData[selectedCourse]).forEach((lessonName) => {
  const lesson = modelData[selectedCourse][lessonName];

  if (lesson.topics) {
    Object.entries(lesson.topics).forEach(([id, value]) => {
      allItems.push({
        id: Number(id),
        title: value.heading,
        image: value.image,
        lesson: lessonName,
        type: "Topic"
      });
    });
  }

  if (lesson.activities) {
    Object.entries(lesson.activities).forEach(([id, value]) => {
      allItems.push({
        id: Number(id),
        title: value.heading,
        image: value.image,
        lesson: lessonName,
        type: "Activity"
      });
    });
  }

  if (lesson.resources) {
    Object.entries(lesson.resources).forEach(([id, value]) => {
      allItems.push({
        id: Number(id),
        title: value.heading,
        image: value.image,
        lesson: lessonName,
        type: "Resource"
      });
    });
  }
});


const filteredItems = searchTerm.trim()
  ? allItems.filter(item =>
      item.title
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())
    )
  : [];





  return (
  <div className="app-wrapper">
           <div className="watermark">wisewings</div>

    {/* GLOBAL TOP NAV */}
    <div className="global-nav">
      <div className="nav-left">
  <img src="../models/logo.png" alt="Wisewings Logo" className="nav-logo" />
</div>

  <input
  className="nav-search"
  placeholder="Search Topics / Activities"
  onFocus={() => {
    setShowSearchModal(true);
    setSearchTerm("");
  }}
  readOnly
/>



      <div className="nav-right">
        <span className="icon">🔔</span>
        <div
  className="avatar"
  onClick={() => setShowProfileModal(true)}
  style={{ cursor: "pointer" }}
>
  👤
</div>

      </div>
    </div>

    {/* BODY AREA */}
    <div className="content-wrapper">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-top">
          {/* <h3>Wiseboard</h3> */}
        </div>

        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <li>Courses</li>
          <li>Lessons</li>
          <li>Activities</li>
          <li>Progress</li>
          <li>Resources</li>
          <li>Settings</li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        <h1 className="page-title">Wiseboard</h1>

        {/* SELECTOR */}
        <div className="selector-card">
          <select value={selectedCourse} onChange={handleCourseChange}>
            {Object.keys(modelData).map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>

          <select
            value={selectedLesson}
            onChange={(e) => setSelectedLesson(e.target.value)}
          >
            {lessons.map((lesson) => (
              <option key={lesson}>{lesson}</option>
            ))}
          </select>

          <span className="last-access">
            Last accessed &nbsp; Feb 16, 2026
          </span>
        </div>

        {/* OVERVIEW */}
        <div className="overview-card">
          <div className="overview-stats">
            <div>📘 {topics.length} Topics</div>
            <div>🧪 {activities.length} Activities</div>
            <div>📂 {resources.length} Resources</div>
          </div>

          <div className="progress-bar">
            <div style={{ width: "40%" }}></div>
          </div>

          <div className="progress-text">40%</div>
        </div>

        {/* TABS */}
        <div className="tabs">
          {["Topics", "Activities", "Resources"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="card-grid">
          {dataToRender.map((item) => (
            <div key={item.id} className="card">

              <img src={item.image} alt="" />

              <h3>{item.title}</h3>

              <div className="card-buttons">

                {activeTab !== "Resources" && (
                  <>
                  <button
  className="light-btn"
  onClick={() =>
    navigate("/at-a-glance", {
      state: {
        course: selectedCourse,
        lesson: selectedLesson,
        topicId: activeTab === "Topics" ? item.id : undefined,
        activityId: activeTab === "Activities" ? item.id : undefined,
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
  At A Glance
</button>

                    <button
                      className="purple-btn"
                      onClick={() =>
                        navigate("/brain-busters", {
                          state: {
                            course: selectedCourse,
                            lesson: selectedLesson,
                            topicId: activeTab === "Topics" ? item.id : undefined,
activityId: activeTab === "Activities" ? item.id : undefined,

                            type:
                              activeTab === "Topics"
                                ? "topic"
                                : "activity"
                          }
                        })
                      }
                    >
                      Brain Busters
                    </button>
                  </>
                )}

               <button
  className="start-btn"
  onClick={() =>
    navigate("/model-viewer", {
      state: {
        course: selectedCourse,
        lesson: selectedLesson,
        topicId: activeTab === "Topics" ? item.id : undefined,
        activityId: activeTab === "Activities" ? item.id : undefined,
        resourceId: activeTab === "Resources" ? item.id : undefined,
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
  Start
</button>


              </div>
            </div>
          ))}
        </div>

      </div>
    </div>


{showSearchModal && (
  <div className="search-overlay">
    <div className="search-modal">

      {/* Search Header */}
      <div className="search-header">
        <input
          autoFocus
          placeholder="Search Topics / Activities"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
 <span
  onClick={() => {
    setShowSearchModal(false);
    setSearchTerm("");
  }}
>
  ✕
</span>

      </div>

      {/* Search Results */}
 <div className="search-results">

  {searchTerm.trim() === "" && (
    <div className="no-results">
      Start typing to search...
    </div>
  )}

  {searchTerm.trim() !== "" && filteredItems.length === 0 && (
    <div className="no-results">
      No results found
    </div>
  )}

  {searchTerm.trim() !== "" &&
    filteredItems.map(item => (
      <div key={`${item.type}-${item.lesson}-${item.id}`} className="search-item">

        <img src={item.image} alt="" />

        <div className="search-info">
          <h3>{item.title}</h3>

          <div className="search-tags">
            <span>{item.type}</span>
          </div>

        <div className="search-buttons">

  {item.type !== "Resource" && (
    <>
      <button
        className="btn-glance"
        onClick={() => {
          setShowSearchModal(false);
          navigate("/at-a-glance", {
            state: {
              course: selectedCourse,
              lesson: item.lesson,
              topicId: item.type === "Topic" ? item.id : undefined,
              activityId: item.type === "Activity" ? item.id : undefined,
              type: item.type.toLowerCase()
            }
          });
        }}
      >
        At A Glance
      </button>

      <button
        className="btn-brain"
        onClick={() => {
          setShowSearchModal(false);
          navigate("/brain-busters", {
            state: {
              course: selectedCourse,
              lesson: item.lesson,
              topicId: item.type === "Topic" ? item.id : undefined,
              activityId: item.type === "Activity" ? item.id : undefined,
              type: item.type.toLowerCase()
            }
          });
        }}
      >
        Brain Busters
      </button>
    </>
  )}

  <button
    className="btn-model"
    onClick={() => {
      setShowSearchModal(false);
      navigate("/model-viewer", {
        state: {
          course: selectedCourse,
          lesson: item.lesson,
          topicId: item.type === "Topic" ? item.id : undefined,
          activityId: item.type === "Activity" ? item.id : undefined,
          resourceId: item.type === "Resource" ? item.id : undefined,
          type: item.type.toLowerCase()
        }
      });
    }}
  >
    Model/Simulation Viewer
  </button>

</div>

        </div>
      </div>
    ))
  }

</div>

    </div>
  </div>
)}

{showProfileModal && (
  <div className="profile-overlay">
    <div className="profile-modal">

      <div className="profile-header">
        <h3>User Profile</h3>
        <span onClick={() => setShowProfileModal(false)}>✕</span>
      </div>

      <div className="profile-content">
        <div className="profile-avatar">👤</div>

        <h3>user name</h3>
        <p>Admin</p>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

    </div>
  </div>
)}


    {/* FOOTER */}
    <div className="footer">
      Wiseboard 1.0 | Powered by Wisewings | © 2026
    </div>

  </div>
);

}

export default Dashboard;
