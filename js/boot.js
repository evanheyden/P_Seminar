//boot.js macht die Physics und dann wird preload gestartet
var bootState = {
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.state.start("preload")
  }
};
