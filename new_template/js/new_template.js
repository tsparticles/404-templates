import { tsParticles } from "tsparticles";

tsParticles.load("tsparticles", {
  particles: {
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 5,
      random: true
    },
    move: {
      direction: "bottom",
      outMode: "out"
    },
    links: {
      enable: false
    }
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});

const homeButton = document.querySelector(".home-button");

homeButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
