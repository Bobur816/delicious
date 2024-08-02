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

  // ____________________________preloader_______________________

  setTimeout(() => {
    $(".preloader").fadeOut(1000);
  }, 500);

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
