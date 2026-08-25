/* =========================================
   PROJECT 02 — MAIN JAVASCRIPT
   Two Months With My Princess
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       CREATE AMBIENT PARTICLES
       ========================================= */

    const particleContainer = document.getElementById("particles");

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 12}s`;

        particle.style.animationDelay =
            `${Math.random() * 10}s`;

        const size = 1 + Math.random() * 2;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particleContainer.appendChild(particle);
    }

    const opening = document.getElementById("opening");
    const universe = document.getElementById("universe");
    const enterButton = document.getElementById("enterButton");

    const orbitItems = document.querySelectorAll(".orbit-item");


    /* =========================================
       ENTER THE UNIVERSE
       ========================================= */

    enterButton.addEventListener("click", () => {

        opening.classList.remove("active");

        setTimeout(() => {
            universe.classList.add("active");
        }, 500);

    });


    /* =========================================
       UNIVERSE ITEMS
       ========================================= */

    orbitItems.forEach((item) => {

        item.addEventListener("click", () => {

            const section = item.dataset.section;

            console.log(`Julia opened: ${section}`);

            /*
             * These sections will be built later.
             * For now, we'll simply give visual feedback.
             */

            item.style.transform = "scale(1.18)";

            setTimeout(() => {
                item.style.transform = "";
            }, 300);

        });

    });

});