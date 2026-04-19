const filterButtons = document.querySelectorAll(".filter-btn");
const photoCards = document.querySelectorAll(".photo-card");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        photoCards.forEach((card) => {
            const category = card.dataset.category;
            const shouldShow = filter === "all" || category === filter;
            card.classList.toggle("is-hidden", !shouldShow);
        });
    });
});

photoCards.forEach((card) => {
    card.addEventListener("click", () => {
        const image = card.querySelector("img");
        const title = card.querySelector("h3")?.textContent || "Photo preview";
        const category = card.dataset.category || "gallery";

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = `${title} - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
    });
});

function closePreview() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
}

closeLightbox.addEventListener("click", closePreview);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closePreview();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
        closePreview();
    }
});
