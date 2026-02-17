// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Trusted from "./components/Trusted";
// import Products from "./components/Products";
// import WhyChoose from "./components/WhyChoose";
// import Testimonials from "./components/Testimonials";
// import CTA from "./components/CTA";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import WhatsApp from "./components/WhatsApp";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ModelViewer from "./pages/ModelViewer";
// function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Trusted />
//       <Products />
//       <WhyChoose />
//       <Testimonials />
//       <CTA />
//       <About />
//       <Contact />
//       <Footer />
//       <WhatsApp />
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/model-viewer" element={<ModelViewer />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ModelViewer from "./pages/ModelViewer";
import AtAGlancePage from "./pages/AtAGlancePage";
import BrainBustersPage from "./pages/BrainBustersPage";
import CoursesPage from "./pages/CoursesPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Products />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <About />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Website */}
        <Route path="/" element={<HomePage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* LMS Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dynamic Model Viewer */}
        <Route path="/model-viewer" element={<ModelViewer />} />
       
       <Route path="/at-a-glance" element={<AtAGlancePage />} />
       <Route path="/brain-busters" element={<BrainBustersPage />} />
      <Route path="/courses" element={<CoursesPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
