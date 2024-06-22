window.addEventListener('load', () => {
    const container = document.querySelector('.fireworks');
    const fireworks = new fireworks(container, {
        maxRockets: 5,            // max # of rockets to spawn
        rocketSpawnInterval: 150, // milliseconds to check if new rockets should spawn
        numParticles: 100,        // number of particles to spawn when rocket explodes
        explosionMinHeight: 0.2,  // percentage. min height at which rockets can explode
        explosionMaxHeight: 0.9,  // percentage. max height before a particle is exploded
        explosionChance: 0.08     // chance in each tick the rocket will explode
    });

    fireworks.start();
});
