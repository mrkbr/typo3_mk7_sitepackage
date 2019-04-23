/*
	----------------------------------------------------------------------------------------------------------------
	  Gloabl Vars
	---------------------------------------------------------------------------------------------------------------- */
	var $currentContent = '';
	var $device = '';





/*
	----------------------------------------------------------------------------------------------------------------
	  Init Flickity
	---------------------------------------------------------------------------------------------------------------- */
function initSwiper(){
	
	var myMainSwiper = new Swiper('.mk7slider', {
		//wrapperClass: 'slides',
		//slideClass: 'slide',
		//slidesPerView: 3,
	    loop: 1,
	    speed: 400,
	    //spaceBetween: 100
	    keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	
	var myNewsSingleSwiper = new Swiper('.news-single .swiper-container', {
		//wrapperClass: '',
		slideClass: 'outer',
		//slidesPerView: 3,
	    loop: 1,
	    speed: 400,
	    //spaceBetween: 100
	    keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


}




/*
	----------------------------------------------------------------------------------------------------------------
	  Init Flickity
	---------------------------------------------------------------------------------------------------------------- */
	function initFlickity(){


		var $flickWrap = $('.mk7slider .slides');
		var $flickWrap2 = $('.mk7slider .slides2');
		
		var $flickElement = $('.mk7slider .slide');

		if ($flickElement.length > 1) {

			//$('.csc-textpic-text').wrap('<div class="csc-textpic-wrap" />');

			var $flickObj = $flickWrap.flickity({
				freeScroll: false,
				wrapAround: true,
				autoPlay: 5000,
				setGallerySize: true,
				lazyLoad: true,
				pageDots: true,
				imagesLoaded: true,
			});
			
			
			if ($flickWrap2.length) {
				
				var $flickObj2 = $flickWrap2.flickity({
					freeScroll: false,
					wrapAround: true,
					autoPlay: 5000,
					setGallerySize: true,
					lazyLoad: true,
					pageDots: false,
					prevNextButtons: false,
					imagesLoaded: true,
				});
				
			
				flkty = $flickObj.data('flickity');
			
				$flickObj.on( 'select.flickity', function() {
					//console.log( 'Flickity settled at ' + flkty.selectedIndex );
					$flickObj2.flickity( 'select', flkty.selectedIndex );
				});
				
				
			};

			//$('.mk7slider .slide').velocity("transition.expandIn", { stagger: 150 });

			
			
			
			
			scrollDown();
		};		
	};


	


/*
	----------------------------------------------------------------------------------------------------------------
	  Slide Out Text
	---------------------------------------------------------------------------------------------------------------- */
	function slideOutText(){

		var $elem 			= $('.csc-slideOutText');
		var $btn			= $elem.find('button');
		var $initHeight		= $elem.outerHeight();
		var $targetHeight	= $initHeight/2;
		var $targetHeight	= "500px";

		$elem.css({height: $targetHeight}).addClass('closed');

		$btn.click(function(){

			if ( $elem.hasClass('closed') ) {

				$elem.animate({height: $initHeight}, '400',function(){
					$(this).removeClass('closed');
					$btn.html('Weniger');
				})


			} else {

				$elem.animate({height: $targetHeight}, '400').addClass('closed');
				$btn.html('Mehr');

			};

		});

	};



/*
	----------------------------------------------------------------------------------------------------------------
	  show person image on hovering text
	---------------------------------------------------------------------------------------------------------------- */
	function personHoverImage(){

		var $elem = $('.csc-slideOutContent .csc-header');
		var $personPic = $('.csc-slideOutContent .csc-default .csc-textpic-imagewrap');

		$elem.hover(function(){
			$(this).parent().find($personPic).stop().fadeIn();
		}, function(){
			$(this).parent().find($personPic).stop().fadeOut();
		});
	};



/*
	----------------------------------------------------------------------------------------------------------------
	Add scroll-to-content-button
	---------------------------------------------------------------------------------------------------------------- */
	function scrollDown(){
		
		var $btn = '<div class="scrollDown"><button><span></span>Scroll</button></div>';

		$('.contentPic').after($btn);

		$(".scrollDown").click(function () {
			var $wH = $(window).height();
			$("html, body").animate({scrollTop: $wH-180}, 1500, 'easeInOutExpo');
		});
	};



/*	----------------------------------------------------------------------------------------------------------------
	  navi toggle
	---------------------------------------------------------------------------------------------------------------- */
	function toggleNav() {
		if (jQuery('body').hasClass('navOpen')) {
			// Do things on Nav Close
			jQuery('body').removeClass('navOpen');
		} else {
			// Do things on Nav Open
			jQuery('body').addClass('navOpen');
		}
		return false;
	    //$('.site-wrapper').toggleClass('navOpen');
	}






/*
	* -------------------------------------------------------------
	*
	* Hamburger
	* Show Menu Functions and add Menu Button
	*
	* -------------------------------------------------------------
*/

	function hamburger(){
		
		$('body > header').prepend('<div class="hamburger"><span>MENU</span></div>');
		
		$(document).on('click','.hamburger', function(){
			$(this).toggleClass('open');
			$('body').toggleClass('showMenu');
			
			//$.magnificPopup.close();
		});
			
	};
	
	









/*	----------------------------------------------------------------------------------------------------------------
	  fancybox lightbox
	---------------------------------------------------------------------------------------------------------------- */
	function initFancybox(){
	
		$('.lightboxImage').on('click', function() {
			$.fancybox.open( $('.lightboxImage'), {
				infobar : true,
				arrows  : true,
				caption : function( instance, item ) {
					return $(this).find('figcaption').html();
				},
				buttons : [
					'close'
				],
			}, $('.lightboxImage').index( this ) );
			return false;
		});
	};










/*	----------------------------------------------------------------------------------------------------------------
	  cycle
	---------------------------------------------------------------------------------------------------------------- */

	function initCycleFade(){

		$elem = $('.csc-layout-24');

		$slide = '.csc-textpic-imagerow';

		if ( $elem.length ) {
			$('.csc-layout-24 .csc-textpic-imagewrap').prepend('<span class="cyclePrev">Prev </span><span class="cycleNext"> Next</sp').cycle({
			    speed: 600,
			    manualSpeed: 300,
			    slides: $slide,
			    prev: '.cyclePrev',
			    next: '.cycleNext'
			});
		}

	};




/*	----------------------------------------------------------------------------------------------------------------
	  header scroll shrinker
	---------------------------------------------------------------------------------------------------------------- */

	$(window).on("scroll touchmove", function () {
		$('body').toggleClass('headerShrinked', $(document).scrollTop() > 73);
	});







/*	----------------------------------------------------------------------------------------------------------------
	barba.js
	---------------------------------------------------------------------------------------------------------------- */

function barbaInit(){

	
	var FadeTransition = Barba.BaseTransition.extend({
	  start: function() {
	    /**
	     * This function is automatically called as soon the Transition starts
	     * this.newContainerLoading is a Promise for the loading of the new container
	     * (Barba.js also comes with an handy Promise polyfill!)
	     */
	
	    // As soon the loading is finished and the old page is faded out, let's fade the new page
	    Promise
	      .all([this.newContainerLoading, this.fadeOut()])
	      .then(this.fadeIn.bind(this));
	  },
	
	  fadeOut: function() {
	    /**
	     * this.oldContainer is the HTMLElement of the old Container
	     */
	
	    return $(this.oldContainer).animate({ opacity: 0 }).promise();
	  },
	
	  fadeIn: function() {
	    /**
	     * this.newContainer is the HTMLElement of the new Container
	     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
	     * Please note, newContainer is available just after newContainerLoading is resolved!
	     */
	
	    var _this = this;
	    var $el = $(this.newContainer);
	
	    $(this.oldContainer).hide();
	
	    $el.css({
	      visibility : 'visible',
	      opacity : 0
	    });
	
	    $el.animate({ opacity: 1 }, 400, function() {
	      /**
	       * Do not forget to call .done() as soon your transition is finished!
	       * .done() will automatically remove from the DOM the old Container
	       */
	
	      _this.done();
	    });
	  }
	});
	
	
	// Define barba properties
	Barba.transitionLength = 500;
	
	// Define transition
	var mk7transition = Barba.BaseTransition.extend({
	  start: function() {
	    this.newContainerLoading.then(this.runTransition.bind(this));
	  },
	
	  runTransition: function() {
	
	    document.body.style.overflow = 'hidden';
	
	    ////////////////////////////
	    // Setup
	    ////////////////////////////
	    var transitionLength = parseInt(Barba.transitionLength),
	        transitionTimeout = 100,
	        transitionLengthSeconds = (transitionLength / 1000) + 's',
	        transitionSelector = 'data-transition'; 
	    ////////////////////////////
	    
	    // Set the animation time on all elements
	    var allAnimationElements = document.querySelectorAll('[' + transitionSelector + ']');
	    for (var i = 0; i < allAnimationElements.length; i++) {
	      var element = allAnimationElements[i];
	
	      // Set styles
	      element.style.animationDuration = transitionLengthSeconds;
	      element.style.animationDelay = transitionLengthSeconds;
	      element.style.animationName = element.dataset.transition;
	      element.style.animationFillMode = 'forwards';
	    }
	
	    // Get all old elements with transitions
	    var oldElements = this.oldContainer.querySelectorAll('[' + transitionSelector + ']');
	    for (var i = 0; i < oldElements.length; i++) {
	      element = oldElements[i];
	
	      // Remove style tag
	      element.removeAttribute('style');
	    }
	    
	    // Trigger out transitions
	    setTimeout(function(){
	
	      for (var i = 0; i < oldElements.length; i++) {
	        var element = oldElements[i];
	
	        // Set styles
	        element.style.animationDuration = transitionLengthSeconds;
	        element.style.animationDelay = '0s';
	        element.style.animationName = element.dataset.transition;
	        element.style.animationFillMode = 'forwards';
	        element.style.animationDirection = 'alternate-reverse';
	      }
	
	    }, transitionTimeout);
	
	    var x = this;
	    function done(x) {
	
	      // Remove old container and add new one
	      x.oldContainer.style.visibility = 'hidden';
	      x.newContainer.style.visibility = 'visible';
	
	      // Remove style tag at the end of the animation
	      setTimeout(function(){
	        document.body.style.overflow = 'visible';
	        for (var i = 0; i < allAnimationElements.length; i++) {
	          var element = allAnimationElements[i];
	          element.removeAttribute('style');
	        }
	      }, transitionLength);
	
	      // Scroll to top
	      document.body.scrollTop = 0;
	
	      // Done
	      x.done();
	
	    }
	
	    // Mark as done
	    setTimeout(function(){
	      done(x);
	    }, transitionLength + transitionTimeout);
	
	  }
	});
	
	
	
	
	
	/**
	 * Next step, you have to tell Barba to use the new Transition
	 */
	
	Barba.Pjax.getTransition = function() {
	  /**
	   * Here you can use your own logic!
	   * For example you can use different Transition based on the current page or link...
	   */
	
	  return FadeTransition;
	  //return mk7transition;
	};
	
	
	
/*
	Barba.Pjax.Dom.containerClass = 'container';
	Barba.Pjax.Dom.wrapperId  = '#innerWrap';
*/
	Barba.Prefetch.init();
	Barba.Pjax.cacheEnabled = 1;
	Barba.Pjax.ignoreClassLink = 'lightboxImage';
  	
	var Homepage = Barba.BaseView.extend({
		namespace: 'homepage',
		onEnter: function() {
			//console.log('enter');
		},
		onEnterCompleted: function() {
			console.log('enter');	
			initFancybox();
			initSwiper();
		},
		onLeave: function() {},
		onLeaveCompleted: function() {}
	});
    
    Homepage.init();

  	Barba.Pjax.start();
	
	
	
}; //fn barbaInit end


function initFullpageMenu(){
		$('body > header').append('<ul class="jumpFullPage" />');
	
	
	$('.mk7slider').each(function(){
		
		
		var $anchor = $(this).attr('data-anchor');
		var $anchorTitle = $(this).attr('data-anchortitle');
		
		if ( $anchor ) {
			console.log($anchor);
			$(this).parent().parent().attr('data-anchor', $anchor);
			$('header .jumpFullPage').append('<li data-menuanchor="' + $anchor + '"><a href="#' + $anchor + '">' + $anchorTitle + '</a></li>');
		}
	});
	


};



function initFullpage(){

	
	var myFullpage = new fullpage('.contentMain', {
		licenseKey: '5A8347D4-867943D6-A447623C-626D78AC',
		verticalCentered: false,
		slideSelector: 'fullpageSlide',
		menu: '.jumpFullPage',
		//sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
		sectionSelector: '.ceOut',
		paddingTop: '100px',
	});
	
	
}; // fullpage 







$(document).ready(function() {

	//initFullpageMenu();
	
	//initFullpage();

	//barbaInit();

	//initFlickity();
	//initCycleFade();
	initFancybox();
	
	//initSwiper();
	
	hamburger();
	
	
	var slideUp = {
    distance: '110px',
    origin: 'bottom',
    opacity: null
};
	
	        ScrollReveal({ reset: true });

	
	ScrollReveal().reveal('.contentMain > div', slideUp);



});


window.onload = function() {


}


