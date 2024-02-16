document.addEventListener("DOMContentLoaded", function () {
    const communityItem = document.querySelector(".nav-item.dropdown");

    if (communityItem) {
        communityItem.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").classList.add("show");
        });

        communityItem.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").classList.remove("show");
        });
    }
});