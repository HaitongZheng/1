$(document).ready(function(){

  $( "#cross" ).click(function() {
     $("#tags").fadeToggle();
     $(".information").fadeToggle("slow", "linear");
  });


  var value = 0
  $("#cross").rotate({
    bind:
    {
      click: function(){
      value +=45;
      $(this).rotate({ animateTo:value})}
    }
  });


  $("#cross").on('click', function() {
    var click = $(this).data('clicks');

    if (click) {
        $('.tags').animate({left: "+=8vw"});
        $('.content').animate({left: "+=8vw"});
    }else{
        $('.tags').animate({left: "-=8vw"});
        $('.content').animate({left: "-=8vw"});
    };

    $(this).data('clicks', !click);

  });


  $("#ABOUT").mouseover(function(){
    $("#ellipse1").css("fill" , "yellow")
  });
  $("#ABOUT").mouseout(function(){
    $("#ellipse1").css("fill" , "none")
  });
  $("#CONTACT").mouseover(function(){
    $("#ellipse2").css("fill" , "yellow")
  });
  $("#CONTACT").mouseout(function(){
    $("#ellipse2").css("fill" , "none")
  });



        $(function() {
          var inWrap1 = $('.inner-wrapper1');
          $('#right1').on('click', function() {
            inWrap1.animate({left: '-200%'}, 300, function(){
            inWrap1.css('left', '-100%');
          $('.slide1').last().after($('.slide1').first());
            });
          }); });



});
