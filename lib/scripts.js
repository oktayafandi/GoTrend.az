$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
  });
});
