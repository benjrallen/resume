
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

// place any jQuery/helper plugins in here, instead of separate, slower script files.
/*!
 * json2.js - minified
 */
this.JSON||(JSON=function(){function k(b){return b<10?"0"+b:b}function o(b){p.lastIndex=0;return p.test(b)?'"'+b.replace(p,function(b){var c=r[b];if(typeof c==="string")return c;return"\\u"+("0000"+(+b.charCodeAt(0)).toString(16)).slice(-4)})+'"':'"'+b+'"'}function l(b,i){var c,d,h,m,g=e,f,a=i[b];a&&typeof a==="object"&&typeof a.toJSON==="function"&&(a=a.toJSON(b));typeof j==="function"&&(a=j.call(i,b,a));switch(typeof a){case "string":return o(a);case "number":return isFinite(a)?String(a):"null";
case "boolean":case "null":return String(a);case "object":if(!a)return"null";e+=n;f=[];if(typeof a.length==="number"&&!a.propertyIsEnumerable("length")){m=a.length;for(c=0;c<m;c+=1)f[c]=l(c,a)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(j&&typeof j==="object"){m=j.length;for(c=0;c<m;c+=1)d=j[c],typeof d==="string"&&(h=l(d,a))&&f.push(o(d)+(e?": ":":")+h)}else for(d in a)Object.hasOwnProperty.call(a,d)&&(h=l(d,a))&&f.push(o(d)+(e?": ":":")+h);
h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}Date.prototype.toJSON=function(){return this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;return{stringify:function(b,i,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((j=i)&&typeof i!=="function"&&(typeof i!=="object"||typeof i.length!=="number"))throw Error("JSON.stringify");return l("",{"":b})},parse:function(b,e){function c(b,
d){var g,f,a=b[d];if(a&&typeof a==="object")for(g in a)Object.hasOwnProperty.call(a,g)&&(f=c(a,g),f!==void 0?a[g]=f:delete a[g]);return e.call(b,d,a)}var d;q.lastIndex=0;q.test(b)&&(b=b.replace(q,function(b){return"\\u"+("0000"+(+b.charCodeAt(0)).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+b+")"),typeof e===
"function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}}}());


(function($){

	function EaseYouTubePlayer(config){
		//default configurable variables
		var me = this,
			defaults = {
				user: 'benjrallen',
				maxResults: 8, //google limit is 50
				page: 1,
				playerId: 'easeYtPlayer',
				playerContId: 'easeVideoPlayer',
				thumbsContId: 'easeVideoBlocks',
				loadingMaskId: 'easeLoadingMask',
				thumbBlockClass: 'easeThumbBlock',
				imgContClass: 'easeImg',
				imgLinkClass: 'easeImgLink',
				imgClass: 'easeVideoThumb',
				titleEl: 'div',
				titleClass: 'easeThumbTitle',
				descClass: 'easeDesc',
				playClass: 'easePlay',
				playText: 'Play',
				playerCloseId: 'easeClose',
				playerCloseText: 'x',
				playerMaxHeight: 853,
				playerPercent: 0.8,
				paginateContId: 'easePagin',
				navClass: 'easeNav',
				navPrevText: '<< Prev',
				navNextText: 'Next >>',
				localCallUrl: window.location.href + 'js/videos.php'
			};
	
		for (var key in config) {
			defaults[key] = config[key] || defaults[key];
		}
	
		for (var key in defaults) {
			me[key] = defaults[key];
		}
	
		//non-configurable constants
		me.CONSTANT = 'constant';
		
		//for communicating with google api
		me.API_URL = 'https://gdata.youtube.com/feeds/api/videos';
		me.API_USER_UPLOADS = 'https://gdata.youtube.com/feeds/api/users/'+me.user+'/uploads';
//		me.ALT = 'json-in-script';
		me.ALT = 'jsonc';
		me.START_INDEX = null; //gets update in init
		me.TOTAL_ITEMS = null; //get set in json callback
		
		me.LOADING = true;
		me.loadTimeout = null;
		me.FIRST_LOAD = true;
		me.CURRENT_VIDEO = null;
		me.player = null;
		me.showPlayer = false;
		me.IS_LTE7 = $('.lte7').length;
		
		me.API_READY = false;
		me.PLAYER_READY = false;
		
		//me.init();
		me.init = function(){						
			//load the iFrameAPI
			me.loadIFrameAPI();
			
			//find playerCont and blocks cont
			me.playerCont = $('#'+me.playerContId);
			me.thumbsCont = $('#'+me.thumbsContId);
			//return alert if not there.
			if ( !me.playerCont.length || !me.thumbsCont.length )
				return alert('script won\'t run because video script has no place to put the player or the videos! please provide ids.');
			
			//position thumbsCont as relative (do it here in case container used elsewhere in site)
			me.thumbsCont.addClass('easeVideos'); //added for css
			
			//update start index
			me.updateStartIndex();
			
			//find and define playerClose button
			me.playerClose = $('#'+me.playerCloseId);
			//not there? create it.
			if (!me.playerClose.length)
				me.playerClose = $('<a />', { 
					id: me.playerCloseId, 
					text: me.playerCloseText, 
					title: 'Close video'
				}).insertBefore( me.playerCont );
						
			//attach the handler to the body
			$('body').click(me.onPlayerClose);
			//me.playerClose.click(me.onPlayerClose);
			
			//find and define loading mask
			me.loadingMask = $('#'+me.loadingMaskId);
			//if not there, create it
			if (!me.loadingMask.length)
				me.loadingMask = $('<div />', { id: me.loadingMaskId }).prependTo( me.thumbsCont );
			
			//show it in case it is hidden
			me.loadingMask.show();
			
			//attach window resize and document scroll paramaters
			$(window).resize(me.positionPlayer);
			$(document).scroll(me.positionPlayer);
			
			//get the data... running through our own little url getter script cause IE can't do cross-domain http requests.  PHP can, and it will send us back the data.
			return me.getUserVideos();
		};
		
		//loads the iframe api asynchrounously per google's examples
		me.loadIFrameAPI = function(){			
			var tag = document.createElement('script');
			tag.src = 'http://www.youtube.com/player_api';
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			//this inserts into the head, and calls a global function (onYouTubePlayerAPIReady)... defined and exposed below.
		};
		
		me.onYouTubePlayerAPIReady = function(){
			me.API_READY = true;
			return me.loadPlayer();
		};
		//set it global for the api load ~event to work
		window['onYouTubePlayerAPIReady'] = me.onYouTubePlayerAPIReady;		
		
		
		//TODO:  only use local php shiv if necessary (thinking IE here)
		me.getUserVideos = function(){
			var request = {
				apiUrl: me.API_USER_UPLOADS,
				alt: me.ALT, //alt is json-c, which somehow magically gets around parsing of json data and cross-domain origin restrictions... but ie can't natively handle it.
				'max-results': me.maxResults,
				'start-index': me.START_INDEX,
				v: 2 //api version 2... defaults to 1
			};
			//console.log( 'me.getUserVideos', request );
			
			//get the data... running through our own little url getter script cause IE can't do cross-domain http requests.  PHP can, and it will send us back the data, thus me.localCallUrl.
		 	return $.getJSON( me.localCallUrl, request, me.printVideoBlocks );
		};
		
		
		//used as callback on load user videos
		me.printVideoBlocks = function(json, status){
			
			me.LOADING = false;
			
			if (status === "success" && json.data.items) {
				//console.log('me.printVideoBlocks', json, status);
				
				//set total items
				me.TOTAL_ITEMS = json.data.totalItems;
				
				//remove container and paginating if existing already
				$('.easeCont, #'+me.paginateContId).remove();
				
				//make continer
				var cont = $('<div />', {}).addClass('easeCont').appendTo( me.thumbsCont );
				
				//make a block for each video returned
				for (var i=0, j=json.data.items.length; i<j; i++) {
					me.makeVideoBlock( json.data.items[i] ).appendTo( cont );
				}
				
				//make the pagination
				if ( json.data.totalItems > me.maxResults )
					me.makePagination().insertAfter( me.thumbsCont );
				
				//loaded!
				me.loadingMask.hide();
				
				//open first video in player
				if (me.FIRST_LOAD) {
					me.FIRST_LOAD = false;
					me.CURRENT_VIDEO = json.data.items[0];
					//me.loadPlayer();
				}
			}
		};
		
		me.loadPlayer = function(){
			//console.log('load player', me.CURRENT_VIDEO);
			if ( !me.API_READY || !me.CURRENT_VIDEO )
				return me.loadTimeout = setTimeout( me.loadPlayer, 10 );
						
			var dim = me.makePlayerDimensions();
			
		    return me.player = new YT.Player( me.playerContId, {
		    	height: dim.playerHeight,
		    	width: dim.playerWidth,
		    	videoId: me.CURRENT_VIDEO.id,
		    	events: {
		    		'onReady': me.onPlayerReady
		    	}
		    }); 
		};
		
		me.onPlayerReady = function(){
			me.PLAYER_READY = true;
		};
		
		//this is used to calculate the optimal dimensions for the player to be used in different places in this class
		me.makePlayerDimensions = function(){
			var bW = $(window).width(),
				bH = $(window).height(),
				pW = 0,
				pH = 0;
			
			var adjW = Math.floor( bW * me.playerPercent );
			
			//uses 16/9 ratio for the window
			if ( bW < bH ){
				pW = adjW;
			} else {
				pW = Math.floor( bH * me.playerPercent * 16/9 );
			}

			if ( pW > adjW )
				pW = adjW;
			
			if ( pW > me.playerMaxHeight )
				pW = me.playerMaxHeight;
			
			pH = Math.floor( 9/16 * pW );
			
			//console.log( 'player dimensions', bW, pW, bH, pH );
			
			return {
				baseWidth: bW,
				baseHeight: bH,
				playerWidth: pW,
				playerHeight: pH
			};
		};

		me.positionPlayer = function(){			
			//if ( me.player && me.showPlayer && me.PLAYER_READY ) {
			if ( me.player && me.showPlayer ) {
				var	dimensions = me.makePlayerDimensions(),
					bW = dimensions.baseWidth,
					bH = dimensions.baseHeight,
					pW = dimensions.playerWidth, //player width
					pH = dimensions.playerHeight;
				
				//console.log( 'position player', dimensions, bW, bH, pW );
								
				var left = Math.floor( (bW - pW) /2 ),
					top = Math.floor( $(document).scrollTop() + bH * 0.1 );
					
				//console.log( 'positionPlayer', $(me.player), me.player.getPlaybackQuality() );		
				//player.width( pW ).height( pH );
				me.player.setSize( pW, pH );
				//me.playerCont.width( pW ).height( pH );
				
				me.playerCont.css({ left: left, top: top });
				me.playerClose.css({ left: left + pW, top: top });
			}
		};
		
		me.loadVideo = function(){
			console.log( 'me.loadVideo', me.CURRENT_VIDEO, me.player, me.PLAYER_READY);
			if (me.player) {
			//if (me.player && me.PLAYER_READY) {
				me.showPlayer = true;
				me.player.loadVideoById( me.CURRENT_VIDEO.id, 0, 'large');
				me.positionPlayer();
				me.player.playVideo();
			}			
		};
		
		me.closePlayer = function(){
			if (me.player && me.showPlayer) {
				me.showPlayer = false;
				me.player.stopVideo();
								
				//$(me.player).css({ left: -10000 });
				me.playerCont.css({ left: -10000 });
				me.playerClose.css({ left: -10000 });
			}
		};
		
		me.makePagination = function(){
			var block = $('<div />', {
					id: me.paginateContId
				});
			
			//prev button
			$('<a />', { text: me.navPrevText }).addClass( me.navClass+' prev' ).click( me.onPaginClick ).appendTo( block );
			
			//next button
			$('<a />', { text: me.navNextText }).addClass( me.navClass+' next' ).click( me.onPaginClick ).appendTo( block );
			
			//text
			$('<span />', {
				text: 'Page '+me.page+' of '+Math.ceil( me.TOTAL_ITEMS / me.maxResults )
			}).appendTo( block );
			
			//clearfix
			$('<div />').addClass('clearfix').appendTo( block );
			
			return block;
		};
		
		//makes dom element with proper handlers?
		me.makeVideoBlock = function( item ){
			if ( !item ) return false;
			//console.log('me.makeVideoBlock', item );
			
			//create the block, attach data and click handler
			var block = $('<div />', {}).addClass(me.thumbBlockClass).data({ itemData: item }).click(me.onBlockPlay);
			
			if ( item.thumbnail.sqDefault ) {
				$('<div />', {
					html: '<a class="'+me.imgLinkClass+'"><img src="'+item.thumbnail.sqDefault+'" class="'+me.imgClass+'" /></a>'
				}).addClass( me.imgContClass ).appendTo( block );
			}
			
			if ( item.title ) {
				$('<'+me.titleEl+' />', {
					//html: '<a>'+item.title+'</a>'
					html: item.title
				}).addClass( me.titleClass ).appendTo( block );
			}
			
			if ( item.description ) {
				$('<div />', {
					html: item.description
				}).addClass( me.descClass ).appendTo( block );
			}
			
			$('<a />', {
				text: me.playText
			}).addClass( me.playClass )
			//.click( me.onBlockPlay )
			.appendTo( block );

			return block;
		};
		
		me.onPaginClick = function(e){
			//console.log('onPaginClick!', e, $(this));
			if (!me.LOADING) {
				
				if ( $(this).hasClass('next') ){
					//go next
					me.page === Math.ceil( me.TOTAL_ITEMS / me.maxResults ) ?
						me.page = 1 :
						me.page++;
				} else {
					//go prev
					me.page === 1 ?
						me.page = Math.ceil( me.TOTAL_ITEMS / me.maxResults ) :
						me.page--;
				}
				
				//update start index
				me.updateStartIndex();
	
				//show loadingMask case it is hidden
				me.loadingMask.show();
				
				me.LOADING = true;
				
				return me.getUserVideos();
			}
		};
		
		me.onPlayerClose = function(e){
			//console.log('onPlayerClose', e, $(this), e.target );
			//prevent click on player from closing the player
			if ( e.target !== me.player )
				me.closePlayer();	
		};
		
		me.onBlockPlay = function(e){
			//console.log('onBlockPlay!', e, $(this));
			e.stopPropagation();
			
			me.CURRENT_VIDEO = $(this).data('itemData');
			
			return ( !me.IS_LTE7 ? me.loadVideo() : window.location.href = me.CURRENT_VIDEO.player['default'] );			
		};
		
		me.updateStartIndex = function(){
			return me.START_INDEX = ( (me.page - 1) * me.maxResults + 1 );
		};
		
		me.init();
	};

	window['EaseYouTubePlayer'] = EaseYouTubePlayer;
	
})(jQuery);


(function($){
		
	//google maps custom integration
	function EaseMap(config){
		//default configurable variables
		var me = this,
			defaults = {
				zoom: 4,
				//center on Salina kansas for good full us view
				centerLat: 38.7902935,
				centerLng: -97.64023729999997,
				mapHeight: 500,
				fitMarkers: false, //fit all the markers on the map?  overrides centerLatLng and zoom
				contId: 'gmapCont',
				dataCont: '.distributor-wrap',
				dataBlock: '.distributor',
				dataAttr: 'dist-data',
				locationKey: 'distributor_street_address',
				fallbackLocationKey: 'distributor_mailing_address',
				zoomControlStyle: 'DEFAULT',
				streetViewControl: false,
				mapTypeId: 'ROADMAP',
				blocksAreClickable: false,
				directionsLink: false,
				globalInitID: 'EaseMapInit' //used to expose the setupConstants (used in init) function globally for googles async callback... change this to something unique for each instance running
			};
		for (var key in config) {
			defaults[key] = config[key] || defaults[key];
		}
		for (var key in defaults) {
			me[key] = defaults[key];
		}
		
		me.loadingGoogle = false;
		
		//here i am going to load the 
		me.setupConstants = function(){
			if ( typeof google !== 'undefined' ) {
				
				//remove global access to this setup function
				if ( window[me.globalInitID] )
					window[me.globalInitID] = undefined;
				
				//constants
				me.loadingGoogle = false;
				
				me.infowindow = new google.maps.InfoWindow();
				
				me.directionsService = new google.maps.DirectionsService();
				//me.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
				me.directionsDisplay = new google.maps.DirectionsRenderer();
				//keep that map out of it for now.
				me.directionsDisplay.setMap( null );
				//geocoder used to take address and convert it to latLng and make marker
				me.geocoder = new google.maps.Geocoder();
				me.center;
				me.cont;
				me.map;
				me.form;
				me.startAddy = '';
				me.endAddy = '';
				me.currentRoute = null;
				me.confirmBttn;
				//me.waypoints = [];
				me.dblclickListener;
			
				me.data = [];
				me.markers = [];
				
				return me.init();
				
			} else {
				//console.log('no google');
				
				if (!me.loadingGoogle) {
					me.loadingGoogle = true;

					//make this setup function available globally
					window[me.globalInitID] = me.setupConstants;
					
					var script = document.createElement("script");
					script.type = "text/javascript";
					script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback="+me.globalInitID;
					document.body.appendChild(script);
				}
				
				
			}
		};
		
		me.init = function(){
			//console.log('herro init', me, 'google', google);
			
			
			//gather data from page elements
			me.setupMarkerData();

			//console.log( 'data', me.data );
			
			//setup the map and initialize it.
			me.setupMap();

			//setup markers
			me.setupMarkers();
						
		};
		
		me.setupMap = function(){
			//find the container
			me.cont = document.getElementById( me.contId );
			
			//check dimensions
			if ( !$(me.cont).height() )
				$(me.cont).height( me.mapHeight );
			
			//console.log( 'me.cont', $(me.cont).width(), $(me.cont).height() );
			
			//set the google center
			me.center = new google.maps.LatLng( me.centerLat, me.centerLng );
			
			//get the map
			me.map = new google.maps.Map( me.cont, {
				center: me.center,
				zoom: me.zoom,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle[ me.zoomControlStyle ]
				},
				streetViewControl: me.streetViewControl,
				mapTypeId: google.maps.MapTypeId[ me.mapTypeId ]
			});

		};
		
		me.setupMarkers = function(){
			if ( me.data.length ) {
				//start bounds here for fitmarkers option later down
				var latLngBounds = new google.maps.LatLngBounds();
				
				//iterate through markers
				$.each(me.data, function(i){
					//console.log( i, this );

					var dataObj = this,
						address = dataObj[ me.locationKey ] || dataObj[ me.fallbackLocationKey ];
					
					if ( address ) {
					
						//console.log( 'address', address, me.stripTags( address ) );
						me.geocoder.geocode({
							
							address: me.stripTags( address )
							
						}, function(results, status){
							
							if (status === google.maps.GeocoderStatus.OK) {
								
								me.markers[i] = new google.maps.Marker({
									map: me.map,
									position: results[0].geometry.location,
									item: dataObj
								});
								
								//bind the click listener
								google.maps.event.addListener( me.markers[i], 'mousedown', me.handleMarkerClick );
								
								//attach click handler to block if set
								if ( me.blocksAreClickable ) {
								
									$(dataObj.DOM).attr({ markerIndex: i }).mousedown( me.handleBlockClick ).find('a').click(me.preventBlockLinks);
									
								}
																
								if (me.fitMarkers) {
									//extend the auto bounds
									latLngBounds.extend( me.markers[i].position );
									me.map.fitBounds( latLngBounds );
								}
								
								//console.log( dataObj.DOM );
							} else {
								//something went wrong.
								alert("Geocode was not successful for the following reason: " + status);
							}
						});
					}
					
				});
//				
//				//add an idle listener to fit the markers
//				if (me.fitMarkers) {
//					//console.log( 'BOUNDS', new google.maps.LatLngBounds() );
//					google.maps.event.addListenerOnce(me.map, 'idle', function(){
//						//console.log( 'IDLE', me.markers)
//						var latLngBounds = new google.maps.LatLngBounds();
//						for ( var l=0; l<me.markers.length; l++ ){
//							latLngBounds.extend( me.markers[l].position );
//						}
//						me.map.fitBounds( latLngBounds );
//						
//					});
//				}
			}
		};
		
		me.preventBlockLinks = function(e){
			e.preventDefault();
		};
		
		me.handleBlockClick = function(e){
			//find associated marker, and setup the coords like google does
			var marker = me.markers[ $(this).attr('markerIndex') ],
				coords = { latLng: marker.position };
			
			//console.log('me.handleBlockClick', e, this, marker, coords);
			return me.handleMarkerClick.apply( marker, [coords] );
		};
		
		me.handleMarkerClick = function(coords){
			//console.log('me.handleMarkerClick', coords, this);

			var content = '<div class="mapInfoDom">'+$(this.item.DOM).html();
			
			
			//here is where we print out a directions link
			if (me.directionsLink) {
				var addy = this.item[me.locationKey].replace(/ /g,'+').replace(/\n/g,',+'),
					//dUrl = 'http://maps.google.com/maps?saddr=&daddr='+addy+'&z=14'
					dUrl = 'http://maps.google.com/maps?saddr=&daddr='+addy
				
				//console.log( addy );
				
				content += '<a class="directionsLink" href="'+dUrl+'" title="Get directions to this site" target="_blank">Get Driving Directions</a>';
			}
			
			content += '</div>';
			
			//console.log( this.item.DOM );
			
			me.infowindow.setContent( content );				
									
			me.infowindow.open(me.map, this);
			
		};


		me.setupMarkerData = function(){
			//dataBlock supplied in config
			return $(me.dataCont).find(me.dataBlock).each(function(){
				//console.log( $(this).attr( me.dataAttr ) );
				var item = JSON.parse( $(this).attr( me.dataAttr ) );
				item.DOM = this;
				me.data.push( item );
			});			
		};
		
		//used to clean the address html for google.
		me.stripTags = function(s){
			//s = String
			if (typeof s !== 'string')
				return false;
			return s.replace(/<([^>]+)>/g,'').replace(/\n|\r/g,' ');
			//return s.replace(/\\n/g,'');
		};
		
		
		//following block not in use for my resume site
		/*
		me.getRoute = function(){
			//console.log( 'me.getRoute', me.startAddy, me.endAddy, me.waypoints );
			me.directionsService.route({
				//origin: ttp.geo.userLocation,
				origin: me.startAddy,
				destination: me.endAddy,
				travelMode: google.maps.TravelMode.DRIVING,
				optimizeWaypoints: true,
				waypoints: me.waypoints
			}, me.directionsServiceCallback);
		};
		me.directionsServiceCallback = function(response, status){
			if (status == google.maps.DirectionsStatus.OK) {
				me.currentRoute = response.routes;
				//disable double click zoom when route is showing
				me.map.setOptions({ disableDoubleClickZoom: true });
				//console.log('directions gotten', response, me.currentRoute);
				//make a confirm button
				me.printConfirmBttn();
				//display the directions on the map
				me.directionsDisplay.setMap( me.map );
				me.directionsDisplay.setDirections(response);
			} else {
				//the directions couldn't be found for some reason, most likely cause there is no route, but could be server error
				//too many waypoints?
				if ( status == 'MAX_WAYPOINTS_EXCEEDED' ) {
					me.waypoints.pop();
					alert('Sorry, but you have provided as many waypoints as we can handle');
				} else {
					alert('Something went wrong fetching the directions: ' + status);
				}
				//me.currentRoute = null;
				//me.map.setOptions({ disableDoubleClickZoom: false });
			}
		};
		me.printConfirmBttn = function(){
			if ( !me.confirmBttn ) {
				me.confirmBttn = $('<button />', { id: 'add_commute_confirm', text: 'Route is correct' })
					.click(me.confirmClick)
					.insertBefore( me.cont );
			} else {
				me.confirmBttn.show();
			}
		};
		me.confirmClick = function(){
			//everything is alright, so submit the form
			//console.log('confirmation clicked', me.form.serialize(), me.waypoints );
			if ( me.waypoints.length )
				me.form.find('[name="waypoints"]').val( JSON.stringify( me.waypoints ) );
	              $.post(window.location.href, $('#add_commute_form').serialize())
		};
		*/
		
		me.setupConstants();
		return me;
	}
	
	window['EaseMap'] = EaseMap;
	
})(jQuery);

/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.5.0
 *
 */
(function($) {

    $.fn.lazyload = function(options) {
        var settings = {
            threshold    : 0,
            failurelimit : 0,
            event        : "scroll",
            effect       : "show",
            container    : window
        };
                
        if(options) {
            $.extend(settings, options);
        }

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        var elements = this;
        if ("scroll" == settings.event) {
            $(settings.container).bind("scroll", function(event) {
                
                var counter = 0;
                elements.each(function() {
                    if ($.abovethetop(this, settings) ||
                        $.leftofbegin(this, settings)) {
                            /* Nothing. */
                    } else if (!$.belowthefold(this, settings) &&
                        !$.rightoffold(this, settings)) {
                            $(this).trigger("appear");
                    } else {
                        if (counter++ > settings.failurelimit) {
                            return false;
                        }
                    }
                });
                /* Remove image from array so it is not looped next time. */
                var temp = $.grep(elements, function(element) {
                    return !element.loaded;
                });
                elements = $(temp);
            });
        }
        
        this.each(function() {
            var self = this;
            
            /* Save original only if it is not defined in HTML. */
            if (undefined == $(self).attr("original")) {
                $(self).attr("original", $(self).attr("src"));     
            }

            if ("scroll" != settings.event || 
                    undefined == $(self).attr("src") || 
                    settings.placeholder == $(self).attr("src") || 
                    ($.abovethetop(self, settings) ||
                     $.leftofbegin(self, settings) || 
                     $.belowthefold(self, settings) || 
                     $.rightoffold(self, settings) )) {
                        
                if (settings.placeholder) {
                    $(self).attr("src", settings.placeholder);      
                } else {
                    $(self).removeAttr("src");
                }
                self.loaded = false;
            } else {
                self.loaded = true;
            }
            
            /* When appear is triggered load original image. */
            $(self).one("appear", function() {
                if (!this.loaded) {
                    $("<img />")
                        .bind("load", function() {
                            $(self)
                                .hide()
                                .attr("src", $(self).attr("original"))
                                [settings.effect](settings.effectspeed);
                            self.loaded = true;
                        })
                        .attr("src", $(self).attr("original"));
                };
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if ("scroll" != settings.event) {
                $(self).bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $(self).trigger("appear");
                    }
                });
            }
        });
        
        /* Force initial check if images should appear. */
        $(settings.container).trigger(settings.event);
        
        return this;

    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $(element).offset().top - settings.threshold;
    };
    
    $.rightoffold = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).width() + $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left + $(settings.container).width();
        }
        return fold <= $(element).offset().left - settings.threshold;
    };
        
    $.abovethetop = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top;
        }
        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left;
        }
        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };
    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() */

    $.extend($.expr[':'], {
        "below-the-fold" : "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold" : "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold"  : "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold"   : "!$.rightoffold(a, {threshold : 0, container: window})"
    });
    
})(jQuery);



(function($){
	function SyndicatedSubwayTiles( config ){
		var me = this,
			defaults = {
				url: 'http://subwaytiles.bennya.com',
				wrapId: 'content',
				count: 1,
				speed: 15,
				loadFromBottom: 5000, //px from bottom of container before loading next post
				navEl: 'nav#jsui',
				placeholderImage: '/images/transparent.gif'
			};

		for (var key in config) {
		    defaults[key] = config[key] || defaults[key];
		}

		for (var key in defaults) {
		    me[key] = defaults[key];
		}

		//CONSTANTS
		// me.data;
		// me.currentPost = 0;
		//me.digesting = true;
		me.nav;
		me.navUl;
		me.wrap;
		me.timeout;
		me.placeholder = '';
		me.page = 1;
		me.getting = false;
		
		me.init = function(){
			
			me.placeholder = me.url + me.placeholderImage;
			me.nav = $(me.navEl);
			me.navUl = me.nav.find('#posts');
			
			me.nav.find('#menuToggle').click(function(){
				me.navUl.slideToggle(200);
			});
			
			if ( !$('#'+me.wrapId).length ) {
				me.wrap = $('<div />', { id: me.wrapId }).appendTo('body');
			} else {
				me.wrap = $('#'+me.wrapId)
			}
			
			me.getPosts();

			//a form of 'infinite' scrolling
			$(me.wrap).parent().scroll(function(e){

				if (!me.getting){
					if ( $(this).scrollTop() > $(me.wrap).height() - me.loadFromBottom ) {
						me.getPosts();	
					}
				}

			});
		};

		me.getPosts = function(){
			//stop multiple requests
			me.getting = true;
			
			var request = '?json=get_recent_posts&';
				me.count > 0 ? request += 'count='+me.count+'&' : $.noop();
				//request += 'page='+me.page+'&';
				request += 'page='+me.page;
			
			//console.log('getting', me.url + request )
			
			$.getJSON( me.url + request, function(json){
				//console.log('request success', json);
				
				if( json.posts.length )
					$.each( json.posts, me.printPost );
				
				me.page += 1;
			});

		};

		me.printPost = function(i, post){
			//console.log( 'me.printPost', i, post);
            
			var cont = $('<span />', { id: post.slug }).appendTo(me.wrap);
            
			$('<a />', {href: '#'+post.slug})
            	.html( post.title )
            	.appendTo( me.navUl )
            	.wrap('<li>');

			var k = 0;
			
			me.timeoutPrint( k, cont, post );
		};
		
		me.timeoutPrint = function( l, cont, post ){
			
			if ( l < post.attachments.length ) {
				var attachment = post.attachments[l];
				
				if ( attachment.mime_type.indexOf('image') > -1 ){
                	var full = attachment.images.full;
					
					//console.log('making image', l, post.attachments.length);
					
					$('<img />', {
						src: full.url,
						height: full.height,
						width: full.width
					}).appendTo( cont )
					.lazyload({
			    	 	//placeholder : me.placeholder,
			    	 	effect      : "fadeIn",
						container	: me.wrap.parent()
			    	});
				}
				//and call itself again.
				me.timeout = setTimeout(function(){ me.timeoutPrint(l+1, cont, post); }, me.speed );
			} else {
				clearTimeout( me.timeout );
				me.getting = false;
			}
			
		};

		me.init();

		return me;
	}

	window['SyndicatedSubwayTiles'] = SyndicatedSubwayTiles;
	
})(jQuery);