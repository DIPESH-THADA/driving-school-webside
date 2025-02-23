var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    slidesPreview: 1,
    spaceBetween: 50,
    breakpoints: {
        599: {
            slidesPreview: 3,
        },
    },
});
