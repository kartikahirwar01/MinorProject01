// Add animation when sections scroll into view
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".policy-section");

    // Intersection Observer to animate sections
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    // Attach observer to each section
    sections.forEach((section) => observer.observe(section));
});

// Add animation when sections scroll into view
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".policy-section");

    // Intersection Observer to animate sections
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    // Attach observer to each section
    sections.forEach((section) => observer.observe(section));
});
