


  var menuState = {
  create: function () {
    var menuback = game.add.image(0, 0, 'backgroundmenu');
    //Hier erscheint dann der Name des SPiels
    var nameLabel = game.add.text(100, 150, "Caverunner", {font: "100px Courier", fill: "#fcbc38"});
    //hier wird der playbutton eingefügt, ist im moment noch hässlich aber nur zum testen
  //  var button = game.add.button(game.world.centerX = 100, 300, "playbutton", this.actionOnclick, this);

   //clickMe: function () {
  //console.log("CLICKED");
  //}
  //}

    //  game.stage.backgroundColour = '#fcbc38';

    //var pkey = game.input.keyboard.addKey(Phaser.Keyboard.P);
    //pkey.onDown.addOnce(this.start, this);

     var playButton = this.game.add.button(370, 300, 'playbutton', this.start, this, 1, 0);


},
start: function () {
  game.state.start("play");
  score = 0;
},



};
