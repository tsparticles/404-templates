var particles = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 3,
      density: {
        enable: true,
        area: 100,
      },
    },
    color: {
      value: "#008781",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0,
        sync: false,
      },
    },
    size: {
      value: 50,
      random: {
        enable: true,
        minimumValue: 15,
      },
    },
    move: {
      enable: true,
      speed: 17,
      direction: "down",
      random: false,
      straight: true,
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: false,
    },
  },
  detectRetina: true,
};

tsParticles.load("tsparticles", particles);
