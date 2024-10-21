const particles = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ["#ffffff", "#ffcc00", "#ff0000", "#00ff00", "#0000ff"],
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: "image",
      image: [
        {
          src: "./image/deadstar.png",
          width: 100,
          height: 100,
        },
        {
          src: "./image/ship1.png",
          width: 100,
          height: 100,
        },
        {
          src: "./image/ship2.png",
          width: 100,
          height: 100,
        },
        {
          src: "./image/ship3.png",
          width: 100,
          height: 100,
        },
      ],
    },
    size: {
      value: 25,
      random: {
        enable: true,
        minimumValue: 3,
      },
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: {
        default: "out",
      },
      path: {
        delay: {
          value: 0.2,
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
        minimumValue: 0.4,
      },
    },
  },
  detectRetina: true,
};

tsParticles.load("tsparticles", particles);
