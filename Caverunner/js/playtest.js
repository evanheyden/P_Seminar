var player1;
var player2;
var platforms;
var cursors;
var stars;
var score = 0;
var scoreText;
var frameTime = 0;
var frames;
var prevCamX = 0;
var prevCamY = 0;
var ncounter = 0;
//var timer;
var camera;
//var Zunahme;
var levels;
var functionArray;
var b;
var x;
var a;
var c;
var platform1;
var platform2;

var playState = {
create:  function() {

  //hier werden die Grenzen der Welt gesetzt:
	this.setBounds = game.world.setBounds(0, 0, 800*100000000000, 600);

	//var newArray = [platform1(), platform2()];




	c = -1;



	//var iconcycle = [
	//platform1(), platform2()
	//];



    //The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    //Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(20, 2);

    //his stops it from falling away when you jump on it
    ground.body.immovable = true;

	//hier wird die obere Ebene gebaut:

	var top = platforms.create(0,0, 'ground');

	top.scale.setTo(20,2);

	top.body.immovable =  true;

	// hier wird die mittlere Ebenene gebaut:

	var mid = platforms.create(400, 332 - 64,'ground');

	mid.scale.setTo(20,2);

	mid.body.immovable = true;


    //  Now let's create two ledges
    var ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

	wall1 = game.add.sprite(800,0,'wall');

	levels = game.add.group();
	//levels.add(level1);


	//hier werden die beiden Spieler erschaffen (die zweite Zahl ist anders, damit sie nicht auf der gleichen Stelle spawnen):

  player1 = this.game.add.sprite(0, 200, 'pickaxe');

	player2 = this.game.add.sprite(32, 100, 'roblin');

	player3 = this.game.add.sprite(400,  300, 'invisible');

	//ab hier werden einfach immer die Eigenschaften doppelt genannt (nur die Schwerkraft ist für player2 negativ):

    // We need to enable physics on the player
    game.physics.arcade.enable(player1);
    game.physics.arcade.enable(player2);
	game.physics.arcade.enable(player3);
	game.physics.arcade.enable(wall1);
	//game.physics.arcade.enable(level1);

    // Player physics properties. Give the little guy a slight bounce.
    player1.body.bounce.y = 0;
    player1.body.gravity.y = -300;
    player1.body.collideWorldBounds = true;
	player1.anchor.setTo(0.5,0.5);

    player2.body.bounce.y = 0;
    player2.body.gravity.y = -300;
    player2.body.collideWorldBounds = true;
	player2.anchor.setTo(0.5,0.5);

	player1.body.mass = 100;
	player2.body.mass = 100;

    //  Our two animations, walking left and right.
  /*  player1.animations.add('leftdown1', [9,5,9,4], 6, true);
    player1.animations.add('rightdown1', [8,1,8,0], 6, true);

	player1.animations.add('leftup1', [10,7,10,6], 6, true);
    player1.animations.add('rightup1', [11,3,11,2], 6, true);*/
		player1.animations.add('left1', [0, 1, 2, 3], 10, true);
		player1.animations.add('right1', [5, 6, 7, 8], 10, true);

	player2.animations.add('left', [0,1], 10, true);
    player2.animations.add('right', [2,3], 10, true);

	player2.animations.add('leftdown2', [9,5,9,4], 6, true);
    player2.animations.add('rightdown2', [8,1,8,0], 6, true);

    //  Finally some stars to collect
    stars = game.add.group();

    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 10, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

	x1 = player1.body.position.x / 800;
	x2 = player2.body.position.x / 800;


	//hier wird festgelegt, dass die Kamera immer mit player3 mitläuft:

	game.camera.follow(player3, Phaser.Camera.FOLLOW_LOCKON, 0.1);

	a = game.camera.x % 800;

    //  The score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

//	scoreText1 = game.add.text(200, 16, 'nscore: 0', { fontSize: '32px', fill: '#000' });



    //  Our controls.
	//hier werden zusätzlich zu den Standard-Pfeiltasten noch die WASD-Tasten für player2 und der ButtonGravity definiert:

    cursors = game.input.keyboard.createCursorKeys();
	upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
	leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
	downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
	ButtonGravity = game.input.keyboard.addKey(Phaser.Keyboard.N);
	neverPress = game.input.keyboard.addKey(Phaser.Keyboard.P);
  },



update:  function () {


  function gameover() {
    game.state.start("gameover");
  }


  if (neverPress.isDown)
  {
    player1.scale.y *= -1;
    player2.scale.y *= -1;
  }


  if ((player1.body.position.x - game.camera.x) > 800)
  {
    player1.kill();
    gameover();
  }

  if ((player1.body.position.x + 32 - game.camera.x) < 0)
  {
    player1.kill();
    gameover();
  }
  if ((player2.body.position.x - game.camera.x) > 800)
  {
    player2.kill();
    gameover();
  }

  if ((player2.body.position.x + 32 - game.camera.x) < 0)
  {
    player2.kill();
    gameover();
  }




  player3.body.acceleration.x = 3
  wall1.body.acceleration.x = 5;


    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player1, platforms);
    game.physics.arcade.collide(stars, platforms);

    game.physics.arcade.collide(player2, platforms);
    game.physics.arcade.collide(stars, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player1, stars, this.collectStar, null, this);

    game.physics.arcade.overlap(player2, stars, this.collectStar, null, this);

    //  Reset the players velocity (movement)
    player1.body.velocity.x = 0;


  //if (player1.body.gravity.y = 300 && player1.body.touching.down)

    if (cursors.right.isDown)
    {
      //  Move to the left
      player1.body.velocity.x = 150;

      player1.animations.play('right1');
    }
    else if (cursors.left.isDown)
    {
      //  Move to the right
      player1.body.velocity.x = -150;

      player1.animations.play('left1');
    }

  else
  {
    //  Stand still
    player1.animations.stop();

    player1.frame = 8;
  }








  //hier soll der ButtonGravity für player1 programmiert werden, allerdings kann er bisher nur positive Schwerkraft (man wird nach unten gezogen) in Negative (man wird nach oben gezogen) umwandeln:





  // hier soll die Sprungrichtung an die Schwerkraft-Richtung angepasst werden, allerdings funktioniert das momentan nur bei positiver Schwerkraft:

  if (upButton.isDown && player1.body.touching.down && player1.body.gravity.y(300))
  {
    player1.body.velocity.y = 300;
  }



  // Bewegung Player2
  player2.body.velocity.x = 0;



    if (leftButton.isDown)
    {
        //  Move to the left
        player2.body.velocity.x = -150;

        player2.animations.play('leftdown2');
    }
    else if (rightButton.isDown)
    {
        //  Move to the right
        player2.body.velocity.x = 150;

        player2.animations.play('rightdown2');
    }
    else
    {
        //  Stand still
        player2.animations.stop();

        player2.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (upButton.isDown) //&& player.body.touching.down)
    {
        player2.body.velocity.y = 350;
    }

  if (a == 0) //Number.isInteger(player1.body.position.x / 800)
  {
    //this.game.rnd.pick(functionArray);
    //player1.kill();


    //for (i = 0; i < 1; i = i+1)
    //{
    //	execute();
    //}
  x = Math.floor(Math.random()*2)+1;
  //c += 1;

  switch (x)
  {
    case 1:
    {
      //c += 1;
      this.platform1();
      break;
    }
    case 2:
    {
      //c += 1;
      this.platform2();
      break;
    }
  }
  }

  game.physics.arcade.collide(player1, levels);


  //das ist nötig, um die Kamera zu aktualisieren:

  prevCamX = game.camera.x;



  },

collectStar:  function (player1, star) {

      // Removes the star from the screen
      star.kill();

      //  Add and update the score
      score += 10;
      scoreText.text = 'Score: ' + score;

  },

collectStar:  function (player2, star) {

      // Removes the star from the screen
      star.kill();

      //  Add and update the score
      score += 10;
      scoreText.text = 'Score: ' + score;



  },

/*  <!-- function random()
  {

  	//var i  = Math.floor(Math.random() *2)+1;
  	//if(i<=0) return random();
  	//return i; -->
  }*/
execute:  function ()
  {
  	//var i = random();
  	for (i = 0; i < 1; i = i+1)
  	{
  		var b  = Math.floor(Math.random())+1;
  	}
  		eval('platform'+b+'()');
  },


platform1:  function ()
  	{
  	//for (i = 0; i > 1; i = i+1)
  	//{
  		platform1 = platforms.create(c * 800, 100,'ground');

  		c += 1;

  		platform1.scale.setTo(0.5,2);

  		platform1.body.immovable = true;
  	//}

  	//var level1 = levels.create(0,0,'level');

  	//level1 = game.add.sprite(0, 0, 'level');

  	//levels.add(level1);

  	//level1.body.immpassable = true;

  	//game.physics.arcade.enable(level1);
  },

  	//level1.scale.setTo(1,1);

platform2:  function ()
  	{
  	//for (i = 0; i > 1; i = i+1)
  	//{
  		platform2 = platforms.create(c * 800, 300,'ground');

  		c += 1;

  		platform2.scale.setTo(0.5,2);

  		platform2.body.immovable = true;
  	//}
    collectStar: function (player1, star) {

        // Removes the star from the screen
        star.kill();

        //  Add and update the score
        score += 10;
        scoreText.text = 'Score: ' + score;

    },

    collectStar: function (player2, star) {

        // Removes the star from the screen
        star.kill();

        //  Add and update the score
        score += 10;
        scoreText.text = 'Score: ' + score;



    },

    //<!-- function random()
    //{

    	//var i  = Math.floor(Math.random() *2)+1;
    	//if(i<=0) return random();
    	//return i; -->
    //},
    execute: function (){
    	//var i = random();
    	for (i = 0; i < 1; i = i+1)
    	{
    		var b  = Math.floor(Math.random())+1;
    	}
    		eval('platform'+b+'()');
    },


    platform1: function (){

    	//for (i = 0; i > 1; i = i+1)
    	//{
    		platform1 = platforms.create(c * 800, 100,'ground');

    		c += 1;

    		platform1.scale.setTo(0.5,2);

    		platform1.body.immovable = true;
    	//}

    	//var level1 = levels.create(0,0,'level');

    	//level1 = game.add.sprite(0, 0, 'level');

    	//levels.add(level1);

    	//level1.body.immpassable = true;

    	//game.physics.arcade.enable(level1);
    },

    	//level1.scale.setTo(1,1);

    platform2: function (){
    	//for (i = 0; i > 1; i = i+1)
    	//{
    		platform2 = platforms.create(c * 800, 300,'ground');

    		c += 1;

    		platform2.scale.setTo(0.5,2);

    		platform2.body.immovable = true;
    	},

    	//ncounter = ncounter += 1;
    	//scoreText1.text = 'Score: ' + ncounter;
  },
};
