import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Arts from "./components/Art/Arts";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/personal-portfolio/" element={<Home />} />
          <Route path="/personal-portfolio/project" element={<Projects />} />
          <Route path="/personal-portfolio/about" element={<About />} />
          <Route path="/personal-portfolio/resume" element={<Resume />} />
          <Route path="/personal-portfolio/art" element={<Arts />} />
          <Route path="*" element={<Navigate to="/personal-portfolio/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
