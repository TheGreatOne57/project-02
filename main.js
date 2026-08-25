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


    /* =========================================
       GET SCREENS & CONTROLS
       ========================================= */

    const opening = document.getElementById("opening");
    const universe = document.getElementById("universe");
 const enterButton =
    document.getElementById("enterButton") ||
    document.querySelector(".enter-btn");;

    const orbitItems =
        document.querySelectorAll(".orbit-item");

    const backButtons =
        document.querySelectorAll(".back-to-universe");


    /* =========================================
       ENTER THE UNIVERSE
       ========================================= */

    if (enterButton) {

    enterButton.addEventListener("click", () => {
        opening.classList.remove("active");
        setTimeout(() => {
            universe.classList.add("active");
        }, 500);

    });

}

    /* =========================================
       UNIVERSE ITEMS
       ========================================= */

    orbitItems.forEach((item) => {

        item.addEventListener("click", () => {

            const section = item.dataset.section;

            const targetSection =
                document.getElementById(section);

            if (!targetSection) {

                console.log(
                    `Section not found: ${section}`
                );

                return;
            }

            universe.classList.remove("active");

            setTimeout(() => {

                targetSection.classList.add("active");

            }, 500);

        });

    });


    /* =========================================
       BACK TO UNIVERSE
       ========================================= */

    backButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const currentScreen =
                button.closest(".screen");

            if (!currentScreen) {

                console.log(
                    "Back button could not find its screen."
                );

                return;
            }

            currentScreen.classList.remove("active");

            setTimeout(() => {

                universe.classList.add("active");

            }, 500);

        });

    });

});