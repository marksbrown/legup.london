addLine = function(left){
  var position = $("#contents").position();
  if(left){
  $('.vr').css({'left' : position.left+"px"});
  }
  $('.vr').css({'height' : $(document).height()+"px"});
}

$(document).ready(function(){
  addLine(true);

  $(window).resize(function(){
    addLine(true);
  });

  $(".navbar").show();

  $(window).scroll(function () {

    addLine(false);

    if ($(this).scrollTop() > 10) {
      $('.navbar').fadeOut();
    } else {
      $('.navbar').fadeIn();
      }
    });
});
