$(function() {
	
	var setUP = function () {	


				$('section.scrollsections').scrollSections({
					    attr: 'id',
					    alwaysStartWithFirstSection: false,
					    animateScrollToFirstSection: false,
					    speed: 200,
						scrollMax: 1,
						touch: true,
					    scrollbar: true,
					    createNavigation: false,
						navigation: false,
						active: 'active-scrollsection',
				});
				
				
				
			    $('#simplemenu').sidr({
				    	speed: 200, // How long the animation will run. Default: 200
						side: 'left', // Left or right, the location for the sidebar. Default: 'left'
						body: 'body' // For doing the page movement the 'body
				});
			    

				function test() {
						alert('test');
				}


				$('#sidr > ul >li').click(function(){
						//setUP();
						$.sidr('close');
						
		        });
				$('.left').click(function(){
						$.sidr('close');
		        });	
				$('.right').click(function(){
						$.sidr('close');
		        });		        

			   	// GLOBAL
			    var height = $(window).height();
			   
				
			  
			    $( window).scroll(function() {
				  	$( ".article" ).hide();
				  	$(".close").hide( );
				  	

				})
			    $( ".article" ).click(function(){
				  	$( ".article" ).hide();
				  	$(".close").hide( );

				})
				
					    
			    // INTERVENTIONS
				var c1 = $( "col1" );
				var c2 = $( "col2" );
				var position = c1.offset();
				c2.offset({ top: position.top-20});
				
				
				// PRESTATIONS
			//	$("#prestations > div").css("height",height/3);
				
				
				var ac1 = $( "ac1" );
				var ac2 = $( "ac2" );
				var position = ac2.offset();
				ac1.offset({ top: position.top});
		
				var bc1 = $( "bc1" );
				var bc2 = $( "bc2" );
				var position = bc1.offset();
				bc2.offset({ top: position.top});
				
				
				//  SECTION PERMALINK
				    	//index=index+1;
				    	$('.permalink').click(function(){
					    		
					    		var index =$(this).attr("data-id");
					    	
								if ($("#article"+index).is(':hidden')) {
									
									
						            var  a=$(this).parent( ".scrollsections").find('div>div>div').offset();
						            var  b=$(this).parent( ".scrollsections" ).find('.category').offset();
									
									$("#article"+index).find(".title").css('position','absolute');
									$("#article"+index).find(".title").css('top',b.top);
					              
					                $("#article"+index).find(".category").css('position','absolute');
					                $("#article"+index).find(".category").css('top',b.top);
					                $(".article .category").show();
					                
					                $("#article"+index).fadeIn( "fast", "linear" );
									//$(".close").show( );
									
									
									
								} else {
								
									$("#article"+index).hide( );
			
							    }


				});
		
	
			};
			
			

	
	$.fn.scrollStopped = function(callback) {          
	    $(this).scroll(function(){
	        var self = this, $this = $(self);
	        if ($this.data('scrollTimeout')) {
	          clearTimeout($this.data('scrollTimeout'));
	        }
	        $this.data('scrollTimeout', setTimeout(callback,400,self));
	    });
	};
	

	var isMobile = { 
	Android: function() { return navigator.userAgent.match(/Android/i); }, 
	BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
	//iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
	iOS: function() { return navigator.userAgent.match(/iPhone|iPod/i); }, 
	iPad: function() { return navigator.userAgent.match(/iPad/i); }, 
	Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
	Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
	any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
	};
	
	
	   if (isMobile.any()){

	
			var lastScrollTop = 0;
			$(window).scroll(function(event){
				
				if( $('.left').offset().top > 300 ) {
				  $("#mobilelogo").css('display','inline-block');	
	
			  	} else {
				  $("#mobilelogo").css('display','none');
			  	}
					  	
			});
			
			
			$("#sidr").html('<ul><li><a href="#home">Maison</a></li><li><a href="#interventions">Interventions</a></li><li><a href="#article1">Prestations</a></li><li><a href="#article4" >Convictions</a></li><li><a href="#liste">Opérations</a></li><li><a href="#repartitions">Répartition</a></li></ul>');
	
						
		    $('#simplemenu').sidr({
			    	speed: 200, // How long the animation will run. Default: 200
					side: 'left', // Left or right, the location for the sidebar. Default: 'left'
					body: 'body' // For doing the page movement the 'body
			});
			$('#sidr > ul >li').click(function(){
					//setUP();
					$.sidr('close');
					
	        });
			
		
	
	   } else if (isMobile.iPad()){
		   	
		   	var lastScrollTop = 0;
			$(window).scrollStopped(function(){

				
				if( $('.left').offset().top > 300 ) {
				  $("#mobilelogo").css('display','inline-block');	
	
			  	} else {
				  $("#mobilelogo").css('display','none');	
			  	}
					  	
					  	
			   var st = $(this).scrollTop();
			   if (st > lastScrollTop){

			        $(".scrollsections").css("height",window.screen.height);
					$("#convictions > div").css("height",window.screen.height/3);
					$("#prestations > div").css("height",window.screen.height/3);
			   } else {
				    $(".scrollsections").css("height",$(window).height());
					$("#convictions > div").css("height",$(window).height()/3);
					$("#prestations > div").css("height",$(window).height()/3);

			   }
			   
			   lastScrollTop = st;
			});
			
		   	$(window).resize(setUP);  //set the function to resize
			setUP();  //call the function noww
			
	   } else {
		   
		   	$(window).resize(setUP);  //set the function to resize
			setUP();  //call the function noww
			$(document).bind('scroll',function(e){
			    $('section').each(function(){
			        if (
			           $(this).offset().top < window.pageYOffset + 10
			//begins before top
			        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
			//but ends in visible area
			//+ 10 allows you to change hash before it hits the top border
			        ) {
			            window.location.hash = $(this).attr('id');
			            window.document.title ="Check-up Conseil - "  + $(this).attr('id').toUpperCase();
			            
			        }
			    });
			});
	   } 


		$(window).scroll(function(event){
			
			if( $('.left').offset().top > 100 ) {
			  $(".arrow").css('display','none');	

		  	} else {
			  $(".arrow").css('display','block');
		  	}
				  	
		});
		
	 
});
    