/*var Caverunner = Caverunner || {};
gameoverState = function() {};
gameoverState.prototype = {*/
var gameoverState = {
  create: function() {
    if(score > highScore)
    {
      highScore = score;
    }
    localStorage.setItem(localStorageName, highScore);
    var backOver = game.add.image(0, 0, 'backgroundgameover');
    var text = game.add.text(140, 110, "Game Over\n\nDein score: " + score + "\nBest score: " + highScore , {font: '50px Verdana',  fill: '	#000'});
    var restartButton = this.game.add.button(450, 340, 'restartbutton', this.restart, this, 1, 0);
    var menuButton = this.game.add.button(450, 420, 'menubutton', this.backto, this, 1, 0);
  },
restart: function() {
    game.state.start("play");
    score = 0;
    playerSpeed = 150;
    playerSpeedJumping = 75;
    playerJump = 230;
  },
backto: function() {
  game.state.start('menu');
  score = 0;
  playerSpeed = 150;
  playerSpeedJumping = 75;
  playerJump = 230;
},
};
