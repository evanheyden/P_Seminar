/*let latitude = 0;
let longitude = 0;
var schule = false;*/
var preloadState = {

preload: function () {
    //hier kommt der Ladebalken
  /*  var location = this.getlocation();
    var Ladebalken = game.add.text(200, 250, "Spiel wird geladen...",{font: "33px Times", fill: "#fcbc38"});

    if (schule = true) {
      game.load.image('booster', 'assets/booster.png');

    } else {
      game.load.image('klausur', 'assets/klausur.png');

    }*/

    //hier werden die assets geladen
    game.load.image('backgroundmenu', 'assets/backgroundmenu.png');
    game.load.image('backgroundgameover', 'assets/backgroundgameover.png');
    game.load.image('ground', 'assets/platform.png');
  	game.load.image('1', 'assets/Block.png');
    game.load.image('flaeche','assets/unten.png');
  	game.load.image('2h', 'assets/Block2Hoch');
  	game.load.image('2b', 'assets/Block2Breit.png');
  	game.load.image('3h', 'assets/Block3Hoch.png');
  	game.load.image('3b', 'assets/Block3Breit.png');
  	game.load.image('4x4', 'assets/BlockQuadrat.png');
    game.load.image('klausur', 'assets/klausur.png');
    game.load.image('booster', 'assets/booster.png');
  	game.load.spritesheet('level', 'assets/Dreiplattformen.png', 800, 400);
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  	game.load.spritesheet('baddie','assets/baddie.png', 32, 32);
  	game.load.spritesheet('invisible', 'assets/Invisible2Sprite.png',32,32);
  	game.load.spritesheet('wall', 'assets/WallSprite.png',32,600);
  	game.load.spritesheet('bloblin', 'assets/Bloblin4.png',32,32);
  	game.load.spritesheet('roblin', 'assets/Roblin.png',32,32);
  	game.load.spritesheet('background', 'assets/Hintergrund.png', 4000, 600);
    game.load.spritesheet('pickaxe', 'assets/picksmall.png', 20,32);
    game.load.spritesheet('sword', 'assets/swordsmall.png', 23,32);
    game.load.spritesheet('playbutton', 'assets/playbutton.png', 64, 64);
    game.load.spritesheet('restartbutton', 'assets/restartbutton.png', 64, 64);
    game.load.spritesheet('menubutton', 'assets/menubutton.png', 64, 64);
    game.load.spritesheet('pausebutton', 'assets/pausebutton.png', 64, 64);

},
create: function () {
game.state.start("menu")
},
/*getlocation: function (){
  navigator.geolocation.getCurrentPosition(position=>{latitude = position.coords.latitude; longitude = position.coords.longitude;});
  this.schule();
  console.log('layer')
},
schule: function() {
if (latitude > 40 && latitude < 50) {
  var schule = true;
  console.log('success')
}
},
start: function(){
  game.state.start("menu")
},*/
};
