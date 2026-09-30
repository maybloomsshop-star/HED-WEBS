const button = document.querySelector("button");
const exploreSection = document.querySelector(".categories");

button.addEventListener("click", function () {
    exploreSection.scrollIntoView({
        behavior: "smooth"
    });
});