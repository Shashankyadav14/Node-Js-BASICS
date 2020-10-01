const five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var rotary = new five.Sensor("A1");

  rotary.scale(0,555).on('change',function(){
      console.log(this.value)
  })
});