tsParticles
  .load("tsparticles", {
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
        value: "#FF37A6",
        animation: {
          enable: true,
          speed: 180,
          sync: true,
        },
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#EAD94C",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 15,
        random: {
          enable: true,
          minimumValue: 5,
        },
        animation: {
          enable: true,
          speed: 5,
          minimumValue: 5,
          sync: true,
          startValue: "min",
          destroy: "max",
        },
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outMode: "destroy",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onhover: {
          enable: true,
          mode: "trail",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
        trail: {
          delay: 0.05,
          quantity: 5,
        },
      },
    },
    retina_detect: true,
    background: {
      color: "#3B3561",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  })
  .then((c) => {
    const target = c.interactivity.element;

    const rect = {
      left: 0,
      top: 0,
      width: target.innerWidth,
      height: target.innerHeight,
    };
    const point = {
      x: rect.width / 2,
      y: rect.height / 2,
    };
    const moveType = "mousemove";

    setInterval(() => {
      const moveEvent = new MouseEvent(moveType, {
        view: target,
        bubbles: true,
        cancelable: true,
        clientX: rect.left + point.x,
        clientY: rect.top + point.y,
      });

      const speed = 50;
      point.x += speed * Math.sin(Math.random() * Math.PI);
      point.y += speed * Math.cos(Math.random() * Math.PI);

      if (point.x > rect.width) {
        point.x = 0;
      }

      if (point.y > rect.height) {
        point.y = 0;
      }

      if (point.x < 0) {
        point.x = rect.width;
      }

      if (point.y < 0) {
        point.y = rect.height;
      }

      target.dispatchEvent(moveEvent);
    });
  });
