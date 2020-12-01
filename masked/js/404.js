tsParticles.load("tsparticles", {
    background: {
        color: "#000",
        image: "url('images/background.jpg')"
    },
    backgroundMask: {
        enable: true,
        cover: {
            color: "#fff"
        }
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
                distance: 500,
                opacity: 0.8,
                size: 200
            }
        }
    },
    particles: {
        color: {
            value: "#000"
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "out"
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
            value: 80
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
                minimumValue: 50
            },
            value: 75
        }
    },
    detectRetina: true
});
