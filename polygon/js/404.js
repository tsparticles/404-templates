tsParticles.load("tsparticles", {
    background: {
        color: "#000"
    },
    detectRetina: false,
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "bubble"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 10
            }
        }
    },
    particles: {
        color: {
            value: ["#ff0000", "#00ff00", "#0000ff"],
            animation: {
                enable: true,
                speed: 20,
                sync: false
            }
        },
        links: {
            blink: false,
            color: "random",
            consent: false,
            distance: 75,
            enable: true,
            opacity: 0.3,
            width: 0.5
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            limit: 0,
            value: 400
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false
            },
            value: 1
        },
        shape: {
            type: "circle"
        },
        size: {
            random: {
                enable: true,
                minimumValue: 3
            },
            value: 5
        }
    },
    polygon: {
        draw: {
            enable: true,
            lineColor: "rgba(255,255,255,0.2)",
            lineWidth: 0.3
        },
        move: {
            radius: 10
        },
        position: {
            y: 105,
            x: 130
        },
        inlineArrangement: "equidistant",
        scale: 3,
        type: "inline",
        url: "images/404.svg"
    }
});
