var particles = {
    fpsLimit: 160,
    particles: {
        number: {
            value: 400,
            density: {
                enable: true,
                area: 400
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "star"
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
            value: 2,
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
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            resize: false
        }
    },
    detectRetina: true
};

tsParticles.load("tsparticles", particles);
