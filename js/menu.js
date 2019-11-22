//Startmenu wo man das Spiel starten kann
/*var Caverunner = Caverunner || {};
menuState = function() {};
menuState.prototype = { */
  var menuState = {
  create: function () {

    //Hier erscheint dann der Name des SPiels
    var nameLabel = game.add.text(200, 250, "Caverunner", {font: "60px Courier", fill: "#fcbc38"});

    //hier wird der playbutton eingefügt, ist im moment noch hässlich aber nur zum testen
  //  var button = game.add.button(game.world.centerX = 100, 300, "playbutton", this.actionOnclick, this);

   //clickMe: function () {
  //console.log("CLICKED");
  //}
  //}
  //var menuback = game.add.image(400, 300, 'backgroundmenu');
    //  game.stage.backgroundColour = '#fcbc38';

    var pkey = game.input.keyboard.addKey(Phaser.Keyboard.P);
    pkey.onDown.addOnce(this.start, this);

},
//actionOnclick: function() {
//game.state.start("play");
//},
  start: function () {
    game.state.start("play");
  },
};
