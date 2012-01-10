<!DOCTYPE html>
<!--[if lt IE 7 ]><html dir="ltr" lang="en-US" class="no-js ie ie6 lte7 lte8 lte9"><![endif]-->
<!--[if IE 7 ]><html dir="ltr" lang="en-US" class="no-js ie ie7 lte7 lte8 lte9"><![endif]-->
<!--[if IE 8 ]><html dir="ltr" lang="en-US" class="no-js ie ie8 lte8 lte9"><![endif]-->
<!--[if IE 9 ]><html dir="ltr" lang="en-US" class="no-js notIE ie ie9 lte9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html dir="ltr" lang="en-US" class="notIE no-js"><!--<![endif]-->
  <head>
    <meta charset='utf-8' />
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible' />
    <title></title>
    <meta content='' name='description' />
    <meta content='' name='author' />
    <meta content='width=device-width, initial-scale=1.0' name='viewport' />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,600,700,800,300|Belgrano' rel='stylesheet' type='text/css'>
    <link href='css/style.css?v=1' media='all' rel='stylesheet' />
    <script src='js/modernizr.min.js'></script>
	<script type="text/javascript">
		Modernizr.load([
			{
				load: ['//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js'],
				complete: function(){
					//return window.jQuery || Modernizr.load('js/jquery.min.js');
					return window.jQuery || document.write("<script src='js/jquery.min.js'>\x3C/script>");
				}
			},
			{ load: 'js/plugins.js?v=1' },
			{ load: 'js/script.js?v=1' }
		]);
	</script>
  </head>
  <body>
		<div id="subwayTilesWrap">
		  <span id="closeSubwayTiles">x<small>(close Subway Tiles)</small></span>
		  <nav id="jsui">
      	<header>
      		<h4>Subway Tiles</h4>
      	</header>

      	<ul id="posts">
      		<li><a href="#tilesEnd">#end</a></li>
      	</ul>

      	<div id="menuToggle">toggle</div>

      </nav>
		  <div id="subwayTiles"></div>
		  
		  <div id="tilesEnd"></div>
    </div>
    
    <div id='container'>
      
		<header class="wrap" id="header">
			<h1><a id="logo">Benjamin Allen</a></h1>
		</header>
      
		<nav id="access">
			<ul class="wrap menu">
				<li><a href="#who" title="The History">Resume</a></li>
				<li><a href="#work" title="The Goods">Work Examples</a></li>
				<li><a href="#tiles" title="Subway Tiles">Photos</a></li>
				<li><a href="#videos" title="Videos">Videos</a></li>
				<li><a href="#map" title="Map">Map</a></li>
			</ul>
		</nav>
		
		<div class="clearfix"></div>
		
		<div id='main' role='main' class="wrap">

      <article id="who" class="entry">
				<header><h2>Who</h2></header>
				<section class="content">
				  <p class="top">A front-end web developer working from Tulsa, Oklahoma.</p>
					<a id="resumeLink" href="files/Ben_Allen-Resume_Oct_2011.pdf"><span class="line1">Download</span> <span class="line2">My Resume</span></a>
					<p>A few highlights: Object Oriented Javascript, AJAX, PHP, HTML5, CSS3, jQuery, Sencha, </p>
				</section>
			</article>

      <article id="work" class="entry">
				<header><h2>Work</h2></header>
				<section class="content">
					<p>Here are some sites that I have recently developed.</p>
					
					<div class="left sitelist">
					  <h3>Wordpress Sites</h3>
  					<ul>
              <li><a href="http://gurustudev.com/~ben/palmer/" title="Palmer Continuum of Care, Inc.">Palmer Continuum of Care, Inc.</a></li>
              <li><a href="http://gurustudev.com/~ben/educare/" title="Tulsa Educare">Tulsa Educare</a></li>
              <li><a href="http://carnivale.mhat.org/" title="Carnivale">Carnivale - Mental Health Association in Tulsa</a></li>
              <li><a href="http://glowtulsa.com/" title="Glow Tulsa">Glow Tulsa</a></li>
              <li><a href="http://gurustudev.com/~ben/gurustufoundation/" title="Gurustu Foundation">Gurustu Foundation</a></li>
              <li><a href="http://gurustudev.com/~ben/owasso/" title="Owasso Community Resources">Owasso Community Resources</a></li>
              <li><a href="http://emergencyinfantservices.org" title="Emergency Infant Services">Emergency Infant Services</a></li>
              <li><a href="http://gurustudev.com/~ben/ignite/" title="Ignite Tulsa">Ignite Tulsa</a></li>
              <li><a href="http://twinfoods.com/" title="Granny's Bacon Drippings">Granny's Bacon Drippings</a></li>
              <li><a href="http://glistendental.com/" title="Glisten Dental">Glisten Dental</a></li>
            </ul>
          </div>
          
					<div class="right sitelist">
            <h3>Sencha Touch Mobile Applications</h3>
            <ul>
              <li><a href="http://turntulsapink.com" title="Turn Tulsa Pink">Turn Tulsa Pink</a></li>
              <li><a href="http://gurustudev.com/~ben/ttpsubwaytiles" title="TTP Subway Tiles">The Turn Tulsa Pink app with a fuller Flickr photo Gallery</a></li>
              <li><a href="http://mayfestmobile.com" title="Mayfest Mobile Map & Event Guide">Mayfest Mobile Map & Event Guide</a></li>
            </ul>
          </div>
          
          <div class="clearfix"></div>
				</section>
			</article>

      <article id="tiles" class="entry">
				<header><h2>Photos</h2></header>
				<section class="content">
					<p>I have a very simple Wordpress backend set up to act as a repository for pictures I've come across online and like to use when developing anything that deals with images.  Use the link below to access it.</p>
          <p>As an added bonus, if you are on a Webkit browser, I'll just load up the whole interface right here on page for you.</p>
					<a id="loadSubwayTiles" href="http://subwaytiles.bennya.com" target="_blank">Load Subway Tiles</a>
				</section>
			</article>

      <article id="videos" class="entry">
				<header><h2>Videos</h2></header>
				<section class="content">
				  <div class="text">
					  <p>Final Cut and I go way back.</p>
					  <p><small>*Crappy cameras and I go even further back.</small></p>
					</div>
					
					<div id="easeVideoPlayer"></div>

          <div id="videoBlocks">
        	  <div id="easeVideoBlocks" class="easeVideos"></div>
				  </div>
				  <div class="clearfix"></div>
				</section>
			</article>

      <article id="map" class="entry">
				<header><h2>Where I've been.</h2></header>
				<section class="content">

          <div id="gmapCont"></div>
          
          <div class="mapList">
          <?php
            
            $mapList = array(
              'okc' => array(
                'name' => 'Oklahoma City, Oklahoma',
                'when' => 'Born and raised',
                'location' => 'Oklahoma City, Oklahoma',
                'future' => false
              ),
              'tulsa' => array(
                'name' => 'Tulsa, Oklahoma',
                'when' => 'University',
                'location' => 'Tulsa, Oklahoma',
                'future' => false
              ),
              'london' => array(
                'name' => 'London, England',
                'when' => '2006',
                'location' => 'Redhill Street, London, England, United Kingdom',
                'future' => false
              ),
              'taipei' => array(
                'name' => 'Taipei, Taiwan',
                'when' => '2007-2008',
                'location' => '148 Section 3, Luósīfú Road, Jhongjheng District, Taiwan',
                'future' => false
              ),
              'amiens' => array(
                'name' => 'Amiens, France',
                'when' => '2008-2009',
                'location' => '44 Rue Léon Dupontreué, Amiens, Picardy, France',
                'future' => false
              ),
              'san_francisco' => array(
                'name' => 'San Francisco, California',
                'when' => '2009-2010',
                'location' => '2945 Mission Street, San Francisco, California',
                'future' => false
              // ),
              // 'montreal' => array(
              //   'name' => 'Montréal, Québec',
              //   'location' => '3506 Boulevard de Maisonneuve Ouest, Quebec, Canada'
              )
              
            );
          
          //print_r( $mapList );
          
          foreach ( $mapList as $place ) {
            
            echo '<div class="mapItem">';
              echo '<div class="ease-data">'.json_encode($place).'</div>';
            
            if ( $place['name'] )
              echo '<h5 class="placeName">'.$place['name'].'</h5>';
            
            if ( $place['when'] )
              echo '<span class="placeWhen">'.$place['when'].'</span>';
            
            echo '</div>';
          }
              			
    			?>
    			</div>
          
          <div class="clearfix"></div>
				</section>
			</article>
      
      
    </div>
      
		<footer class="wrap" id="footer">
			
		</footer>
    </div>
    <script type='text/javascript'>
      //<![CDATA[
        var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"],["_trackPageLoadTime"]];
        (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
        g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
        s.parentNode.insertBefore(g,s)}(document,"script"));
      //]]>
    </script>
  </body>
</html>
