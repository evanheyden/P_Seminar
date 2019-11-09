//Startmenu wo man das Spiel starten kann
var Caverunner = Caverunner || {};
menuState = function() {};
menuState.prototype = {
  create: function () {
    //Hier erscheint dann der Name des SPiels
    var nameLabel = game.add.text(80, 80, "Caverunner", {font: "60px Courier", fill: "#fcbc38"});
    //hier wird der playbutton eingefügt, ist im moment noch hässlich aber nur zum testen
  //  create: function () {
    //  var button = game.add.button(game.world.centerX, 300, "playbutton", this.clickMe, this,);
    //},
    //clickMe: function () {
      //console.log("CLICKED");
  //  }
  //}
},
  start: function () {
    game.state.start("play");
  },
};
