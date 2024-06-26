var swiper = new Swiper('.swiper-happycustomer', {
  // Optional parameters
  loop: true,

  // Default parameters к-ть слайдів на екрані
  slidesPerView: 1,

  // відстань між слайдами, px
  spaceBetween: 20,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});

var swiper = new Swiper('.swiper-services', {
  // Optional parameters
  loop: true,

  // Default parameters к-ть слайдів на екрані
  slidesPerView: 1,

  // grid: {
  //   rows: 2,
  // },

  // відстань між слайдами, px
  spaceBetween: 20,

  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper('.swiper-nutrition', {
  // Optional parameters
  loop: true,

  // Default parameters к-ть слайдів на екрані
  slidesPerView: 2,
  slidesPerGroup: 2,

  // Параметры модуля Grid
  grid: {
    rows: 3, // Количество рядов в сетке
    fill: 'row', // Заполнять ряды слева направо
  },
  // відстань між слайдами, px
  spaceBetween: 16,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2, // Количество рядов в сетке
        fill: 'row', // Заполнять ряды слева направо
      },
      spaceBetween: 16,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      grid: {
        rows: 2, // Количество рядов в сетке
        fill: 'row', // Заполнять ряды слева направо
      },
      spaceBetween: 32,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination-nutrition',
    bulletClass: 'pagination-nutrition__button',
    bulletActiveClass: 'pagination-nutrition__button--active',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button-nutrition.next',
    prevEl: '.carousel-button-nutrition.prev',
  },
});
