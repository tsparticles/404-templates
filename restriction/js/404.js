tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: ["circle"],
    },
    opacity: {
      value: 1,
    },
    size: {
      value: 8,
      random: {
        enable: true,
        minimumValue: 4,
      },
    },
    rotate: {
      value: 20,
      direction: "clockwise",
      animation: {
        speed: 5,
        enable: true,
      },
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      out_mode: "out",
      trail: {
        enable: true,
        length: 25,
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onDiv: {
        enable: true,
        mode: "bounce",
        selectors: "#givemelight",
        type: "rectangle",
      },
      resize: true,
    },
    modes: {
      light: {
        area: {
          gradient: {
            start: "3b5e98",
            stop: "#17163e",
          },
        },
        shadow: {
          color: "#17163e",
        },
      },
    },
  },
  detectRetina: true,
  background: {
    // image: "url('https://wallpaperaccess.com/full/1268171.jpg')",
    color: "#000000",
  },
});
