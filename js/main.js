$(window).on("load", () => {
  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  scroll > rootFont * 2
    ? $(".header").addClass("header-scrolled")
    : $(".header").removeClass("header-scrolled");

  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 2
      ? $(".header").addClass("header-scrolled")
      : $(".header").removeClass("header-scrolled");
  });

  //____________________mobile menu__________________________

  $(".mobile-menu__list-item .btn i").on("click", function () {
    $(this).parent().toggleClass("active");
    $(".mobile-submenu").slideToggle(400);
  });

  $(".mobile-menu__open").on("click", function () {
    $(".mobile-menu").toggleClass("active");
    $(".mobile-menu__box").slideToggle(400);
  });

  $(".mobile-menu__close").on("click", function () {
    $(".mobile-menu").toggleClass("active");
    $(".mobile-menu__box").slideToggle(400);
  });

  //____________________feedback__________________________

  $(".feedback__open").on("click", function () {
    $(".feedback").toggleClass("active");
  });
  $(".feedback__close").on("click", function () {
    $(".feedback").removeClass("active");

    setTimeout(() => {
      $(".feedback__wrap").show();
      $(".feedback__done").hide();
    }, 1000);
  });

  $(".feedback__form").on("submit", function (e) {
    e.preventDefault();
    $(".feedback__wrap").hide();
    $(".feedback__done").show();
  });

  $(".feedback").click((e) => {
    let div = $(".feedback__content");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".feedback__content").removeClass("active");
      setTimeout(() => {
        $(".feedback").removeClass("active");
      }, 200);
      setTimeout(() => {
        $(".feedback__done").hide();
        $(".feedback__wrap").show();
        $(".form_tel").val("");
        $(".form_name").val("");
      }, 700);
    }
  });

  // ___________________selecteds_____________________

  $(".selecteds-btn").on("click", function () {
    $(".selecteds__box").toggleClass("active");
    $(".search__bar__wrapper").slideUp(200);
  });

  $("body").on("click", function (e) {
    let div = $(".selecteds");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".selecteds__box").removeClass("active");
    }
  });

  // ___________________faq_____________________

  $(".faq-item").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).find(".faq-item__answer").slideUp(400);
    } else {
      $(".faq-item").removeClass("active");
      $(".faq-item__answer").slideUp(400);
      $(this).addClass("active");
      $(this).find(".faq-item__answer").slideDown(400);
    }
  });

  // ___________________search_____________________

  // $(".search__btn").on("click", function () {
  //   $(".search__bar__wrapper").slideToggle(200);
  //   $(".selecteds__box").removeClass("active");
  // });

  // $("body").on("click", function (e) {
  //   let div = $(".search");
  //   if (!div.is(e.target) && div.has(e.target).length === 0) {
  //     $(".search__bar__wrapper").slideUp(200);
  //   }
  // });

  $(".search__open").on("click", function () {
    $(".search__full").fadeIn(300);
    $(".search__box").slideDown(400);
    $(".mobile-menu").toggleClass("active");
    $(".mobile-menu__box").slideToggle(400);
  });

  $(".search__close").on("click", function () {
    $(".search__full").fadeOut(400);
    $(".search__box").slideUp(400);
  });

  $(".search__full").on("click", function (e) {
    let div = $(".search__box");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".search__full").fadeOut(400);
      $(".search__box").slideUp(400);
    }
  });

  // mobile - search__open;

  // $(".mobile-search__open").on("click", function () {
  //   $(".mobile-menu__bars").slideToggle(200);
  //   $(".selecteds__box").removeClass("active");
  // });

  //_________________________submenu-footer___________________

  $(".parrent-footer i").on("click", function () {
    $(this).parent().toggleClass("active");
    $(".footer-submenu").slideToggle(400);
  });

  new WOW({
    offset: 50,
    mobile: false,
  }).init();
});
