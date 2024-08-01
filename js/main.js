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

  // ___________________selecteds_____________________

  $(".selecteds-btn").on("click", function () {
    $(".selecteds__box").toggleClass("active");
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

  new WOW({
    offset: 50,
    mobile: false,
  }).init();
});
