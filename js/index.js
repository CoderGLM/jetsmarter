// JavaScript Document
$(function () {
    var key = 0,
        animating = false;

    // Assign false to animating when transition did end
    $('.wrapBox').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
      animating = false;
      console.log('=====');
    });

    $(document).mousewheel(function (event, delta) {
      if (!animating) {
          var length = $('.fix_nav div').length;
          key = key - delta;
          key = Math.min(Math.max(key,0), length-1);

          scrollTo(key);
      }
      animating = true;
    });

    // Touch events only work in cell phone.
    (function() {
      var start = {x: 0, y: 0};

      // touchStart
      $(document).on('touchstart', function(e) {
        e.preventDefault();

        var touch = e.originalEvent.touches[0];
        start = {
            x: touch.pageX, 
            y: touch.pageY
        };
      });

      // touchmove
      $(document).on( 'touchmove', function(e) {
        e.preventDefault();

        var current = e.originalEvent.touches[0];
        if (current.pageY > start.pageY) {

        } else if (current.pageY < start.pageY) {

        }
      });

      // touchend
      $(document).on('touchend', function(e) {

      });

    })();

    function scrollTo(index) {
      $('.wrapBox').css({ top: -index * 100 + '%' });
      $('.fix_nav div').eq(index).addClass('current').siblings().removeClass('current');
    }

    $('.fix_nav div').bind({
        click: function () {
            key = $(this).index();
            $('.wrapBox').css({ top: -key * 100 + '%' });
            $(this).addClass('current').siblings().removeClass('current');
        }
    });

    //home nav menu 
    $('.btn_nav_menu').on('click', function() {
      $('.nav_menu').css({ width: "320px" });
      return false
    });

    $('body').bind({
        click: function () {
            $('.nav_menu').css({ width: "0px" });
            //$('.nav_menu').animate({ width: "0px" }, 400);
            //$(this).hide();
            return false;
        }
    });

    //home next page
    $('.btn_next_page').bind({
        click: function () {
            key = 1;
            $('.wrapBox').stop(true).animate({ top: -key * 100 + '%' }, 400);
            $(this).addClass('current').siblings().removeClass('current');
            out();
            prev = key;
        }
    });

    $('button:first').click(function () {
        $('.box').removeClass('comeout');
    });



    function out() {
//       $('.box').eq(prev).addClass('comeout');
//       $('.box').eq(key).removeClass('comeout');
    }
});
