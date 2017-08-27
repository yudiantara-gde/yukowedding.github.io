//(function($){

  	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

	    ratioImg();
	    //hero();  
	    
		$(window).resize($.debounce(1000, function(){

			ratioImg();
			//hero();
		}));

		//js carausel
		$(".wrapper-story").owlCarousel({
		 	loop: false,
    		margin: 0,
    		responsiveClass:true,
    		responsive:{
		        0:{
		            items: 1,
		            nav: false
		        },
		        480:{
		            items: 2,
		            nav: false
		        },
		        554:{
		            items: 2,
		            nav: false
		        },
		        768:{
		        	items: 3,
		        	nav: false
		        },
		        992:{
		        	items: 3,
		        	nav: false
		        },
		        1020:{
		        	items: 4,
		        	nav: false
		        }
		    }
		});

  	});

	//set ration img
	function ratioImg(){
	  	$('.ratio-img').each(function(){
	    		
	  		var ratio = $(this).attr('ratio').split(':');
	  		r_w = ratio[0];
	  		r_h = ratio[1];
	  		set_h = $(this).width()/(r_w/r_h);
	  		$(this).css({'height': set_h+'px'});
	  	});
	};

	//set heroes
	function hero() {

		var hScreen = $(window).height();

		$('.heroes').css({'height': hScreen+'px'});
	};
//(jQuery);