tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 240,
            density: {
                enable: true,
                area: 1000
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
            random: {
                enable: true,
                minimumValue: 0.5
            },
            animation: {
                enable: true,
                speed: 2,
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
            speed: 0.9,
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
});
