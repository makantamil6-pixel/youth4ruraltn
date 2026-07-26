/* =====================================================
   Rural Integrated Economy
   Youth4RuralTN
   app.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    function updateActiveNav() {

        const scrollY = window.scrollY + 120;

        sections.forEach(section => {

            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollY >= top && scrollY < top + height) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId.startsWith("#")) return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 70,
                behavior: "smooth"

            });

        });

    });

    /* ==========================
       HEADER SHADOW
    ========================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 6px 20px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow =
                "0 2px 15px rgba(0,0,0,.08)";

        }

    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();

    /* ==========================
       FADE-IN ANIMATION
    ========================== */

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    document.querySelectorAll(".card, .flow-box, .hero-card").forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = "all .6s ease";

        observer.observe(el);

    });

});