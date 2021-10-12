// JavaScript Document
//tsParticles library - https://github.com/matteobruni/tsparticles

tsParticles.load("tsparticles", {
  backgroundMask: {
    enable: true,
    cover: {
      value: {
        r: 255,
        g: 255,
        b: 255
      }
    }
  },
  background: {
    color:"rgb(0,0,255)",
    size: "100% 100%",
    repeat: "no-repeat"
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    color: {
      value: "#000000",
      animation: {
        enable: true,
        speed: 700
      }
    },
    move: {
      direction: "top",
      enable: true,
      outModes: {
        default: "out"
      },
      size: true,
      speed: {
        min: 1,
        max: 2
      }
    },
    number: {
      value: 200,
      density: {
        enable: true,
        area: 800
      }
    },
    opacity: {
      value: 1,
      animation: {
        enable: false,
        startValue: "max",
        destroy: "min",
        speed: 0.2,
        sync: true
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    shape: {
      type: ["circle"]
    },
    size: {
      value: {
        min: 3,
        max: 5
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 30
      },
      enlighten: {
        enable: true,
        value: 30
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  }
});
