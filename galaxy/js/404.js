const particles = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 500,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ["#ffffff"],
      animation: {
        enable: true,
        speed: 30,
        sync: true,
      },
    },
    shape: {
      type: "image", // Use image shape
      image: {
        src: "./image/astroid.png",
        width: 100,
        height: 100,
      },
    },
    size: {
      value: 30,
      random: {
        enable: true,
        minimumValue: 5,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "out",
      },
      path: {
        delay: {
          value: 0.5,
        },
        generator: (particle, time) => {
          const angle = time / 1000;
          const radius = 200;
          return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
          };
        },
      },
    },
    opacity: {
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.3,
      },
    },
  },
  detectRetina: true,
};

tsParticles.load("tsparticles", particles);
