//in preload.js werden die assets geladen
/*var Caverunner = Caverunner || {};
preloadState = function(){};
preloadState.prototype = {*/
var preloadState = {
  preload: function () {
    //hier kommt der Ladebalken
    var Ladebalken = game.add.text(200, 250, "Spiel wird geladen...",{font: "33px Times", fill: "#fcbc38"});

    //hier werden die assets geladen
  game.load.image('backgroundmenu', 'assets/backgroundmenu.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.image("playbutton", "assets/Play.PNG");
	game.load.spritesheet('level', 'assets/Dreiplattformen.png', 800, 400);
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie','assets/baddie.png', 32, 32);
	game.load.spritesheet('invisible', 'assets/Invisible2Sprite.png',32,32);
	game.load.spritesheet('wall', 'assets/WallSprite.png',32,600);
	game.load.spritesheet('bloblin', 'assets/Bloblin4.png',32,32);
	game.load.spritesheet('roblin', 'assets/Roblin.png',32,32);
},
create: function () {
  game.state.start("menu")
},
};
