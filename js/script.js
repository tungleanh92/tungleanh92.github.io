$(function() {
  $("#commentForm").validate({
    rules: {
        field1: {
            dateISO: true,
        },
        field2: {
            dateISO: true,
        },
        cemail: {
          email: true,
        },
      },
      submitHandler: function() {
        alert("Success!");
    }
  });
  $('.carousel').carousel()
  $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
  $(window).scroll(function(){
    if($(window).scrollTop()>= 110) {
      $(".menu").css({"position":"fixed","top":"0","boxShadow":"0px 0px 10px","zIndex":"100"});
      $(".menu").addClass("wow fadeInDown animated res");
      }else{
        $(".menu").css({"position":"relative","boxShadow":"none","zIndex":"100"});
        $(".menu").removeClass("wow fadeInDown animated res");
      }
  });
  if ($(window).width() >= 992) {
    $('#sup').hover(function() {
      $("#effect").animate({"margin-top":"40px"});
      $("#effect").animate({"margin-top":"0px"}, "slow");
  })
  }
});

var bar = '<i class="fa fa-bars" aria-hidden="true"></i>';
var close = '<i class="fa fa-times" aria-hidden="true"></i>';
var cong = '<i class="fa fa-plus" aria-hidden="true"></i>';
var tru = '<i class="fa fa-minus" aria-hidden="true"></i>';
$(function() {

var ceck = true;
$('#icon').click(function()
{
    
    if(check == true)
    {
        
        $('#icon').html(close).animate({  borderSpacing: -90 }, {
         step: function(now,fx) {
          $(this).css('-webkit-transform','rotate('+now+'deg)'); 
          $(this).css('-moz-transform','rotate('+now+'deg)');
          $(this).css('transform','rotate('+now+'deg)');
        },
         duration:'slow'
        },'linear');

        $("#menu").animate({"left":"0"}, "slow");
        check = !check;

    } else {          
        $('#icon').html(bar).animate({  borderSpacing: 180 }, {
         step: function(now,fx) {
          $(this).css('-webkit-transform','rotate('+now+'deg)'); 
          $(this).css('-moz-transform','rotate('+now+'deg)');
          $(this).css('transform','rotate('+now+'deg)');
        },
         duration:'slow'
        },'linear');
        $("#menu").animate({"left":"-240px"}, "slow");
        check = !check;
        
    }
    });

    var check1 = true;
    $('#sup').click(function()
    {
        
        if(check1 == true) {       
          $('#plus').html(tru).animate({  borderSpacing: 180 }, {
           step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)'); 
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
          },
           duration:'slow'
          },'linear');
          $('#menu ul li ul').css({'position':'static'});        
          $('#menu ul li ul').slideDown();
          check1 = !check1;
    } else {           
        $('#plus').html(cong).animate({  borderSpacing: -90 }, {
         step: function(now,fx) {
          $(this).css('-webkit-transform','rotate('+now+'deg)'); 
          $(this).css('-moz-transform','rotate('+now+'deg)');
          $(this).css('transform','rotate('+now+'deg)');
        },
         duration:'slow'
        },'linear');
        check1 = !check1;    
        $('#menu ul li ul').slideUp();                    
    }
    });

});