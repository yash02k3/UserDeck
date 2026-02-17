import React, { useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Header from "./components/Header";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

function App() {
  // particles engine initialize
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Router>
      {/* Animated background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0f172a",
            },
          },
          particles: {
            number: {
              value: 60,
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 4 },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
          },
        }}
        style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
}}

      />

      {/* App content */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
