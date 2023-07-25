// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#menu a");

    menuItems.forEach(item => {
        item.addEventListener("click", event => {
            event.preventDefault();
            const targetId = item.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scroll({
                top: topOffset,
                behavior: "smooth"
            });
        });
    });
});
