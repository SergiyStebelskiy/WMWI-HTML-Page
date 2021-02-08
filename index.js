$(document).ready(() => {
  const header = $(".main-header");
  const headSlider = $(".main-header .slider");

  headSlider.slick({
    speed: 1200,
    prevArrow: $(".main-header .arrow.prev"),
    nextArrow: $(".main-header .arrow.next"),
  });
  const headerHeight = header.height() + 100;
  const onChangeCounter = () => {
    const currentSlideIdx = $(".slick-current").attr("data-slick-index");
    return $(".main-header .counter").html(`0${+currentSlideIdx + 1}`);
  };
  const onChangeSliderHeight = (headerHeight) => {
    $(".main-header .slider-wrap").css("height", headerHeight - 199);
    $(".main-header .slider-inline-wrap").css("height", headerHeight - 199);
    headSlider.css("height", headerHeight - 199);
    $(".main-header .slide").css("height", headerHeight - 199);
  };
  onChangeCounter(headerHeight);
  headSlider.on("afterChange", () => onChangeCounter());
  window.innerHeight < 768 && header.css("height", "auto");
  onChangeSliderHeight();
  $(window).resize(() => {
    window.innerHeight < 768
      ? header.css("height", "auto")
      : header.css("height", "100vh");
    const headerHeight = header.height() + 100;
    onChangeSliderHeight(headerHeight);
  });

  $(".story .tab").click(function () {
    var id = $(this).attr("data-tab"),
      content = $('.story .tab-content li[data-content="' + id + '"]');

    $(".story .tab.active").removeClass("active");
    $(this).addClass("active");

    $(".story .tab-content li.active").removeClass("active");
    content.addClass("active");
  });

  $(".projects .slider").slick({
    speed: 700,
    slidesToShow: 3,
    centerPadding: "80px",
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
  });
});
