(function ($) {
  "use strict";
  console.log("run!");
  $(function () {
    var layout =
      '<a href="javascript:void(0);" class="few-backtohead" style="display:none"></a>';
    if ($(".few-backtohead").length <= 0) {
      $("body").append(layout);
      $(document).on("click", ".few-backtohead", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          700
        );
      });
      console.log($(".few-backtohead").length);
    }
    $(window).on("scroll", function () {
      backTohead();
    });
  });

  var backTohead = function () {
    var scrollTrigger = 100, // px
      scrollTop = $(window).scrollTop();

    if (scrollTop > scrollTrigger) {
      $(".few-backtohead")
        .css("display", "flex")
        .fadeIn("slow", function () {
          $(this).addClass("show");
        });
    } else {
      $(".few-backtohead").fadeOut("slow", function () {
        $(this).removeClass("show");
      });
    }
  };
})(jQuery);
