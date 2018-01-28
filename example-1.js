/* © 2009 ROBO Design
 * http://www.robodesign.ro
 */

// Keep everything in anonymous function, called on window load.
if(window.addEventListener) {
window.addEventListener('load', function () {
  var canvas, context;

  // Initialization sequence.
  function init () {
    // Find the canvas element.
    canvas = document.getElementById('imageView');
    if (!canvas) {
      alert('Error: I cannot find the canvas element!');
      return;
    }

    if (!canvas.getContext) {
      alert('Error: no canvas.getContext!');
      return;
    }

    // Get the 2D canvas context.
    context = canvas.getContext('2d');
    if (!context) {
      alert('Error: failed to getContext!');
      return;
    }

    // Attach the mousemove event handler.
  }
  var started = false;
  setInterval(function(prevx, prevy) {
    // method to be executed;
    var x, y;
    // var prevx, prevy;
    // var diffx = x - prevx;
    // var diffy = y - prevy;
    // // Get the mouse position relative to the canvas element.
    // if (ev.layerX || ev.layerX == 0) { // Firefox
    //   x = ev.layerX;
    //   y = ev.layerY;
    // } else if (ev.offsetX || ev.offsetX == 0) { // Opera
    //   x = ev.offsetX;
    //   y = ev.offsetY;
    // }
    strength = parseFloat(document.getElementById('pinchStrength').innerText);
    extended = document.getElementById('extended').innerText;
    x = parseInt(document.getElementById('posDataX').innerText) * - 8;
    y = parseInt(document.getElementById('posDataY').innerText)* 8;
    z = parseInt(document.getElementById('posDataZ').innerText);
    document.getElementById('parsed').innerHTML = "<h1>" + x + " " + y + " " + z + " " + extended + "</h1>";
    // The event handler works like a drawing pencil which tracks the mouse
    // movements. We start drawing a path made up of lines.
  if (strength > 0.8){
    if (!started) {

        context.beginPath();
        context.lineWidth="5";
        context.moveTo(x, y);
        started = true;
      } else {
        context.lineTo(x, y);
        context.stroke();
      }
    }
    else {
      context.beginPath();
      context.lineWidth="5";
      context.moveTo(x,y);
    }

    //   if(extended == "false"){
    //     context.beginPath();
    //     context.moveTo(x, y);
    //     started = true;
    //   }
    //
    // if (z > 400) {
    //   if (started) {
    //     context.lineTo(x, y);
    //     context.stroke();
    //   }
    // }
    //
    // if (extended == "true"){
    //     if (started){
    //       started = false;
    //     }
    //   }

  }, 50);
  init();
}, false); }

// vim:set spell spl=en fo=wan1croql tw=80 ts=2 sw=2 sts=2 sta et ai cin fenc=utf-8 ff=unix:
