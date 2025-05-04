function changeColor(link) {
    // Remove 'clicked' class from all links
    document.querySelectorAll(".nav-links a").forEach(el => el.classList.remove("clicked"));

    // Add 'clicked' class to the clicked link
    link.classList.add("clicked");
}