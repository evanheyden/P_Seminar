//game.js erstellt die ganzen states
//var Caverunner = Caverunner || {};

var game = new Phaser.Game(960, 640, Phaser.AUTO, 'gameDiv');
game.state.add("boot", bootState);
game.state.add("preload", preloadState);
game.state.add("menu", menuState);
game.state.add("play", playState);
game.state.add("gameover", gameoverState);
var highScore = localStorage.getItem(localStorageName) == null ? 0 :
                localStorage.getItem(localStorageName);
var score = 0;
//hier wird der boot gestartet
game.state.start("boot");
