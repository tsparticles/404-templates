(async () => {
    await tsParticles.load('tsparticles', {
        particles: {
            color: {
                value: "#00FF00",
            },
            move: {
                direction: "bottom",
                enable: true,
                outModes: {
                    default: "destroy",
                },
                random: true,
                speed: 20,
                straight: true,
                trail: {
                    fillColor: "#000",
                    length: 15,
                    enable: true,
                },
            },
            number: {
                limit: 40,
            },
        },
        background: {
            color: "#000",
        },
        fullScreen: {
            zIndex: -1,
        },
        emitters: [{
          direction: "bottom",
          size: {
              width: 100,
              height: 0,
          },
          position: {
              x: 50,
              y: 0,
          },
      }],
    });
})();
