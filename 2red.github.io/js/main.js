$(window).on('load', function(){
	Main.init();
	Main.setParallaxHeight(); 
	if ($(window).width() > 480)
	$('#loader').fadeOut();
});
$(window).on('resize', function(){
	Main.setParallaxHeight();
	Main.setElementsHeight();
});
var Main = (function($){
	return {
		//inits
		init: function(){
			Main.events();
			Main.setElementsHeight();
			Main.setParallaxHeight();
			Main.countdownInit();
		},
		//events
		events: function(){
			$(document).on('click','#share',function(){
				window.open('https://www.facebook.com/sharer/sharer.php?u=2red.github.io');
			});
		},
		//functions
		setParallaxHeight: function(){
			var height = $(window).height();
			$('#christmas_scene .layer-photo').css('height', height);
		},
		setElementsHeight: function(){
			var height = $(window).height();

			if( height <= 400){
				var width = $(window).height() / 2;
			}else if( height <= 500 ){
				var width = $(window).height() / 3.5;
			}else if( height <= 700 ){
				var width = $(window).height() / 3;
			}else if( height <= 800 )
			var width = $(window).height() / 2.8;
			else{
				var width = $(window).height() / 2.5;
			}
			$('#christmas_tree').css({ 'width' : width,
				'margin-left' : -(width/2)
			});
			$('#mail_pole').css('margin-left', -(width/1.2));
			$('#mail_pole img').css('width', width/3);
		},
		countdownInit: function(){
			$('#countdown_container').countdown('2017/12/25', function(event) {
				$(this).html(event.strftime('<div class="col-md-3 col-xs-3 countdown-globe">%D<div class="col-md-12 padding-none">Days</div></div>\
					<div class="col-md-3 col-xs-3 countdown-globe">%H<div class="col-md-12 padding-none">Hours</div></div>\
					<div class="col-md-3 col-xs-3 countdown-globe">%M<div class="col-md-12 padding-none">Minutes</div></div>\
					<div class="col-md-3 col-xs-3 countdown-globe">%S<div class="col-md-12 padding-none">Seconds</div></div>'));
			});
		}
	}
})($);
