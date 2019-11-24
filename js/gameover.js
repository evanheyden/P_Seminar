/*var Caverunner = Caverunner || {};
gameoverState = function() {};
gameoverState.prototype = {*/
var gameoverState = {
  create: function() {
    var gameoverLabel = game.add.text(200, 200, "Game Over", {font: "50px Arial", fill: "#fcbc38"});
    var retryLabel = game.add.text(250, 280, 'Press R to retry', {font: '40px Arial', fill: '#fcbc38'});
    var rkey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    rkey.onDown.addOnce(this.restart, this);
  },
restart: function() {
    game.state.start("menu");
  },
};
