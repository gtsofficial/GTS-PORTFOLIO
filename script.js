
// Select all elements with the "reveal" class
const revealElements = document.querySelectorAll(".reveal");

// Create an observer to watch the selected elements
const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {

        // Check if the element has entered the screen
        if (entry.isIntersecting) {

            // Add the "active" class to the element
            entry.target.classList.add("active");

            // Stop watching the element after it appears
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

// Tell the observer to watch each selected element
revealElements.forEach((element) => {
    observer.observe(element);
});


// Select the hamburger menu checkbox
const menuToggle = document.querySelector("#menuToggle");

// Select all links inside the navigation menu
const menuLinks = document.querySelectorAll(".menu a");

// Listen for clicks on each navigation link
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {

        // Close the mobile menu
        menuToggle.checked = false;

    });
});


// Select the Back to Top button
const backToTop = document.querySelector("#backToTop");

// Watch how far the visitor has scrolled
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

// Scroll back to the top when the button is clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
