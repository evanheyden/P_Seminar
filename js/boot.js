//boot.js macht die Physics und dann wird preload gestartet
var Caverunner = Caverunner || {};
bootState = function () {};
bootState.prototype = {

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColour = "#fcbc38";
//    scale.pageAlignHorizontally = true;

    game.state.start("preload")
  }
};
