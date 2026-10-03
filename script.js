document.addEventListener(“DOMContentLoaded”, function () {

var scrollIndicator = document.querySelector(".scroll-indicator");
window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        scrollIndicator.style.opacity = "0";
    } else {
        scrollIndicator.style.opacity = "1";
    }
});

});