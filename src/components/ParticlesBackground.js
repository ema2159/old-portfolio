import React from "react";
import Particles from "react-particles-js";

const ParticlesBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
      <Particles
        params={{
          particles: {
            number: {
              value: 20
            },
            size: {
              value: 4
            },
            color: {
              value: "#7d8eff"
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#616585",
              width: 2
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              }
            }
          }
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
