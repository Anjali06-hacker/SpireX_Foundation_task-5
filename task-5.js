// SELECT TESTIMONIAL ELEMENTS
// Select all testimonial cards
const testimonials =
    document.querySelectorAll(".testimonial-card");
// Select all dot indicators
const dots =
    document.querySelectorAll(".dot");
// Find the Previous button
const previousButton =
    document.getElementById("previousButton");
// Find the Next button
const nextButton =
    document.getElementById("nextButton");
// CURRENT SLIDE
// Stores the number of the currently displayed testimonial
let currentSlide = 0;
// SHOW TESTIMONIAL FUNCTION
// This function displays the selected testimonial
function showTestimonial(index) {
    // Remove "active" from every testimonial
    testimonials.forEach(function (testimonial) {
        testimonial.classList.remove("active");
    });
    // Remove "active" from every dot
    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });
    // Add "active" to the selected testimonial
    testimonials[index].classList.add("active");
    // Add "active" to the matching dot
    dots[index].classList.add("active");
}
// NEXT BUTTON
// Run when the Next button is clicked
nextButton.addEventListener("click", function () {
    // Move to the next testimonial
    currentSlide++;
    // If we reach the end, return to the first testimonial
    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    }
    // Display the new testimonial
    showTestimonial(currentSlide);
});
// PREVIOUS BUTTON
// Run when the Previous button is clicked
previousButton.addEventListener("click", function () {
    // Move to the previous testimonial
    currentSlide--;
    // If we go before the first testimonial,
    // move to the last testimonial
    if (currentSlide < 0) {
        currentSlide = testimonials.length - 1;
    }
    // Display the new testimonial
    showTestimonial(currentSlide);
});
// DOT CLICK
// Add click functionality to every dot
dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
        // Get the slide number from the data-slide attribute
        currentSlide =
            Number(dot.getAttribute("data-slide"));
        // Display the selected testimonial
        showTestimonial(currentSlide);
    });
});