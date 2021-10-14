// JavaScript Document
//tsParticles library - https://github.com/matteobruni/tsparticles

tsParticles.load("tsparticles", {
    backgroundMask: {
        enable: true,
        cover: {
            value: {
                r: 160,
                g: 160,
                b: 160
            }
        }
    },
    background: {
        color: "rgb(255,255,255)",
       },
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    particles: {
       move: {
           enable: true,
           size: 2
        },
        shape: {
            type: ["circle"]
        },
        size: {
            value: {
                min: 0.1,
                max: 5
            }
        },
        wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
                min: -5,
                max: 5
            }
        },
        opacity: {
            value: { min: 0.1, max: 1 }
        },

     }
  
});
