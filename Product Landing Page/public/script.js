document.addEventListener("DOMContentLoaded", function() {
    const ctaButtons = document.querySelectorAll(".cta");

    ctaButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("CTA Button Clicked!");
        });
    });
});
