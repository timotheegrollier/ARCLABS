$(function () {
  $(".menu_hide").hide();

  $("#menu_4").click(function () {
    $("#menu_4_hide").slideToggle(400, function () {
      let state = $(this).is(":visible");
      console.log(state);

      if (state) {
        $("#corner_1").css({
          transform: "rotate(45deg)",
        });
      } else {
        $("#corner_1").css({
          transform: "rotate(-45deg)",
        });
      }
    });
  });

  $("#menu_5").click(function () {
    $("#menu_5_hide").slideToggle(400, function () {
      let state = $(this).is(":visible");
      console.log(state);

      if (state) {
        $("#corner_2").css({
          transform: "rotate(45deg)",
        });
      } else {
        $("#corner_2").css({
          transform: "rotate(-45deg)",
        });
      }
    });
  });

  $("#burger").click(function () {
    $("nav > ul").slideToggle(400, function () {
      $(this).css("display", "flex");
      $("#burger").hide();
      $("#cross").show();
    });
  });

  $("#cross").click(function () {
    $("nav > ul").slideToggle(400);
    $("#burger").show();
    $("#cross").hide();
  });
});
