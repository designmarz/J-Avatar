/*jslint  devel: true, nomen: true, indent: 4, maxerr: 50 */
$(document).ready(function() {





// eye1
// sWidth 200 - sHeight 200
// SX 50 - SY 197
$('#canvas_main').drawImage({
draggable: true,
	visible: true,
	layer: true,
	name: 'slider_crop',
  	source: 'img/imgSprite.png',
  	x: 150, y: 150,
  	sWidth: 180,
  	sHeight: 200,
  	sx: 180, sy: 75,
  	index: 500,
  	cropFromCenter: false

}).drawImage({
  // mouth1
// sWidth 200 - sHeight 200
// SX 2091 - SY 197
draggable: true,
	visible: true,
	layer: true,
	name: 'mouth',
  	source: 'img/imgSprite.png',
  	x: 150, y: 150,
  	sWidth: 200,
  	sHeight: 200,
  	sx: 2091, sy: 197,
  	index: 30,
  	cropFromCenter: false

}).drawImage({
draggable: true,
	visible: true,
	layer: true,
	name: 'eyes',
  	source: 'img/imgSprite.png',
  	x: 300, y: 220,
  	sWidth: 200,
  	sHeight: 200,
  	sx: 50, sy: 197,
  	index: 10,
  	cropFromCenter: false

}).drawImage({
	
	// nose2
	// sWidth 200 - sHeight 200
	// SX 1517 - SY 197
draggable: true,
	visible: false,
	layer: true,
	name: 'nose',
  	source: 'img/imgSprite.png',
  	x: 320, y: 220,
  	sWidth: 200,
  	sHeight: 200,
  	sx: 1517, sy: 197,
  	index: 20,
  	cropFromCenter: false,

}).drawImage({
// ear1
// sWidth 200 - sHeight 200
// SX 2701 - SY 197
draggable: true,
	visible: true,
  	layer: true,
  	name: 'earL',
  	source: 'img/imgSprite.png',
  	x: 300, y: 220,
  	sWidth: 200,
  	sHeight: 200,
  	sx: 2701, sy: 197,
  	index: 1,
  	cropFromCenter: false

}).drawImage({

draggable: true,
	visible: false,
  	layer: true,
  	name: 'earR',
  	source: 'img/imgSprite.png',
  	x: 300, y: 220,
  	sWidth: 200,
  	sHeight: 200,
  	sx: 50, sy: 197,
  	index: 1,
  	cropFromCenter: false

}).drawImage({

	visible: true,
  	layer: true,
  	name: 'body',
  	source: 'img/body.png',
  	x: 300, y: 350,
  	// sWidth: 302,
  	// sHeight: 326,
  	// sx: 617, sy: 807,
  	index: 0,
  	cropFromCenter: false

})
.drawLayers();




$('#canvas_preview').drawImage({
	visible: false,
  source: 'img/imgSprite.png',
  x: 1500, y: 100,
  layer: true,
  index: 0
})
.drawLine({
	layer: true,
  strokeStyle: '#D00808',
  strokeWidth: 2,
  x1: 1400, y1: 0,
  x2: 1400, y2: 200
}).drawLayers();





// x/y cropping cords //
//
// eye1
// sWidth 200 - sHeight 200
// SX 50 - SY 197

// eye2
// sWidth 200 - sHeight 200
// SX 314 - SY 197

// eye3
// sWidth 200 - sHeight 200
// SX 505 - SY 197

// eye4
// sWidth 200 - sHeight 200
// SX 694 - SY 197

// eye5
// sWidth 200 - sHeight 200
// SX 900 - SY 197

// eye6
// sWidth 200 - sHeight 200
// SX 1101 - SY 197

// nose1
// sWidth 200 - sHeight 200
// SX 1303 - SY 197

// nose2
// sWidth 200 - sHeight 200
// SX 1517 - SY 197

// nose3
// sWidth 200 - sHeight 200
// SX 1701 - SY 197

// nose4
// sWidth 200 - sHeight 200
// SX 1896 - SY 197

// mouth1
// sWidth 200 - sHeight 200
// SX 2091 - SY 197

// mouth2
// sWidth 200 - sHeight 200
// SX 2317 - SY 197

// mouth3
// sWidth 200 - sHeight 200
// SX 2505 - SY 197

// ear1
// sWidth 200 - sHeight 200
// SX 2701 - SY 197

// ear2
// sWidth 386 - sHeight 202
// SX 2800 - SY 609
//

// Begin Layer Control //

  $('#ck1').click(function() {
    if ($('#canvas_main').getLayer('eyes').visible === false) {
      $('#canvas_main').getLayer('eyes').visible = true;
    } else if ($('#canvas_main').getLayer('eyes').visible === true){
      $('#canvas_main').getLayer('eyes').visible = false;
    }
    $('#canvas_main').drawLayers();
  });

   $('#ck2').click(function() {
    if ($('#canvas_main').getLayer('nose').visible === false) {
      $('#canvas_main').getLayer('nose').visible = true;
    } else if ($('#canvas_main').getLayer('nose').visible === true){
      $('#canvas_main').getLayer('nose').visible = false;
    }
    $('#canvas_main').drawLayers();
  });
  
   $('#ck3').click(function() {
    if ($('#canvas_main').getLayer('mouth').visible === false) {
      $('#canvas_main').getLayer('mouth').visible = true;
    } else if ($('#canvas_main').getLayer('mouth').visible === true){
      $('#canvas_main').getLayer('mouth').visible = false;
    }
    $('#canvas_main').drawLayers();
  });
  

// End Layer Control //


// Begin Slider //
 $(function() {
    $( "#slider-range1" ).slider({
      min: 50,
      max: 600,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
      	$('#canvas_main').getLayer('slider_crop').sWidth = ui.values[ 0 ];
      	// $('#canvas_main').getLayer('slider_crop').sHeight = ui.values[ 1 ];
        $( "#amount1" ).val( "sWidth " + ui.values[ 0 ] + " - sHeight " + ui.values[ 1 ] );
        $('#canvas_main').drawLayers();
      }
    });
    $( "#amount1" ).val( "sWidth "+ $( "#slider-range1" ).slider( "values", 0 ) + " - sHeight " + $( "#slider-range1" ).slider( "values", 1 ) );


    $( "#slider-range2" ).slider({
      min: 50,
      max: 2800,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
      	$('#canvas_main').getLayer('slider_crop').sx = ui.values[ 0 ];
      	$('#canvas_main').getLayer('slider_crop').sy = ui.values[ 1 ];
        $( "#amount2" ).val("SX " +  ui.values[ 0 ] + " - SY " + ui.values[ 1 ] );
        $('#canvas_main').drawLayers();
      }
    });
    $( "#amount2" ).val(  "SX " + $( "#slider-range2" ).slider( "values", 0 ) + " - SY " + $( "#slider-range2" ).slider( "values", 1 ) );
  });
// End Slider //


// Begin Debugging Area //

	for (var i = 0; i < 16; i++) {

		$('#canvas_preview').drawLine({
			layer: true,
		  strokeStyle: '#D00808',
		  strokeWidth: 2,
		  x1: (200*[i]), y1: 0,
		  x2: (200*[i]), y2: 200
		}).drawLayers();

	}

	$('#print_btn').click(function() {
	  var x = $( "#amount1" ).val( );
	  var y = $( "#amount2" ).val( );

	  console.log(prompt("Layer Name"));
	  console.log(x);
	  console.log(y);
	});

	function getPosition(event)
	{
	  var x = event.offsetX;
	  var y = event.offsetY;
	  // x -= canvas.offsetLeft;
	  // y -= canvas.offsetTop;
	  console.log("x:" + x + " y:" + y);
	}
	var canvas = document.getElementById("canvas_preview");
	canvas.addEventListener("mousedown", getPosition, false);

// End Debugging Area //
$('#canvas_main').drawLayers();
});