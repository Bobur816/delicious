$(window).on("load", () => {
  const swiper = new Swiper(".carousel_head", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 1500,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const swiper2 = new Swiper(".carousel_menu", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 500,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel_menu-next",
      prevEl: ".carousel_menu-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  const swiper3 = new Swiper(".carousel_news", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 500,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: ".carousel_news-next",
      prevEl: ".carousel_news-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  const testimonials = new Swiper(".carousel_testimonials", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 500,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel_testimonials-next",
      prevEl: ".carousel_testimonials-prev",
    },

    // And if we need scrollbar

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });

  const swiper5 = new Swiper(".carousel_menu_2", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 500,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: ".carousel_menu-next",
      prevEl: ".carousel_menu-prev",
    },

    // And if we need scrollbar

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  const newsItem = new Swiper(".carousel_news-item", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    speed: 500,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
    },
  });
});
