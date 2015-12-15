/*jslint  devel: true, nomen: true, indent: 4, maxerr: 50 */
$(document).ready(function() {


$('#canvas_main').drawImage({
	 visible: false,
  layer: true,
  name: 'head',
  source: 'img/imgSprite.png',
  x: 150, y: 150,
  sWidth: 250,
  sHeight: 200,
  sx: 116, sy: 75,
  cropFromCenter: false
}).drawImage({
	 visible: true,
  layer: true,
  name: 'eyes',
  source: 'img/imgSprite.png',
  x: 150, y: 150,
  sWidth: 180,
  sHeight: 200,
  sx: 180, sy: 75,
  cropFromCenter: false
}).drawImage({
	 visible: false,
  layer: true,
  name: 'eyes2',
  source: 'img/imgSprite.png',
  x: 300, y: 300,
  sWidth: 164,
  sHeight: 200,
  sx: 192, sy: 312,
  index: 10,
  cropFromCenter: false
}).drawImage({
	 visible: false,
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



for (var i = 0; i < 18; i++) {

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
  var x = event.x;
  var y = event.y;


  // x -= canvas.offsetLeft;
  // y -= canvas.offsetTop;

  console.log("x:" + x + " y:" + y);
}
var canvas = document.getElementById("canvas_preview");
canvas.addEventListener("mousedown", getPosition, false);


 $(function() {
    $( "#slider-range1" ).slider({
      min: 50,
      max: 600,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
      	$('#canvas_main').getLayer('eyes').sWidth = ui.values[ 0 ];
      	// $('#canvas_main').getLayer('eyes').sHeight = ui.values[ 1 ];
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
      	$('#canvas_main').getLayer('eyes').sx = ui.values[ 0 ];
      	$('#canvas_main').getLayer('eyes').sy = ui.values[ 1 ];
        $( "#amount2" ).val("SX " +  ui.values[ 0 ] + " - SY " + ui.values[ 1 ] );
        $('#canvas_main').drawLayers();
      }
    });
    $( "#amount2" ).val(  "SX " + $( "#slider-range2" ).slider( "values", 0 ) + " - SY " + $( "#slider-range2" ).slider( "values", 1 ) );
  });


});