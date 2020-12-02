tsParticles.load("tsparticles", {
    background: {
      color: "#fff"
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        resize: true,
        onHover: {
          enable: true,
          mode: "bubble"
        }
      },
      modes: {
        bubble: {
          distance: 300,
          opacity: 0.8,
          size: 100
        }
      }
    },
    particles: {
      color: {
        value: ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"],
        animation: {
          enable: true,
          speed: 40,
          sync: false
        }
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 10,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 160
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.2
        },
        value: 0.8
      },
      shape: {
        type: "circle"
      },
      stroke: {
        color: "#ff0000",
        width: 0
      },
      size: {
        random: {
          enable: true,
          minimumValue: 25
        },
        value: 50
      }
    },
    detectRetina: true
  });
  
  