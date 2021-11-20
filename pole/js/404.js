let truck = document.querySelector('.truck');
let bottle = document.querySelector('.bottle');

tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  detectRetina: true,
  particles: {
    move: {
      bounce: false,
      direction: "right",
      enable: true,
      outMode: "out",
      random: false,
      speed: 0.2,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      limit: 0,
      value: 80,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: [
        {
          src: "./image/fish-svgrepo-com.svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (1).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (2).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (3).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (4).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (5).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (6).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (7).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (8).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (9).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (10).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (11).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (12).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (13).svg",
          width: 32,
          height: 32,
        },
        {
          src: "./image/fish-svgrepo-com (14).svg",
          width: 32,
          height: 32,
        },
      ],
      type: "image",
    },
    size: {
      random: true,
      value: 18,
    },
  },
});

bottle.addEventListener('click', () => {
    truck.classList.add('gone');
});