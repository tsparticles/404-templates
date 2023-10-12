(async () => {
  await loadFireworksPreset(tsParticles);

  await tsParticles.load("tsparticles", {
    preset: "fireworks",
  });
})();
