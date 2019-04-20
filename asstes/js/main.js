//require('owl.carousel');

(function($) {
    'use strict';

    // Global variables
    var owl = $('.owl-carousel');
    var owlLoader = $('.loader-bar');
    var owlDuration = 4200;
    var loaderDuration = owlDuration / 1000 + 's';
    var owlSlides = owl.children('div');
    var owlAutoPlay = owlSlides.length > 1;

    // Linear loader
    var resetLoaderStyles = {
        'width': '0',
        'transition-duration': '0s'
    };
    var loaderStyles = {
        'width': '100%',
        'transition-duration': loaderDuration
    };

    $(document).ready(function() {
        // If there are multiple slides
        if (owlAutoPlay == true) {
            owl.owlCarousel({
                loop: true,
                autoplay: owlAutoPlay,
                autoplaytimeout: owlDuration,
                autoplayHoverPause: true,
                margin: 0,
                responsiveClass: true,
                navText: ['←', '→'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    }
                }
            });

        } else {
            // Else only show the first and unique item
            owl.show();
        }
        window.requestAnimationFrame(function(){
            // Circular loader
            //circle.css(circleStyles);

            // Linear loader
            owlLoader.css(loaderStyles);
        });

        owl.on('changed.owl.carousel', function() {
            // Circular loader
            //circle.css(resetCircleStyles);

            // Linear loader
            owlLoader.css(resetLoaderStyles);
            window.requestAnimationFrame(function(){
                // Circular loader
                //circle.css(circleStyles);
                
                // Linear loader
                owlLoader.css(loaderStyles);
            });

        });
    });
})(jQuery);
    
    //#scroll menu
	$( window ).scroll(function() {

		var height = $(window).scrollTop();

		if(height >= 670) {
			$('#main-nav').addClass('navbar-fixed-top');
		} else {
			$('#main-nav').removeClass('navbar-fixed-top');
		}

	});

$( ".append" ).append( "This" + height + "is!");

//active menu 

   
	