/**
 * ScrollIt
 * ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 *
 * Latest version: https://github.com/cmpolis/scrollIt.js
 *
 * License <https://github.com/cmpolis/scrollIt.js/blob/master/LICENSE.txt>
 */
 // (function($) {
 //     "use strict";

 //     var pluginName = "ScrollIt",
 //         pliginVersion ="1.0.3";

 //     /*
 //      * OPTIONS
 //      */
 //     var defaults = {
 //     	 upKey: 38,
 //     	 downKey: 40,
 //     	 easing: "linear",
 //     	 scrollTime: 600,
 //     	 activeClass: "active",
 //     	 onPageChange: null,
 //     	 topOffset: 0
 //     };

 //     $.scrollIt = function(options) {

 //     	 /*
 //     	  * DECLARATIONS
 //     	  */
 //     	 var settings = $.extend(defaults, options),
 //     	     active = 0,
 //     	     lastIndex = $("[data-scroll-index]: last").attr("data-scroll-index");

 //     	 /*
 //     	  * METHODS
 //     	  */

 //     	 /**
 //     	  * navigate
 //     	  *
 //     	  * sets up navigation animation
 //     	  */
 //     	var navigate = function(ndx) {
 //     		if(ndx < 0 || ndx > lastIndex) return;

 //     		var targetTop = $("[data-scroll-index=" + ndx + "]").offset().top + settings.topOffset + 1;
 //     		$("html,body").animate({
 //     			scrollTop: targetTop,
 //     			easing: settings.easing
 //     		}, settings.scrollTime);
 //     	};

 //     	/**
 //     	 * doScroll
 //     	 *
 //     	 * runs navigation() when criteria are met
 //     	 */
 //     	var doScroll = function (e) {
 //     		var target = $(e.target).closest("[data-scroll-nav]").attr("data-scroll-nav") || 
 //     		$(e.target).closest("[data-scroll-goto]").attr("data-scroll-goto");
 //     		navigate(parseInt(target));
 //     	};

 //     	/**
 //     	 * keyNavigation
 //     	 *
 //     	 * sets up keyboard navigation behaviour
 //     	 */
 //     	var keyNavigation = function (e) {
 //     		var key = e.which;
 //     		if($("html,body").is(":animated") && (key == settings.upKey || key == settings.downKey)) {
 //     			return false;
 //     		}
 //     		if(key == settings.upKey && active > 0) {
 //     			navigate(parseInt(active) - 1);
 //     			return false;
 //     		} else if(key == settings.downKey && active < lastIndex) {
 //     			navigate(parseInt(active) + 1);
 //     			return false;
 //     		}
 //     		return true;
 //     	};

 //     	/**
 //     	 * updateActive
 //     	 *
 //     	 * sets the currently active item
 //     	 */
 //     	var updateActive = function(ndx) {
 //     		if(settings.onPageChange && ndx && (active != ndx)) settings.onPageChange(ndx);

 //     		active = ndx;
 //     		$("[data-scroll-nav]").removeClass(settings.activeClass);
 //     		$("[data-scroll-nav=" + ndx + "]").addClass(settings.activeClass);
 //     	};

 //     	/**
 //         * watchActive
 //         *
 //         * watches currently active item and updates accordingly
 //         */
 //        var watchActive = function() {
 //        	var winTop = $(window).scrollTop();

 //        	var visible = $("[data-scroll-index]").filter(function(ndx, div) {
 //        		return winTop >= $(div).offset().top + settings.topOffset &&
 //        		winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight()
 //        	});
 //        	var newActive = visible.first().attr("data-scroll-index");
 //        	updateActive(newActive);
 //        };

 //        /*
 //         * runs methods
 //         */
 //        $(window).on('scroll',watchActive).scroll();

 //        $(window).on('keydown', keyNavigation);

 //        $('body').on('click','[data-scroll-nav], [data-scroll-goto]', function(e){
 //            e.preventDefault();
 //            doScroll(e);
 //        }); 

 //     };  
 // });



/*====================================================================================*/
// Jqeury code to enable smooth scrolling

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

//============= = = = = = = = = = = = = = = = = = =============//

var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }

  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top - $(window).height(0.5) - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});


// Jqeury code to enable smooth scrolling

// (function($) {
//   "use strict"; // Start of use strict

//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 54)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });

//   // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });

//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#mainNav',
//     offset: 54
//   });

//   // Collapse the navbar when page is scrolled
//   $(window).scroll(function() {
//     if ($("#mainNav").offset().top > 100) {
//       $("#mainNav").addClass("navbar-shrink");
//     } else {
//       $("#mainNav").removeClass("navbar-shrink");
//     }
//   });

})(jQuery); // End of use strict
