tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 2800,
      density: {
        enable: true,
        area: 1000,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: {
        enable: true,
        minimumValue: 0.6,
      },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: {
        enable: true,
        minimumValue: 1,
      },
    },
    move: {
      enable: true,
      speed: 0.9,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
  detectRetina: true,
});
