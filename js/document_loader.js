/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
jQuery(document).ready(function() {
		 
		
    
		   $('.countdown').final_countdown({
				'start': 1362139200,
				'end': 1388461320,
				'now': 1380461319        
			});
		
		/**
		 * This part target to customize bootstrap cursor to fullscreen fadein and out effect
		 */	
		if($('#screenFadeInOut').length){	
			$('#screenFadeInOut').carousel({
				pause: "false",
				interval: 4000
			});
			$('#screenFadeInOut').css({'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
			$('#screenFadeInOut .item').css({'position': 'fixed', 'width': '100%', 'height': '100%'});
			$('#screenFadeInOut div.item img').each(function() {
				var imgSrc = $(this).attr('src');
				$(this).parent().css({'background': 'url('+imgSrc+') center center no-repeat', '-webkit-background-size': '100% ', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover'});
				$(this).remove();
			});
		
			$(window).on('resize', function() {
				$('#screenFadeInOut').css({'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
			});
		}

 	  	/**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
        $("nav a").click(function(evn){
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash); 
        });
		
		
		// Start Google Map	
		if($('#map').length){
			var map;
			map = new GMaps({
			el: '#map',
				lat: -12.043333,
				lng: -77.028333
			});
			map.addMarker({
				 lat: map.getCenter().lat(),
        		lng: map.getCenter().lng(),
			});
			map.drawOverlay({
				 lat: map.getCenter().lat(),
        		lng: map.getCenter().lng(),
				content: '<div class="mapoverlay">'+
					'<strong>One Page Conference &amp; Event Template</strong><br/>'+
					'Address : 	dummy<br/>'+
					'State/Province:dummy<br/>'+
					'City : 	dummy<br/>'+
					'Postcode/Zip : dummy<br/>'+
					'</div>',
				verticalAlign: 'top',
				horizontalAlign: 'center'
			});
		}
		
	
}); 