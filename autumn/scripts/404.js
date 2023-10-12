tsParticles.load("tsparticles", {
  fpsLimit: 60,
  fullScreen: {
    enable: true,
  },
  interactivity: {
    detectsOn: "window",
    events: {
      resize: true,
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: { distance: 100, duration: 2, opacity: 1, size: 40, speed: 3 },
      grab: { distance: 400, links: { opacity: 1 } },
      push: { quantity: 4 },
      remove: { quantity: 2 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "random" },
    links: {
      color: "random",
      distance: 150,
      enable: false,
      opacity: 1,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 3,
      straight: false,
    },
    rotate: {
      animation: {
        enable: true,
        speed: 10,
        sync: false,
      },
    },
    number: { density: { enable: true, area: 800 }, value: 100 },
    opacity: {
      animation: { enable: true, minimumValue: 1, speed: 1, sync: false },
      random: false,
      value: 1,
    },
    shape: {
      character: [
        {
          fill: true,
          font: "Verdana",
          value: ["🍂", "🍁"],
          style: "",
          weight: 400,
        },
      ],
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100,
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "random", width: 1 },
      type: "char",
    },
    size: {
      anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
      random: { minimumValue: 8, enable: true },
      value: 32,
    },
  },
  detectRetina: true,
});
