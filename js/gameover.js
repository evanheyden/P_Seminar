/*var Caverunner = Caverunner || {};
gameoverState = function() {};
gameoverState.prototype = {*/
var gameoverState = {
  create: function() {
    var backOver = game.add.image(0, 0, 'backgroundgameover');
    var gameoverLabel = game.add.text(140, 200, "Game Over", {font: "100px Arial", fontWeight: 'bold', fill: "#FF0000"});

    var restartButton = this.game.add.button(370, 300, 'restartbutton', this.restart, this, 1, 0);
    var menuButton = this.game.add.button(370, 380, 'menubutton', this.backto, this, 1, 0);

  },
restart: function() {
    game.state.start("play");
  },
backto: function() {
  game.state.start('menu');
},
};
