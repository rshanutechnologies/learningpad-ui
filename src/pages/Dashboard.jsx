
// import modelData from "../data/modelData";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// //import logo from "../models/logo.png";
// import "./dashboard.css";


// function Dashboard() {
//   const navigate = useNavigate();

//   const [selectedCourse, setSelectedCourse] = useState(
//     "CBSE-VI-SCIENCE-VI-A"
//   );


//   const [selectedLesson, setSelectedLesson] = useState(
//     Object.keys(modelData["CBSE-VI-SCIENCE-VI-A"])[0]
//   );

//   const [activeTab, setActiveTab] = useState("Topics");
//   const [searchTerm, setSearchTerm] = useState("");
// const [showSearchModal, setShowSearchModal] = useState(false);
// const [showProfileModal, setShowProfileModal] = useState(false);
// const [view, setView] = useState("courses");

// // dashboard | courses | apps

//   const lessons = Object.keys(modelData[selectedCourse]);
//  const lessonData =
//   modelData[selectedCourse] &&
//   modelData[selectedCourse][selectedLesson]
//     ? modelData[selectedCourse][selectedLesson]
//     : null;



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
// console.log("Active Tab:", activeTab);
// console.log("Topics:", topics);
// console.log("Activities:", activities);
// console.log("Resources:", resources);
//   const handleCourseChange = (e) => {
//     const newCourse = e.target.value;
//     setSelectedCourse(newCourse);
//     setSelectedLesson(Object.keys(modelData[newCourse])[0]);
//     setActiveTab("Topics");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/", { replace: true });
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/", { replace: true });
//     }
//   }, [navigate]);

//   const dataToRender =
//     activeTab === "Topics"
//       ? topics
//       : activeTab === "Activities"
//       ? activities
//       : resources;


// const allItems = [];

// Object.keys(modelData[selectedCourse]).forEach((lessonName) => {
//   const lesson = modelData[selectedCourse][lessonName];

//   if (lesson.topics) {
//     Object.entries(lesson.topics).forEach(([id, value]) => {
//       allItems.push({
//         id: Number(id),
//         title: value.heading,
//         image: value.image,
//         lesson: lessonName,
//         type: "Topic"
//       });
//     });
//   }

//   if (lesson.activities) {
//     Object.entries(lesson.activities).forEach(([id, value]) => {
//       allItems.push({
//         id: Number(id),
//         title: value.heading,
//         image: value.image,
//         lesson: lessonName,
//         type: "Activity"
//       });
//     });
//   }

//   if (lesson.resources) {
//     Object.entries(lesson.resources).forEach(([id, value]) => {
//       allItems.push({
//         id: Number(id),
//         title: value.heading,
//         image: value.image,
//         lesson: lessonName,
//         type: "Resource"
//       });
//     });
//   }
// });


// const filteredItems = searchTerm.trim()
//   ? allItems.filter(item =>
//       item.title
//         .toLowerCase()
//         .includes(searchTerm.trim().toLowerCase())
//     )
//   : [];





//   return (
//   <div className="app-wrapper">
//            <div className="watermark">wisewings</div>

//     {/* GLOBAL TOP NAV */}
//     <div className="global-nav">
//       <div className="nav-left">
//   <img src="../models/logo1.png" alt="Wisewings Logo" className="nav-logo" />
// </div>

//   <input
//   className="nav-search"
//   placeholder="Search Topics / Activities"
//   onFocus={() => {
//     setShowSearchModal(true);
//     setSearchTerm("");
//   }}
//   readOnly
// />



//       <div className="nav-right">
//         <span className="icon">🔔</span>
//         <div
//   className="avatar"
//   onClick={() => setShowProfileModal(true)}
//   style={{ cursor: "pointer" }}
// >
//   👤
// </div>

//       </div>
//     </div>

//     {/* BODY AREA */}
//     <div className="content-wrapper">

//       {/* SIDEBAR */}
//       <div className="sidebar">
//         <div className="sidebar-top">
//           {/* <h3>Wiseboard</h3> */}
//         </div>

      

// <ul className="sidebar-menu">
//   <li
//     className={view === "dashboard" ? "active" : ""}
//     onClick={() => setView("dashboard")}
//   >
//     <img src="/models/dashboard.png" alt="" />
//     <span>Dashboard</span>
//   </li>

//   <li
//     className={view === "courses" || view === "apps" ? "active" : ""}
//     onClick={() => setView("courses")}
//   >
//     <img src="/models/courses.png" alt="" />
//     <span>Courses</span>
//   </li>

//   <li>
//     <img src="/models/lessons.png" alt="" />
//     <span>Lessons</span>
//   </li>

//   <li>
//     <img src="/models/activities.png" alt="" />
//     <span>Activities</span>
//   </li>

//   <li>
//     <img src="/models/progress.png" alt="" />
//     <span>Progress</span>
//   </li>

//   <li>
//     <img src="/models/resources.png" alt="" />
//     <span>Resources</span>
//   </li>

//   <li>
//     <img src="/models/settings.png" alt="" />
//     <span>Settings</span>
//   </li>
// </ul>

//         <button className="logout-btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>

//       {/* MAIN CONTENT */}
//      {/* MAIN CONTENT */}
// <div className="main-content">

//   {/* ================= COURSES VIEW ================= */}
//   {/* ================= COURSES VIEW ================= */}
// {view === "courses" && (
//   <div className="courses-wrapper">
//     <h2 className="courses-title">
//       Please select a course to continue
//     </h2>

//     <div className="courses-list">
//       {Object.keys(modelData).map((course) => (
//         <div
//           key={course}
//           className="course-card"
//           onClick={() => {
//   setSelectedCourse(course);
//   setSelectedLesson(Object.keys(modelData[course])[0]); // ⭐ FIX
//   setView("apps");
// }}

//         >
//           <div className="course-left">
//             <div className="course-icon">
//   <img
//     src={
//       course.includes("MATH")
//         ? "/models/math.png"
//         : course.includes("SOCIALSCIENCE")
//         ?"/models/science.png"
//         : course.includes("SCIENCE")
//         ? "/models/science.png"
//         :"/models/social.png"
//     }
//     alt="subject"
//   />
// </div>

//             <h3>{course}</h3>
//           </div>
//           <div className="course-arrow">➜</div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}

// {view === "apps" && (
//   <div className="apps-container">
//     <h2 className="apps-heading">
//       Select an educational application to enhance your learning experience
//     </h2>

//     <div className="apps-grid">
//       {/* NeoBoard */}
//       <div
//         className="app-card active-card"
//         onClick={() => setView("dashboard")}
//       >
//         <div className="app-icon-box">
//   <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
//        stroke="#28C76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 2L3 7l9 5 9-5-9-5z"/>
//     <path d="M3 7v10l9 5 9-5V7"/>
//     <path d="M12 12v10"/>
//   </svg>
// </div>

//         <div className="app-content">
//           <h3>Wise Board</h3>
//           <p>
//             Experience learning in a whole new dimension with our interactive 3D models.
//           </p>
//         </div>
//       </div>

//       {/* Eval AI */}
//       <div className="app-card disabled-card">
//         <span className="badge">DISABLED</span>

//         <div className="app-icon-box">
//   <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
//        stroke="#28C76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M9 3a4 4 0 0 0-4 4v1a3 3 0 0 0 0 6v1a4 4 0 0 0 8 0"/>
//     <path d="M15 3a4 4 0 0 1 4 4v1a3 3 0 0 1 0 6v1a4 4 0 0 1-8 0"/>
//   </svg>
// </div>

//         <div className="app-content">
//           <h3>Eval AI</h3>
//           <p>
//             Experience AI-driven assessment and feedback tailored to your learning needs, enhancing your educational journey.
//           </p>
//         </div>
//       </div>

//       {/* Assess AI */}
//       <div className="app-card disabled-card">
//         <span className="badge">DISABLED</span>

//        <div className="app-icon-box">
//   <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
//        stroke="#28C76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
//     <path d="M9 9h6"/>
//     <path d="M9 13h4"/>
//   </svg>
// </div>

//         <div className="app-content">
//           <h3>Assess AI</h3>
//           <p>
//             Unlock AI-powered assessment tools for creating personalized learning paths and improving student outcomes.
//           </p>
//         </div>
//       </div>

//       {/* Reporting */}
//       <div className="app-card disabled-card">
//         <span className="badge">DISABLED</span>

//         <div className="app-icon-box">
//   <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
//        stroke="#28C76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="3" y="4" width="18" height="12" rx="2"/>
//     <path d="M8 20h8"/>
//     <path d="M12 16v4"/>
//     <path d="M7 10l3-3 2 2 4-4"/>
//   </svg>
// </div>


//         <div className="app-content">
//           <h3>Reporting and Analytics</h3>
//           <p>
//             Streamline school operations with a comprehensive management system, offering insights and analytics for data-driven decisions.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// )}



//   {/* ================= YOUR ORIGINAL DASHBOARD ================= */}
//   {view === "dashboard" && (
//     <>
//       {/* KEEP YOUR EXISTING DASHBOARD CODE BELOW EXACTLY AS IT IS */}

//       <h1 className="page-title">Wiseboard</h1>

//       {/* SELECTOR */}
//       <div className="selector-card">
//         <select value={selectedCourse} onChange={handleCourseChange}>
//           {Object.keys(modelData).map((course) => (
//            <option key={course} value={course}>
//   📘{course}
// </option>

//           ))}
//         </select>

//         <select
//           value={selectedLesson}
//           onChange={(e) => setSelectedLesson(e.target.value)}
//         >
//           {lessons.map((lesson) => (
//             <option key={lesson} value={lesson}>
//   {lesson}
// </option>

//           ))}
//         </select>

//         <span className="last-access">
//           Last accessed &nbsp; April 23, 2026
//         </span>
//       </div>

//       {/* OVERVIEW */}
//       <div className="overview-card">
//         <div className="overview-stats">
//           <div>📘 {topics.length} Topics</div>
//           <div>🧪 {activities.length} Activities</div>
//           <div>📂 {resources.length} Resources</div>
//         </div>

//         <div className="progress-bar">
//           <div style={{ width: "40%" }}></div>
//         </div>

//         <div className="progress-text">40%</div>
//       </div>

//       {/* TABS */}
//       <div className="tabs">
//         {["Topics", "Activities", "Resources"].map((tab) => (
//           <button
//             key={tab}
//             className={activeTab === tab ? "tab active" : "tab"}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* CARDS */}
//       <div className="card-grid">
//         {dataToRender.map((item) => (
//           <div key={item.id} className="card">
//             <img src={item.image} alt="" />
//             <h3>{item.title}</h3>

//             {/* KEEP YOUR BUTTON CODE EXACTLY AS IT IS */}
//             {/** DO NOT MODIFY ANYTHING BELOW **/}

//             <div className="card-buttons">

//               {activeTab !== "Resources" && (
//                 <>
//                   <button
//                     className="light-btn"
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

//                   <button
//                     className="purple-btn"
//                     onClick={() =>
//                       navigate("/brain-busters", {
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
//                     Brain Busters
//                   </button>
//                 </>
//               )}

//               <button
//                 className="start-btn"
//                 onClick={() =>
//                   navigate("/model-viewer", {
//                     state: {
//                       course: selectedCourse,
//                       lesson: selectedLesson,
//                       topicId:
//                         activeTab === "Topics"
//                           ? item.id
//                           : undefined,
//                       activityId:
//                         activeTab === "Activities"
//                           ? item.id
//                           : undefined,
//                       resourceId:
//                         activeTab === "Resources"
//                           ? item.id
//                           : undefined,
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
//                 Start
//               </button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )}

// </div>

//     </div>


// {showSearchModal && (
//   <div className="search-overlay">
//     <div className="search-modal">

//       {/* Search Header */}
//       <div className="search-header">
//         <input
//           autoFocus
//           placeholder="Search Topics / Activities"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//  <span
//   onClick={() => {
//     setShowSearchModal(false);
//     setSearchTerm("");
//   }}
// >
//   ✕
// </span>

//       </div>

//       {/* Search Results */}
//  <div className="search-results">

//   {searchTerm.trim() === "" && (
//     <div className="no-results">
//       Start typing to search...
//     </div>
//   )}

//   {searchTerm.trim() !== "" && filteredItems.length === 0 && (
//     <div className="no-results">
//       No results found
//     </div>
//   )}

//   {searchTerm.trim() !== "" &&
//     filteredItems.map(item => (
//       <div key={`${item.type}-${item.lesson}-${item.id}`} className="search-item">

//         <img src={item.image} alt="" />

//         <div className="search-info">
//           <h3>{item.title}</h3>

//           <div className="search-tags">
//             <span>{item.type}</span>
//           </div>

//         <div className="search-buttons">

//   {item.type !== "Resource" && (
//     <>
//       <button
//         className="btn-glance"
//         onClick={() => {
//           setShowSearchModal(false);
//           navigate("/at-a-glance", {
//             state: {
//               course: selectedCourse,
//               lesson: item.lesson,
//               topicId: item.type === "Topic" ? item.id : undefined,
//               activityId: item.type === "Activity" ? item.id : undefined,
//               type: item.type.toLowerCase()
//             }
//           });
//         }}
//       >
//         At A Glance
//       </button>

//       <button
//         className="btn-brain"
//         onClick={() => {
//           setShowSearchModal(false);
//           navigate("/brain-busters", {
//             state: {
//               course: selectedCourse,
//               lesson: item.lesson,
//               topicId: item.type === "Topic" ? item.id : undefined,
//               activityId: item.type === "Activity" ? item.id : undefined,
//               type: item.type.toLowerCase()
//             }
//           });
//         }}
//       >
//         Brain Busters
//       </button>
//     </>
//   )}

//   <button
//     className="btn-model"
//     onClick={() => {
//       setShowSearchModal(false);
//       navigate("/model-viewer", {
//         state: {
//           course: selectedCourse,
//           lesson: item.lesson,
//           topicId: item.type === "Topic" ? item.id : undefined,
//           activityId: item.type === "Activity" ? item.id : undefined,
//           resourceId: item.type === "Resource" ? item.id : undefined,
//           type: item.type.toLowerCase()
//         }
//       });
//     }}
//   >
//     Model/Simulation Viewer
//   </button>

// </div>

//         </div>
//       </div>
//     ))
//   }

// </div>

//     </div>
//   </div>
// )}

// {showProfileModal && (
//   <div className="profile-overlay">
//     <div className="profile-modal">

//       <div className="profile-header">
//         <h3>User Profile</h3>
//         <span onClick={() => setShowProfileModal(false)}>✕</span>
//       </div>

//       <div className="profile-content">
//         <div className="profile-avatar">👤</div>

//         <h3>user name</h3>
//         <p>Admin</p>

//         <button
//           className="logout-btn"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>

//     </div>
//   </div>
// )}


//     {/* FOOTER */}
//     <div className="footer">
//       Wiseboard 1.0 | Powered by Wisewings | © 2026
//     </div>

//   </div>
// );

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
const [view, setView] = useState("courses");
const [sidebarOpen, setSidebarOpen] = useState(false);
// dashboard | courses | apps

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
        <img src="../models/logo1.png" alt="Wisewings Logo" className="nav-logo" />
          {/* ✅ Sidebar Toggle */}
  <div
    className="sidebar-toggle"
    onClick={() => setSidebarOpen(true)}
  >
    ☰
  </div>
  
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
 {/* ✅ OVERLAY (PUT HERE) */}
  {sidebarOpen && (
    <div
      className="sidebar-overlay"
      onClick={() => setSidebarOpen(false)}
    />
  )}

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          {/* <h3>Wiseboard</h3> */}
        </div>

      

<ul className="sidebar-menu">
  <li
    className={view === "dashboard" ? "active" : ""}
    onClick={() => setView("dashboard")}
  >
    <img src="/models/dashboard.png" alt="" />
    <span>Dashboard</span>
  </li>

  <li
    className={view === "courses" || view === "apps" ? "active" : ""}
    onClick={() => setView("courses")}
  >
    <img src="/models/courses.png" alt="" />
    <span>Courses</span>
  </li>

  <li>
    <img src="/models/lessons.png" alt="" />
    <span>Lessons</span>
  </li>

  <li>
    <img src="/models/activities.png" alt="" />
    <span>Activities</span>
  </li>

  <li>
    <img src="/models/progress.png" alt="" />
    <span>Progress</span>
  </li>

  <li>
    <img src="/models/resources.png" alt="" />
    <span>Resources</span>
  </li>

  <li>
    <img src="/models/settings.png" alt="" />
    <span>Settings</span>
  </li>
</ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
     {/* MAIN CONTENT */}
<div className="main-content">

  {/* ================= COURSES VIEW ================= */}
  {/* ================= COURSES VIEW ================= */}
{view === "courses" && (
  <div className="courses-wrapper">
    <h2 className="courses-title">
      Please select a course to continue
    </h2>

    <div className="courses-list">
      {Object.keys(modelData).map((course) => (
        <div
          key={course}
          className="course-card"
          onClick={() => {
  setSelectedCourse(course);
  setSelectedLesson(Object.keys(modelData[course])[0]); // ⭐ FIX
  setView("apps");
}}

        >
          <div className="course-left">
            <div className="course-icon">
  <img
    src={
      course.includes("MATH")
        ? "/models/math.png"
        : course.includes("SOCIALSCIENCE")
        ?"/models/science.png"
        : course.includes("SCIENCE")
        ? "/models/science.png"
        :"/models/social.png"
    }
    alt="subject"
  />
</div>

            <h3>{course}</h3>
          </div>
          <div className="course-arrow">➜</div>
        </div>
      ))}
    </div>
  </div>
)}

{view === "apps" && (
  <div className="apps-container">
    <h2 className="apps-heading">
      Select an educational application to enhance your learning experience
    </h2>

    <div className="apps-grid">
      {/* NeoBoard */}
      <div
        className="app-card active-card"
        onClick={() => setView("dashboard")}
      >
        <div className="app-icon-box">
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
       stroke="#28C76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L3 7l9 5 9-5-9-5z"/>
    <path d="M3 7v10l9 5 9-5V7"/>
    <path d="M12 12v10"/>
  </svg>
</div>

        <div className="app-content">
          <h3>Wise Board</h3>
          <p>
            Experience learning in a whole new dimension with our interactive 3D models.
          </p>
        </div>
      </div>

      {/* Eval AI */}
      <div className="app-card disabled-card">
        <span className="badge">DISABLED</span>

        <div className="app-icon-box">
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
       stroke="#28C76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3a4 4 0 0 0-4 4v1a3 3 0 0 0 0 6v1a4 4 0 0 0 8 0"/>
    <path d="M15 3a4 4 0 0 1 4 4v1a3 3 0 0 1 0 6v1a4 4 0 0 1-8 0"/>
  </svg>
</div>

        <div className="app-content">
          <h3>Eval AI</h3>
          <p>
            Experience AI-driven assessment and feedback tailored to your learning needs, enhancing your educational journey.
          </p>
        </div>
      </div>

      {/* Assess AI */}
      <div className="app-card disabled-card">
        <span className="badge">DISABLED</span>

       <div className="app-icon-box">
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
       stroke="#28C76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
    <path d="M9 9h6"/>
    <path d="M9 13h4"/>
  </svg>
</div>

        <div className="app-content">
          <h3>Assess AI</h3>
          <p>
            Unlock AI-powered assessment tools for creating personalized learning paths and improving student outcomes.
          </p>
        </div>
      </div>

      {/* Reporting */}
      <div className="app-card disabled-card">
        <span className="badge">DISABLED</span>

        <div className="app-icon-box">
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
       stroke="#28C76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2"/>
    <path d="M8 20h8"/>
    <path d="M12 16v4"/>
    <path d="M7 10l3-3 2 2 4-4"/>
  </svg>
</div>


        <div className="app-content">
          <h3>Reporting and Analytics</h3>
          <p>
            Streamline school operations with a comprehensive management system, offering insights and analytics for data-driven decisions.
          </p>
        </div>
      </div>
    </div>
  </div>
)}



  {/* ================= YOUR ORIGINAL DASHBOARD ================= */}
  {view === "dashboard" && (
    <>
      {/* KEEP YOUR EXISTING DASHBOARD CODE BELOW EXACTLY AS IT IS */}

      <h1 className="page-title">Wiseboard</h1>

      {/* SELECTOR */}
      <div className="selector-card">
        <select value={selectedCourse} onChange={handleCourseChange}>
          {Object.keys(modelData).map((course) => (
           <option key={course} value={course}>
  📘{course}
</option>

          ))}
        </select>

        <select
          value={selectedLesson}
          onChange={(e) => setSelectedLesson(e.target.value)}
        >
          {lessons.map((lesson) => (
            <option key={lesson} value={lesson}>
  {lesson}
</option>

          ))}
        </select>

        <span className="last-access">
          Last accessed &nbsp; April 23, 2026
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

            {/* KEEP YOUR BUTTON CODE EXACTLY AS IT IS */}
            {/** DO NOT MODIFY ANYTHING BELOW **/}

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

                  <button
                    className="purple-btn"
                    onClick={() =>
                      navigate("/brain-busters", {
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
                      topicId:
                        activeTab === "Topics"
                          ? item.id
                          : undefined,
                      activityId:
                        activeTab === "Activities"
                          ? item.id
                          : undefined,
                      resourceId:
                        activeTab === "Resources"
                          ? item.id
                          : undefined,
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
    </>
  )}

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
