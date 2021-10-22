tsParticles.load("tsparticles", {
      particles: {
    number: {
      value: 350,
      limit:0,
      density: {
        enable: false,
        value_area: 600
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      stroke: {
        width: 2,
        color: "#fff"
      },
      polygon: {
        nb_sides: 6
      },
      image: [{
        src: "images/bee_sx.png",
        width: 64,
        height: 64
      },
      {
        src: "images/bee_dx.png",
        width: 64,
        height: 64
      }],
      images: [{
        src: "images/bee_sx.png",
        width: 64,
        height: 64
      },
      {
        src: "images/bee_dx.png",
        width: 64,
        height: 64
      }]
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 16,
      random: false,
      anim: {
        enable: false,
        speed: 20,
        size_min: 32,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 50,
      color: "#ffffff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      straight: false,
      outModes: 
      {
        default:"bounce",
        top:"bounce",
        left:"bounce",
        right:"bounce",
        bottom:"bounce"
      },
      bounce: false,
      attract: {
        enable: true,
        rotateX: 250,
        rotateY: 1000
      },

    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode:  "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 125,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 33,
        duration: 2,
        opacity: 6,
        speed: 2
      },
      repulse: {
        distance: 200,
        duration: 0.25
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
