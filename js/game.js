//game.js erstellt die ganzen states
//var Caverunner = Caverunner || {};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add("boot", bootState);
game.state.add("preload", preloadState);
game.state.add("menu", menuState);
game.state.add("playtest", playState);
game.state.add("gameover", gameoverState);

//hier wird der boot gestartet
game.state.start("boot");
