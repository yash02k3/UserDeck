// Background.js
// Animated futuristic particle background

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = async (main) => {
    // loads full tsparticles engine
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0f172a", // deep dark blue aesthetic background
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#38bdf8", // neon blue particles
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: { min: 1, max: 5 },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default Background;
