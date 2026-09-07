/* =========================================
   CREATE FLOATING PARTICLES
========================================= */

const particlesContainer = document.getElementById("particles");

const particleCount = 28;

for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${7 + Math.random() * 10}s`;

    particle.style.animationDelay =
        `${Math.random() * -15}s`;

    const size = 1 + Math.random() * 3;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particlesContainer.appendChild(particle);
}


/* =========================================
   REVEAL SECTIONS ON SCROLL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element, index) => {

    element.style.transitionDelay =
        `${index * 80}ms`;

    revealObserver.observe(element);

});


/* =========================================
   SMILE BUTTON
========================================= */

const smileButton =
    document.getElementById("smileButton");

smileButton.addEventListener("click", function (event) {

    const emojis = [
        "💛",
        "✨",
        "🌷",
        "🍧",
        "💗",
        "☀️"
    ];

    const rect =
        smileButton.getBoundingClientRect();

    for (let i = 0; i < 12; i++) {

        const heart =
            document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        heart.style.left =
            `${rect.left + rect.width / 2}px`;

        heart.style.top =
            `${rect.top + rect.height / 2}px`;

        heart.style.setProperty(
            "--x",
            `${(Math.random() - 0.5) * 220}px`
        );

        heart.style.animationDelay =
            `${Math.random() * 0.25}s`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2200);
    }

    /* Button feedback */

    smileButton.innerHTML =
        "<span>🌷</span> Thế mới ngoan, cười một chút nhé";

    setTimeout(() => {

        smileButton.innerHTML =
            "<span>💛</span> Hôm nay vui một chút nhé";

    }, 3000);

});


/* =========================================
   SUBTLE PARALLAX
========================================= */

let ticking = false;

window.addEventListener("scroll", () => {

    if (!ticking) {

        window.requestAnimationFrame(() => {

            const scrollY = window.scrollY;

            const orb1 =
                document.querySelector(".orb-1");

            const orb2 =
                document.querySelector(".orb-2");

            const orb3 =
                document.querySelector(".orb-3");

            if (orb1) {
                orb1.style.transform =
                    `translateY(${scrollY * 0.04}px)`;
            }

            if (orb2) {
                orb2.style.transform =
                    `translateY(${scrollY * -0.025}px)`;
            }

            if (orb3) {
                orb3.style.transform =
                    `translateY(${scrollY * 0.02}px)`;
            }

            ticking = false;
        });

        ticking = true;
    }

});


/* =========================================
   INITIAL PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});