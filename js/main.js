$(document).ready(function(){

    //상단 메뉴 고정
    var $haeder = $('header');
    $(window).scroll(function(){
        if($(this).scrollTop() > 540){
            $haeder.addClass('sticky');
        }else{
            $haeder.removeClass('sticky');
        }
    });

    //menu hover


    var $img =$('.sec6 img');

    //section 2 box
    $(".boxsec2").on("mouseover", function(){
        $(this).css({"box-shadow":"10px 30px 60px rgba(0,0,0,.12)"});
    });

    $(".boxsec2").on("mouseout", function(){
        $(this).css({"box-shadow":"none"});
    });



    //section4-tabs
    $('.sec4-bot').tabs({
        show: { duration: 200 },
        hide: { duration: 200 }
      });



      //section4-tabs menu



     //section4-tabs box
      var slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        currentIdx = 0,
        slideCount = slide.length,
        prevBtn = document.querySelector('.prev'),
        slideWidth = 203,
        slideMargin = 36;

      slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

      function moveSlide(num){

        slides.style.left = -num * 239 + 'px';
        currentIdx = num;
      }
      prevBtn.addEventListener('click', function(){
          if(currentIdx < slideCount -6){
            moveSlide(currentIdx + 1);
          }else{
            moveSlide(0);
          }
      });


      //box
      $( '.probox01' ).mouseenter( function() {
        $( '.cover01' ).slideDown(300);
      } );
      $( '.cover01' ).mouseleave( function() {
        $( '.cover01' ).slideUp(300);
      } );

      $( '.probox02' ).mouseenter( function() {
        $( '.cover02' ).slideDown(300);
      } );
      $( '.cover02' ).mouseleave( function() {
        $( '.cover02' ).slideUp(300);
      } );

      $( '.probox03' ).mouseenter( function() {
        $( '.cover03' ).slideDown(300);
      } );
      $( '.cover03' ).mouseleave( function() {
        $( '.cover03' ).slideUp(300);
      } );




      
      $( '.probox04' ).mouseenter( function() {
        $( '.cover04' ).slideDown(300);
      } );
      $( '.cover04' ).mouseleave( function() {
        $( '.cover04' ).slideUp(300);
      } );

      $( '.probox05' ).mouseenter( function() {
        $( '.cover05' ).slideDown(300);
      } );
      $( '.cover05' ).mouseleave( function() {
        $( '.cover05' ).slideUp(300);
      } );

      $( '.probox06' ).mouseenter( function() {
        $( '.cover06' ).slideDown(300);
      } );
      $( '.cover06' ).mouseleave( function() {
        $( '.cover06' ).slideUp(300);
      } );







});