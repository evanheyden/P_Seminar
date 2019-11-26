/*var Caverunner = Caverunner || {};
playState = function(){};
playState.prototype = {*/
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
var timer1;
var timer2;
var camera;
var levels;
var x;
var a;
var c;
var f;
var platform1;
var platform2;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;
var block27;
var block28;
var block29;
var block30;
var block31;
var block32;
var block33;
var block34;
var block35;
var block37;
var block38;
var block39;

var playState = {

create: function () {

		this.game.time.events.repeat(Phaser.Timer.SECOND * 6.4, 10000, this.timer1Up, this);

		//  We're going to be using physics, so enable the Arcade Physics system


	//hier werden die Grenzen der Welt gesetzt:
	this.game.world.setBounds(0, 0, 960*100000000000, 640);


	this.game.add.sprite(0, 0, 'background');

	c = 1;

	timer1 = 0;

	typeof(timer1)==='double';

	timer2 = this.game.time.create();
	timer2.start();


		//The platforms group contains the ground and the 2 ledges we can jump on
		platforms = this.game.add.group();

		//We will enable physics for any object that is created in this group
		platforms.enableBody = true;


	//hier werden die beiden Spieler erschaffen (die zweite Zahl ist anders, damit sie nicht auf der gleichen Stelle spawnen):

	player1 = this.game.add.sprite(0, 200, 'pickaxe');

	player2 = this.game.add.sprite(32, 100, 'sword');

	player3 = this.game.add.sprite(400,  300, 'invisible');

	//ab hier werden einfach immer die Eigenschaften doppelt genannt (nur die Schwerkraft ist für player2 negativ):

		// We need to enable physics on the player
		game.physics.arcade.enable(player1);
		game.physics.arcade.enable(player2);
	game.physics.arcade.enable(player3);


		// Player physics properties. Give the little guy a slight bounce.
		player1.body.bounce.y = 0;
		player1.body.gravity.y = -300;
		player1.body.collideWorldBounds = true;
	player1.anchor.setTo(0.5,0.5);

		player2.body.bounce.y = 0;
		player2.body.gravity.y = 300;
		player2.body.collideWorldBounds = true;
	player2.anchor.setTo(0.5,0.5);

	player1.body.mass = 100;
	player2.body.mass = 100;

		//  Our two animations, walking left and right.
		player1.animations.add('leftup1', [9, 11, 12, 13], 20, true);
		player1.animations.add('rightup1', [15, 16, 17, 18], 20, true);

		player1.animations.add('leftdown1', [0, 1, 2, 3], 20, true);
		player1.animations.add('rightdown1', [5, 6, 7, 8], 20, true);


	player2.animations.add('leftdown2', [0, 1, 2, 3], 10, true);
		player2.animations.add('rightdown2', [5, 6, 7, 8], 10, true);

/*	player2.animations.add('leftdown2', [9,5,9,4], 6, true);
		player2.animations.add('rightdown2', [8,1,8,0], 6, true);*/

		//  Finally some stars to collect
		stars = this.game.add.group();

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


	//hier wird festgelegt, dass die Kamera immer mit player3 mitläuft:

	game.camera.follow(player3, Phaser.Camera.FOLLOW_LOCKON, 0.1);

		//  The score
		scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fcbc38' });

		//  Our controls.
	//hier werden zusätzlich zu den Standard-Pfeiltasten noch die WASD-Tasten für player2 und der ButtonGravity definiert:

		cursors = game.input.keyboard.createCursorKeys();
	upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
	leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
	downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
		rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
	ButtonGravity = game.input.keyboard.addKey(Phaser.Keyboard.N);


},



update: function () {

	function gameover() {
		game.state.start("gameover");
	}

	if ((player1.body.position.x - game.camera.x) > 960)
	{
		//player1.kill();
		//gameover();
	}

	if ((player1.body.position.x + 32 - game.camera.x) < 0)
	{
		player1.kill();
		gameover();
	}
	if ((player2.body.position.x - game.camera.x) > 960)
	{
		//player2.kill();
		//gameover();
	}

	if ((player2.body.position.x + 32 - game.camera.x) < 0)
	{
		player2.kill();
		gameover();
	}

	player3.body.velocity.x = 75;


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


	if (cursors.left.isDown)
	{
		//  Move to the left
		player1.body.velocity.x = -150;

		player1.animations.play('leftdown1');
	}
	else if (cursors.right.isDown)
	{
		//  Move to the right
		player1.body.velocity.x = 150;

		player1.animations.play('rightdown1');
	}

	else
	{
		//  Stand still
		player1.animations.stop();

		player1.frame = 4;
	}

	//hier soll der ButtonGravity für player1 programmiert werden, allerdings kann er bisher nur positive Schwerkraft (man wird nach unten gezogen) in Negative (man wird nach oben gezogen) umwandeln:

	// hier soll die Sprungrichtung an die Schwerkraft-Richtung angepasst werden, allerdings funktioniert das momentan nur bei positiver Schwerkraft:

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
    if (upButton.isDown) //&& player2.body.touching.down)
    {
        player2.body.velocity.y = -200;
    }

	if ((timer1 >= 1)) //Number.isInteger(player1.body.position.x / 800)
	{
		x = Math.floor(Math.random()*2)+1;

		switch (x)
		{
			case 1:
			{
				//c += 1;
				this.platform1();
				this.destroyPlatform1Loader();
				break;
			}
			case 2:
			{
				//c += 1;
				this.platform2();
				this.destroyPlatform2Loader();
				break;
			}
		}
	}


	//das ist nötig, um die Kamera zu aktualisieren:

	prevCamX = game.camera.x;


},

collectStar: function (player1, star)
{
    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;
},

collectStar: function (player2, star)
{
    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;
},


execute: function ()
{
	//var i = random();
	for (i = 0; i < 1; i = i+1)
	{
		var b  = Math.floor(Math.random())+1;
	}
		eval('platform'+b+'()');
},

timer1Up: function ()
{
	timer1 += 1;
},




platform2: function ()
	{

		block1 = platforms.create(c * 960, 0,'block3breit');

		block1.body.immovable = true;

		block2 = platforms.create(c * 960 + 3 * 32, 0,'block2breit');

		block2.body.immovable = true;

		block3 = platforms.create(c * 960 + 7 * 32, 0,'block3hoch');

		block3.body.immovable = true;

		block4 = platforms.create(c * 960 + 8 * 32, 0,'block2breit');

		block4.body.immovable = true;

		block5 = platforms.create(c * 960 + 11 * 32, 0,'block');

		block5.body.immovable = true;

		block6 = platforms.create(c * 960 + 13 * 32, 1 * 32,'block');

		block6.body.immovable = true;

		block7 = platforms.create(c * 960 + 1 * 32, 2 * 32,'block');

		block7.body.immovable = true;

		block8 = platforms.create(c * 960 + 3 * 32, 3 * 32,'block');

		block8.body.immovable = true;

		block9 = platforms.create(c * 960 + 4 * 32, 4 * 32,'block');

		block9.body.immovable = true;

		block10 = platforms.create(c * 960 + 8 * 32, 4 * 32,'block');

		block10.body.immovable = true;

		block11 = platforms.create(c * 960 + 10 * 32, 5 * 32,'block');

		block11.body.immovable = true;

		block12 = platforms.create(c * 960 + 13 * 32, 4 * 32,'block2breit');

		block12.body.immovable = true;

		block13 = platforms.create(c * 960 + 14 * 32, 6 * 32,'block');

		block13.body.immovable = true;

		block14 = platforms.create(c * 960 + 8 * 32, 7 * 32,'block');

		block14.body.immovable = true;

		block15 = platforms.create(c * 960 + 9 * 32, 8 * 32,'block');

		block15.body.immovable = true;

		block16 = platforms.create(c * 960 + 10 * 32, 9 * 32,'block2breit');

		block16.body.immovable = true;

		block17 = platforms.create(c * 960 + 13 * 32, 9 * 32,'blockquadrat');

		block17.body.immovable = true;

		block18 = platforms.create(c * 960 + 1 * 32, 14 * 32,'block');

		block18.body.immovable = true;

		block19 = platforms.create(c * 960 + 4 * 32, 4 * 32,'block2breit');

		block19.body.immovable = true;

		block20 = platforms.create(c * 960 + 8 * 32, 14 * 32,'block3breit');

		block20.body.immovable = true;

		block21 = platforms.create(c * 960 + 7 * 32, 11 * 32,'block2hoch');

		block21.body.immovable = true;

		block22 = platforms.create(c * 960 + 9 * 32, 11 * 32,'block');

		block22.body.immovable = true;

		block23 = platforms.create(c * 960 + 12 * 32, 15 * 32,'block');

		block23.body.immovable = true;

		block24 = platforms.create(c * 960 + 14 * 32, 15 * 32,'block');

		block24.body.immovable = true;

		block25 = platforms.create(c * 960 + 6 * 32, 16 * 32,'block3breit');

		block25.body.immovable = true;

		block26 = platforms.create(c * 960 + 3 * 32, 17 * 32,'block2breit');

		block26.body.immovable = true;

		block27 = platforms.create(c * 960 + 5 * 32, 18 * 32,'block');

		block27.body.immovable = true;

		block28 = platforms.create(c * 960 + 3 * 32, 19 * 32,'block3breit');

		block28.body.immovable = true;

		block29 = platforms.create(c * 960 + 6 * 32, 19 * 32,'block');

		block29.body.immovable = true;

		block30 = platforms.create(c * 960 + 0 * 32, 19 * 32,'block2breit');

		block30.body.immovable = true;

		block31 = platforms.create(c * 960 + 9 * 32, 19 * 32,'block');

		block31.body.immovable = true;

		block32 = platforms.create(c * 960 + 11 * 32, 19 * 32,'block2breit');

		block32.body.immovable = true;

		block33 = platforms.create(c * 960 + 14 * 32, 19 * 32,'block');

		block33.body.immovable = true;

		block34 = platforms.create(c * 960 + 3 * 32, 9 * 32,'blockquadrat');

		block34.body.immovable = true;

		block35 = platforms.create(c * 960 + 5 * 32, 9 * 32,'blockquadrat');

		block35.body.immovable = true;

		block36 = platforms.create(c * 960 + 7 * 32, 9 * 32,'block2hoch');

		block36.body.immovable = true;

		block37 = platforms.create(c * 960 + 8 * 32, 10 * 32,'block');

		block37.body.immovable = true;

		block38 = platforms.create(c * 960 + 0 * 32, 9 * 32,'block2hoch');

		block38.body.immovable = true;

		block39 = platforms.create(c * 960 + 1 * 32, 10 * 32,'block');

		block39.body.immovable = true;

		c += 1;

		timer1 = 0;

		//timer2.reset();

	},

platform1: function ()
	{

		platform1 = platforms.create(c * 960, 100,'ground');

		c += 1;

		timer1 = 0;

		//timer2.reset();

		platform1.scale.setTo(0.5,2);

		platform1.body.immovable = true;
	},

	destroyPlatform1Loader: function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform1, this);
	},


	destroyPlatform1: function ()
	{
		if (player3.x - platform1.x >= 480)
		{
			platform1.destroy();
		}
	},

destroyPlatform2Loader:	function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform2, this);
	},



destroyPlatform2:	function ()
	{
		//if (player3.x - platform1.x <= 960)
		{
			block1.destroy();
			block2.destroy();
			block3.destroy();
			block4.destroy();
			block5.destroy();
			block6.destroy();
			block7.destroy();
			block8.destroy();
			block9.destroy();
			block10.destroy();
			block11.destroy();
			block12.destroy();
			block13.destroy();
			block14.destroy();
			block15.destroy();
			block16.destroy();
			block17.destroy();
			block18.destroy();
			block19.destroy();
			block20.destroy();
			block21.destroy();
			block22.destroy();
			block23.destroy();
			block24.destroy();
			block25.destroy();
			block26.destroy();
			block27.destroy();
			block28.destroy();
			block29.destroy();
			block30.destroy();
			block31.destroy();
			block32.destroy();
			block33.destroy();
			block34.destroy();
			block35.destroy();
			block36.destroy();
			block37.destroy();
			block38.destroy();
			block39.destroy();
		}
},



};
