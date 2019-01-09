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

$("#bookdesign").click(function(){
    $("#work2, #work3, #work4, #work5, #work6, #work7, #work12").fadeToggle();
    $(this).toggleClass("tagshover");
    $(".tag").not("#t1").toggleClass("opacity");
    $('html,body').animate({ scrollTop: $(".header").offset().top + 200});
});
$("#webdesign").click(function(){
    $("#work1, #work3, #work4, #work5, #work6, #work7, #work8, #work9, #work10, #work11, #work12").fadeToggle();
    $(this).toggleClass("tagshover");
    $(".tag").not("#t2").toggleClass("opacity");
    $('html,body').animate({ scrollTop: $(".header").offset().top + 200});
});
$("#animation").click(function(){
    $("#work1, #work2, #work5, #work6, #work7, #work8, #work9, #work10, #work11, #work12").fadeToggle();
    $(this).toggleClass("tagshover");
    $(".tag").not("#t3").toggleClass("opacity");
    $('html,body').animate({ scrollTop: $(".header").offset().top + 200});
});
$("#campaign").click(function(){
    $("#work1, #work2, #work3, #work4, #work8, #work9, #work10, #work11, #work12").fadeToggle();
    $(this).toggleClass("tagshover");
    $(".tag").not("#t4").toggleClass("opacity");
    $('html,body').animate({ scrollTop: $(".header").offset().top + 200});
});
$("#photography").click(function(){
    $("#work1, #work2, #work3, #work4, #work5, #work6, #work7, #work8, #work9, #work10, #work11").fadeToggle();
    $(this).toggleClass("tagshover");
    $(".tag").not("#t5").toggleClass("opacity");
    $('html,body').animate({ scrollTop: $(".header").offset().top + 200});
});

$("#work1").mouseover(function(){
  $(this).css("opacity" , ".80")
});
$("#work1").mouseout(function(){
  $(this).css("opacity" , "1")
});



});



































// $("#video-1").hide();

  // $('#play-6').on('click', function(ev) {
  //     $("#video-6").toggle();
  //     $("#animation6").toggle();
  //     $("#video-5")[0].src += "&autoplay=1";
  //      ev.preventDefault();
  //     });
