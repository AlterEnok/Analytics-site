document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
});

let swiperInstance = null;

function initSwiper() {
    if (window.innerWidth <= 768) {
        if (!swiperInstance) {
            swiperInstance = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    } else {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }
}

document.addEventListener('DOMContentLoaded', initSwiper);
window.addEventListener('resize', initSwiper);