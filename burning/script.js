tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 50,
        sync: true,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: { enable: true, minimumValue: 4 },
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 4,
        sync: false,
      },
    },
    life: {
      duration: {
        value: 2,
      },
      count: 1,
    },
    move: {
      angle: {
        value: 45,
        offset: 0,
      },
      enable: true,
      gravity: {
        enable: true,
        acceleration: -0.3,
      },
      speed: 4,
      direction: "top",
      random: false,
      straight: false,
      size: true,
      outModes: {
        default: "destroy",
        bottom: "none",
      },
      attract: {
        enable: false,
        distance: 500,
        rotate: {
          x: 600,
          y: 1200,
        },
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
  background: {
    color: "#000000",
  },
  emitters: {
    direction: "top",
    rate: {
      quantity: 5,
      delay: 0.01,
    },
    size: {
      width: 100,
      height: 50,
    },
    position: {
      x: 50,
      y: 100,
    },
  },
});
