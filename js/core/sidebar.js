function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const main = document.querySelector(".main-content");
    const footer = document.querySelector(".main-footer");
    sidebar.classList.toggle("active");
    main.classList.toggle("shift");
    footer.classList.toggle("shift");

}
