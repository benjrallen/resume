/* Author: Benny A.

*/

(function($){
	
	var easeTiles = false;
	
	$(document).ready(function(){
		
		easeXDR();
		
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

	function easeXDR(){
		$.ajaxTransport("+*", function( options, originalOptions, jqXHR ) {

		    if(jQuery.browser.msie && window.XDomainRequest) {

		        var xdr;

		        return {

		            send: function( headers, completeCallback ) {

		                // Use Microsoft XDR
		                xdr = new XDomainRequest();

		                xdr.open("get", options.url);

		                xdr.onload = function() {

		                    if(this.contentType.match(/\/xml/)){

		                        var dom = new ActiveXObject("Microsoft.XMLDOM");
		                        dom.async = false;
		                        dom.loadXML(this.responseText);
		                        completeCallback(200, "success", [dom]);

		                    }else{

		                        completeCallback(200, "success", [this.responseText]);

		                    }

		                };

		                xdr.ontimeout = function(){
		                    completeCallback(408, "error", ["The request timed out."]);
		                };

		                xdr.onerror = function(){
		                    completeCallback(404, "error", ["The requested resource could not be found."]);
		                };

		                xdr.send();
		          },
		          abort: function() {
		              if(xdr)xdr.abort();
		          }
		        };
		      }
		    });
	}
	
	function subwayTiles(){
		//handle click on the stLink to open up the interface
		if ( $('#subwayTilesWrap').length ) {
			var wrap = $('#subwayTilesWrap'),
				speed = 250;
			
			//click link to open
			$('#loadSubwayTiles').click(function(){
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





















