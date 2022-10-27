tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 300,
      limit: 0,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "image",
      stroke: {
        width: 2,
        color: "#fff",
      },
      polygon: {
        nb_sides: 6,
      },
      image: [
        {
          src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/heart-with-arrow_1f498.png",
          width: 66,
          height: 66,
        },
        {
          src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/heart-with-ribbon_1f49d.png",
          width: 64,
          height: 64,
        },
        {
          src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/sparkling-heart_1f496.png",
          width: 64,
          height: 64,
        },
        {
          src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/yellow-heart_1f49b.png",
          width: 64,
          height: 64,
        },
        {
          src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/purple-heart_1f49c.png",
          width: 64,
          height: 64,
        },
        {
          src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/red-heart_2764-fe0f.png",
          width: 64,
          height: 64,
        },
        {
          src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/325/smiling-face-with-hearts_1f970.png",
          width: 64,
          height: 64,
        },
      ],
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 16,
      random: false,
      anim: {
        enable: true,
        speed: 7,
        size_min: 25,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 50,
      color: "#eb94ff",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      bounce: true,
      attract: {
        enable: false,
        rotateX: 250,
        rotateY: 1000,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 125,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 33,
        duration: 2,
        opacity: 6,
        speed: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.25,
      },
      push: {
        particles_nb: 5,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
