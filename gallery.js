document.addEventListener("DOMContentLoaded", () => {

    // ライトボックスを作る
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-image" src="" alt="">
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeButton = lightbox.querySelector(".lightbox-close");

    // 作品をクリックしたとき
    document.querySelectorAll(".artwork img").forEach((image) => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");
            
        });
    });

    // 閉じる処理
    function closeLightbox() {
        lightbox.classList.remove("active");
    }
    
    closeButton.addEventListener("click", 
        closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // ESCキーでも閉じる
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

});