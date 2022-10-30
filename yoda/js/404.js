var particles = {
    fpsLimit: 60,
    
    pauseOnBlur: true,
    particles: {
        number: {
            value: 33,
            density: {
                enable: true,
                area: 700
            }
        },
        shape: {
            type: "character",
            character: {
              value: ["circle"]
            }
        },
        size: {
            value: 5,
            random: {
                enable: true,
                minimumValue: 10
            }
        },
        move: {
            enable: true,
            speed: 2.8,
            direction: "down",
            straight: true,
            outModes: {
                default: "out"
            },
        }
    },
    detectRetina: true
};

tsParticles.load("tsparticles", particles);