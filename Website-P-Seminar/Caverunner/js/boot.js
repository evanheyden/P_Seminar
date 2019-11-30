//boot.js macht die Physics und dann wird preload gestartet
/*var Caverunner = Caverunner || {};
bootState = function () {};
bootState.prototype = { */
var bootState = {
  create: function () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColour = "#fcbc38";
//    scale.pageAlignHorizontally = true;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.state.start("preload")
  }
};
