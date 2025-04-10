document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menuItems = document.getElementById("menu-items");
    const draggableMenu = document.getElementById("draggable-menu");

    let isDragging = false;
    let offsetX, offsetY;

    menuBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        menuBtn.classList.toggle("active");

        menuBtn.textContent = menuBtn.classList.contains("active") ? "✖" : "☰";
    });

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target)) {
            menuBtn.classList.remove("active");
            menuBtn.textContent = "☰";
        }
    });

    draggableMenu.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - draggableMenu.getBoundingClientRect().left;
        offsetY = e.clientY - draggableMenu.getBoundingClientRect().top;
        draggableMenu.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        draggableMenu.style.left = `${x}px`;
        draggableMenu.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        draggableMenu.style.cursor = "grab";
    });

    draggableMenu.addEventListener("touchstart", (e) => {
        isDragging = true;
        let touch = e.touches[0];
        offsetX = touch.clientX - draggableMenu.getBoundingClientRect().left;
        offsetY = touch.clientY - draggableMenu.getBoundingClientRect().top;
    });

    document.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        let touch = e.touches[0];
        let x = touch.clientX - offsetX;
        let y = touch.clientY - offsetY;
        draggableMenu.style.left = `${x}px`;
        draggableMenu.style.top = `${y}px`;
    });

    document.addEventListener("touchend", () => {
        isDragging = false;
    });
});
