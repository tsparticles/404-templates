const particles = {
  fpsLimit: 60,

  pauseOnBlur: true,
  particles: {
    number: {
      value: 33,
      density: {
        enable: true,
        area: 800,
      },
    },
    shape: {
      type: "character",
      character: {
        value: ["🦇", "💀", "👻", "🕸️", "🕷️"],
      },
    },
    size: {
      value: 30,
      random: {
        enable: true,
        minimumValue: 10,
      },
    },
    move: {
      enable: true,
      speed: 28.8,
      direction: "outside",
      straight: true,
      outModes: {
        default: "out",
      },
    },
  },
  detectRetina: true,
};

tsParticles.load("tsparticles", particles);
