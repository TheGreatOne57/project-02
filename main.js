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

        /* =========================================
       PROJECT 02 MUSIC
       ========================================= */

    const backgroundMusic =
        document.getElementById("backgroundMusic");

    const musicToggle =
        document.getElementById("musicToggle");

    let musicStarted = false;


    function startMusic() {

        if (!backgroundMusic) {
            return;
        }

        backgroundMusic.volume = 0.55;

        const playPromise = backgroundMusic.play();

        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    musicStarted = true;

                    if (musicToggle) {
                        musicToggle.classList.add("music-playing");
                        musicToggle.textContent = "♫";
                    }

                })
                .catch(() => {

                    console.log("Music could not start.");

                });

        }

    }


    if (musicToggle) {

        musicToggle.addEventListener("click", () => {

            if (!backgroundMusic) {
                return;
            }

            if (backgroundMusic.paused) {

                startMusic();

            } else {

                backgroundMusic.pause();

                musicToggle.classList.remove("music-playing");
                musicToggle.textContent = "♪";

            }

        });

    }

    const backButtons =
        document.querySelectorAll(".back-to-universe");


    /* =========================================
       ENTER THE UNIVERSE
       ========================================= */

    enterButton.addEventListener("click", () => {

    startMusic();

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

        /* =========================================
       FIRST KISS — INTERACTIVE JOURNEY
       ========================================= */

    const kissNextButtons =
        document.querySelectorAll(".kiss-next");

    const kissFinalButton =
        document.querySelector(".kiss-final");

    const kissSteps =
        document.querySelectorAll(".kiss-step");

    const kissReveal =
        document.querySelector(".kiss-reveal");


    kissNextButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const currentStep =
                button.closest(".kiss-step");

            const currentNumber =
                Number(currentStep.dataset.kissStep);

            const nextStep =
                document.querySelector(
                    `[data-kiss-step="${currentNumber + 1}"]`
                );

            if (!nextStep) {
                return;
            }

            currentStep.classList.remove("active");

            nextStep.classList.add("active");

        });

    });


    if (kissFinalButton) {

        kissFinalButton.addEventListener("click", () => {

            const currentStep =
                kissFinalButton.closest(".kiss-step");

            currentStep.classList.remove("active");

            if (kissReveal) {
                kissReveal.classList.add("active");
            }

        });

    }

    /* =========================================
       LOVE COUNTER
       Relationship started: June 27, 2026
       ========================================= */

    const loveDays = document.getElementById("loveDays");
    const loveTime = document.getElementById("loveTime");

    if (loveDays && loveTime) {

        const startDate = new Date(2026, 5, 27);

        function updateLoveCounter() {

            const now = new Date();

            let months =
                (now.getFullYear() - startDate.getFullYear()) * 12 +
                (now.getMonth() - startDate.getMonth());

            if (now.getDate() < startDate.getDate()) {
                months--;
            }

            if (months < 0) {
                months = 0;
            }

            loveDays.textContent =
                String(months).padStart(2, "0");

            loveTime.textContent =
                months === 1
                    ? "month of us"
                    : "months of us";
        }

        updateLoveCounter();

    }

});