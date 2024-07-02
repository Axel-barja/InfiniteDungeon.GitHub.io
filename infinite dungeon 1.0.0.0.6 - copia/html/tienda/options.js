document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("MenuIcon");
    const leftContentClose = document.getElementById("leftContentClose");
    const leftContainer = document.getElementById("leftContainer");

    menuIcon.addEventListener("click", () => {
        leftContainer.classList.toggle("active");
    });

     leftContentClose.addEventListener("click", () => {
        leftContainer.classList.remove("active");
     });
});