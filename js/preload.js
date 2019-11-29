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
  	game.load.image('block', 'assets/Block.png');
  	game.load.image('block2hoch', 'assets/Block2Hoch');
  	game.load.image('block2breit', 'assets/Block2Breit.png');
  	game.load.image('block3hoch', 'assets/Block3Hoch.png');
  	game.load.image('block3breit', 'assets/Block3Breit.png');
  	game.load.image('blockquadrat', 'assets/BlockQuadrat.png');
    game.load.image('star', 'assets/star.png');
  	game.load.spritesheet('level', 'assets/Dreiplattformen.png', 800, 400);
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  	game.load.spritesheet('baddie','assets/baddie.png', 32, 32);
  	game.load.spritesheet('invisible', 'assets/Invisible2Sprite.png',32,32);
  	game.load.spritesheet('wall', 'assets/WallSprite.png',32,600);
  	game.load.spritesheet('bloblin', 'assets/Bloblin4.png',32,32);
  	game.load.spritesheet('roblin', 'assets/Roblin.png',32,32);
  	game.load.spritesheet('background', 'assets/Hintergrund.png', 480, 640);
    game.load.spritesheet('pickaxe', 'assets/picksmall.png', 20,32);
    game.load.spritesheet('sword', 'assets/swordsmall.png', 23,32);
    game.load.spritesheet('playbutton', 'assets/playbutton.png', 64, 64);

},
create: function () {
  game.state.start("menu")
},
};
