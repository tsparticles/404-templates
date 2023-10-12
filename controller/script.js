tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  particles: {
    reduceDuplicates: true,
    move: {
      enable: true,
      bounce: false,
      direction: "top",
      outModes: "out",
      straight: false,
      random: true,
      angle: 45,
      speed: {
        min: 2,
        max: 7,
      },
      gravity: {
        enable: true,
        inverse: true,
        acceleration: {
          min: 1,
          max: 2,
        },
        maxSpeed: {
          min: 2,
          max: 7,
        },
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: {
          min: 2,
          max: 5,
        },
      },
    },
    number: {
      limit: 8,
    },
    opacity: {
      value: 1,
    },
    size: {
      value: {
        min: 15,
        max: 35,
      },
    },
    shape: {
      type: "images",
      options: {
        images: [
          {
            src: "images/circle.png",
            width: 1024,
            height: 853,
          },
          {
            src: "images/cross.png",
            width: 1024,
            height: 853,
          },
          {
            src: "images/square.png",
            width: 1024,
            height: 853,
          },
          {
            src: "images/triangle.png",
            width: 1024,
            height: 853,
          },
        ],
      },
    },
  },
});
