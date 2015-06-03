addLine = function(){
  var position = $("#contents").position();
  $('.vr').css({'left' : position.left+"px"});
}

$(document).ready(function(){
  addLine();

  $(window).resize(function(){
    addLine(true);
  });

  //$(".navbar").show();
/*
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.navbar').fadeOut();
    } else {
      $('.navbar').fadeIn();
      }
    });
   */
});
