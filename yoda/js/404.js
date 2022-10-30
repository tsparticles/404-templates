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
            type: "circle",
           
        },
        size: {
            value: 5,
            random: {
                enable: true,
                minimumValue: 0.5
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

/*
shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
            random: {
                enable: true,
                minimumValue: 0.1
            },
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: {
                enable: true,
                minimumValue: 1
            }
        },
        move: {
            enable: true,
            speed: 0.17,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
                default: "out"
            },
        }
*/

tsParticles.load("tsparticles", particles);