
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 150, density: { enable: false, value_area: 800 } },
    color: { value: "#383A3F" },
    shape: {
      type: "polygon",
      polygon: { nb_sides: 6 }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 20,
      random: false,
      anim: { enable: true, speed: 10, size_min: 60, sync: false }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "bubble" },
      resize: true
    },
    modes: {
      bubble: { distance: 100, size: 20, duration: 2, opacity: 4, speed: 3 }
    }
  },
  retina_detect: false
});