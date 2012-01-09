/* Author: Benny A.

*/

(function($){
	
	var easeTiles = false;
	
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

		// var easeTiles = new SyndicatedSubwayTiles({
		// 	wrapId: 'subwayTiles'
		// });
		
		subwayTiles();
	});
	
	function subwayTiles(){
		//handle click on the stLink to open up the interface, but only do it for webkit cause webkit is awesome
		if ( $('#subwayTilesWrap').length && WebKitPoint ) {
			var wrap = $('#subwayTilesWrap'),
				speed = 250;
			
			//click link to open
			$('#loadSubwayTiles').click(function(e){
				//kills the href on the link
				e.preventDefault();
				
				if ( !easeTiles ) {
					easeTiles = new SyndicatedSubwayTiles({
						wrapId: 'subwayTiles'
					});
				}
				
				wrap.show( speed );
			});
			
			//click x to close
			$('#closeSubwayTiles').click(function(){
				wrap.hide(speed);
			});
			
		} //end if wrap
	}
	
	
})(jQuery);





















