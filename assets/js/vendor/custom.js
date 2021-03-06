$(function() {
  $(document).on("click", "#toggler", function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    $(this).closest(".search-block").next(".search-toggle").slideToggle();
  });
  /**
   * Main carousel initialization
   **/
  $('.carousel').carousel({
    interval: 5000
  });  
  /**
   * Userbox submenu
   **/
  $(document).on("click", ".header-userbox_icn", function(ev) {
    ev.preventDefault();
    $(this).addClass("active");
    $(this).find(".header-userbox_submenu").addClass("animated jello").show();
  });
  $(document).on("click", ".active", function(ev) {
    ev.preventDefault();
    $(this).removeClass("active");
    $(this).find(".animated.jello").removeClass("animated jello").fadeOut();
  });
  /**
   * Slick carousel
   **/
  $(".__roddom").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(".top-brands_ul").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(document).on("click", "#more-products", function(ev) {
    ev.preventDefault();
    $(this).text("");
    $(this).append("<div class='typing-indicator'><span></span><span></span><span></span></div>");
  });
  $(".search-toggle_item").hover(
    function() {
      $(this).find("span").addClass("hovered");
    },
    function() {
      $(this).find("span").removeClass("hovered");
    }
  );
});
