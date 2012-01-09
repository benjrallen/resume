/* Author: Benny A.

*/

(function($){
	
	$(document).ready(function(){
		
		var eyt = new EaseYouTubePlayer({
			maxResults: 4 //google limit is 50			
		});
		
		var eMap = new EaseMap({
			zoom: 11,
			streetViewControl: true,
			fitMarkers: true,
			//now center on tulsa cause we live in tulsa
			centerLat: 36.153982,
			centerLng: -95.992775,
			dataCont: '.entry .mapList',
			dataBlock: '.mapItem',
			dataAttr: 'ease-data',
			locationKey: 'location',
			directionsLink: false,
			blocksAreClickable: true
		});

		var request = '?json=get_recent_posts';

		$.getJSON( 'http://subwaytiles.bennya.com' + request, function(json){
			console.log('request worked', json);
		});
	});
	
})(jQuery);





















