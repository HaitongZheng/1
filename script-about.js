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


  $("#CONTACT").mouseover(function(){
    $("#ellipse2").css("fill" , "yellow")
  });
  $("#CONTACT").mouseout(function(){
    $("#ellipse2").css("fill" , "none")
  });



});


































// $("#video-1").hide();

  // $('#play-6').on('click', function(ev) {
  //     $("#video-6").toggle();
  //     $("#animation6").toggle();
  //     $("#video-5")[0].src += "&autoplay=1";
  //      ev.preventDefault();
  //     });


      // $(function() {
      //   var inWrap0 = $('.inner-wrapper0');
      //   $('#left0').on('click', function() {
      //     inWrap0.animate({left: '0%'}, 300, function(){
      //     inWrap0.css('left', '-100%');
      //   $('.slide0').first().before($('.slide0').last());
      //     });
      //   });
      //   $('#right0').on('click', function() {
      //     inWrap0.animate({left: '-200%'}, 300, function(){
      //     inWrap0.css('left', '-100%');
      //   $('.slide0').last().after($('.slide0').first());
      //     });
      //   }); });
