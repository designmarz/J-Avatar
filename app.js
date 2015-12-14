$(document).ready(function() {




  
$('canvas').drawImage({
  layer: true,
  name: 'head',
  source: 'img/imgSource.png',
  x: 150, y: 150,
  sWidth: 250,
  sHeight: 250,
  sx: 116, sy: 75,
  cropFromCenter: false
}).drawImage({
  layer: true,
  name: 'eyes',
  source: 'img/imgSource.png',
  x: 350, y: 350,
  sWidth: 180,
  sHeight: 100,
  sx: 180, sy: 75,
  cropFromCenter: false
}).drawLayers();


 $(function() {
    $( "#slider-range1" ).slider({
      min: 0,
      max: 771,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
      	$('canvas').getLayer('eyes').sWidth = ui.values[ 0 ];
      	$('canvas').getLayer('eyes').sHeight = ui.values[ 1 ];
        $( "#amount1" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        $('canvas').drawLayers();
      }
    });
    $( "#amount1" ).val(  $( "#slider-range1" ).slider( "values", 0 ) + " - " + $( "#slider-range1" ).slider( "values", 1 ) );


    $( "#slider-range2" ).slider({
      min: 0,
      max: 771,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
      	$('canvas').getLayer('eyes').sx = ui.values[ 0 ];
      	$('canvas').getLayer('eyes').sy = ui.values[ 1 ];
        $( "#amount2" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        $('canvas').drawLayers();
      }
    });
    $( "#amount2" ).val(  $( "#slider-range2" ).slider( "values", 0 ) + " - " + $( "#slider-range2" ).slider( "values", 1 ) );
  });


});