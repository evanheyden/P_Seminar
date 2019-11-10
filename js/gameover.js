/*var Caverunner = Caverunner || {};
gameoverState = function() {};
gameoverState.prototype = {*/
var gameoverState = {
  create: function() {
    var gameoverLabel = game.add.text(80, 80, "Game Over", {font: "50px Arial", fill: ""});

    var rkey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    rkey.onDown.addOnce(this.restart, this);
  },
restart: function() {
    game.state.start("menu");
  }
};
