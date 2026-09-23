// Typing effect for name
const text = "Falguni Makhija";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 90);
    } else {
        startRoleRotator();
    }
}

// Rotating role line
const roles = [
    "Software Engineer",
    "Problem Solver",
    "Builder of Things",
    "DSA Enthusiast"
];
let roleIndex = 0;

function startRoleRotator() {
    const el = document.getElementById("role-rotator");
    if (!el) return;

    const render = () => {
        el.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    };

    render();
    setInterval(render, 2600);
}

window.addEventListener("load", typeWriter);

// Scroll-reveal for sections
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// Active nav link highlighting
const navLinks = document.querySelectorAll(".nav-link");
const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (!link) return;

            if (entry.isIntersecting) {
                navLinks.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    },
    { rootMargin: "-40% 0px -50% 0px" }
);

sections.forEach((section) => navObserver.observe(section));

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector("nav ul");

if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
        navList.classList.toggle("open");
    });

    navList.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => navList.classList.remove("open"));
    });
}
