tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 5,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#fcfcfc",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: {
        enable: true,
        minimumValue: 0.1,
      },
    },
    size: {
      value: 140,
      random: {
        enable: true,
        minimumValue: 40,
      },
      animation: {
        enable: true,
        speed: 10,
        minimumValue: 40,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
    },
  },
  detectRetina: true,
});
