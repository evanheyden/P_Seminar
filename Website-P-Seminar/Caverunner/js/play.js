var player1;
var player2;
var platforms;
var playerSpeed = 150;
var playerSpeedJumping = 75;
var playerJump = 230;
var cursors;
var booster;
var boost;
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
var localStorageName = "crackalien";
var highScore;
let latitude = 0;
let longitude = 0;
var schule = false;
var timeCheck;
var playState = {

	getlocation: function (){
		//	navigator.geolocation.getCurrentPosition(position=>{latitude = position.coords.latitude; longitude = position.coords.longitude;});
		console.log('layer1')
	},
	schule: function() {
		if (latitude > 40 && latitude < 50) {
			var schule = true;
		} else {
			var schule = false;
		}

	},

	pause: function() {
		game.paused = true;
		this.input.disabled = true;

		this.game.physics.gravity = 0;

		player1.body.velocity.x = 0;

		player1.body.velocity.y = 0;

		player2.body.velocity.x = 0;

		player2.body.velocity.y = 0;

		player3.body.velocity.x = 0;

		player3.body.velocity.y = 0;

		console.log('success')
	},

	create: function () {
		var location = this.getlocation();
		this.game.time.events.repeat(Phaser.Timer.SECOND * 6.4, 10000, this.timer1Up, this);

		//  We're going to be using physics, so enable the Arcade Physics system


		//hier werden die Grenzen der Welt gesetzt:
		this.game.world.setBounds(0, 0, 960*100000000000, 640);

		for (var i = 0; i < 1000; i++)
		{
			this.game.add.sprite(4000*i, 0, 'background');
		}
		c = 1;

		timer1 = 0;

		typeof(timer1)==='double';

		timer2 = this.game.time.create();
		timer2.start();


		//The platforms group contains the ground and the 2 ledges we can jump on
		platforms = this.game.add.group();

		//We will enable physics for any object that is created in this group
		platforms.enableBody = true;

		blockA = platforms.create(0, 0,'3b');

		blockA.body.immovable = true;

		blockB = platforms.create( 3 * 32, 0,'3b');

		blockB.body.immovable = true;

		blockC = platforms.create(6 * 32, 0,'3b');

		blockC.body.immovable = true;

		blockD = platforms.create(9 * 32, 0,'3b');

		blockD.body.immovable = true;

		blockE = platforms.create(12 * 32, 0,'3b');

		blockE.body.immovable = true;

		blockF = platforms.create(0 * 32, 19 * 32,'3b');

		blockF.body.immovable = true;

		blockG = platforms.create(3 * 32, 19* 32,'3b');

		blockG.body.immovable = true;

		blockH = platforms.create(6 * 32, 19 * 32,'3b');

		blockH.body.immovable = true;

		blockI = platforms.create( 9 * 32, 19 * 32,'3b');

		blockI.body.immovable = true;

		blockJ = platforms.create( 12 * 32, 19 * 32,'3b');

		blockJ.body.immovable = true;

		blockK = platforms.create(15*32, 0,'3b');

		blockK.body.immovable = true;

		blockL = platforms.create( 18 * 32, 0,'3b');

		blockL.body.immovable = true;

		blockM = platforms.create(21 * 32, 0,'3b');

		blockM.body.immovable = true;

		blockN = platforms.create(24 * 32, 0,'3b');

		blockN.body.immovable = true;

		blockO = platforms.create(27 * 32, 0,'3b');

		blockO.body.immovable = true;

		blockP = platforms.create(27 * 32, 19 * 32,'3b');

		blockP.body.immovable = true;

		blockQ = platforms.create(15 * 32, 19* 32,'3b');

		blockQ.body.immovable = true;

		blockR = platforms.create(18 * 32, 19 * 32,'3b');

		blockR.body.immovable = true;

		blockS = platforms.create( 21 * 32, 19 * 32,'3b');

		blockS.body.immovable = true;

		blockT = platforms.create( 24 * 32, 19 * 32,'3b');

		blockT.body.immovable = true;

		/*for (var i = 0; i < 1000; i++)
		{
			var unten = unten + i;
			unten = platforms.create(i*30, 600,'platform');
			unten.body.immovable = true;
		}
		for (var i = 0; i < 1000; i++)
		{
			var nice = nice + i;
			nice = platforms.create(i*30, -30.9,'platform');
			nice.body.immovable = true;
		}*/
		//hier werden die beiden Spieler erschaffen (die zweite Zahl ist anders, damit sie nicht auf der gleichen Stelle spawnen):

		player1 = this.game.add.sprite(200, 300, 'pickaxe');

		player2 = this.game.add.sprite(200, 300, 'sword');

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
		player1.animations.add('leftup1', [9, 10, 11, 12], 10, true);
		player1.animations.add('rightup1', [14, 15, 16, 17], 10, true);

		player1.animations.add('leftdown1', [0, 1, 2, 3], 10, true);
		player1.animations.add('rightdown1', [5, 6, 7, 8], 10, true);


		player2.animations.add('leftdown2', [0, 1, 2, 3], 10, true);
		player2.animations.add('rightdown2', [5, 6, 7, 8], 10, true);

		player2.animations.add('leftup2', [9, 10, 11, 12], 10, true);
		player2.animations.add('rightup2', [14, 15, 16, 17], 10, true);

		//  Finally some booster to collect
		booster = this.game.add.group();

		//  We will enable physics for any  that is created in this group
		booster.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
		for (var i = 0; i < 1; i++)
		{
			//  Create a  inside of the 'booster' group
			var boost = booster.create(i * 1, 0, 'booster');

			//  Let gravity do its thing
			boost.body.gravity.y = 0;

			//  This just gives each  a slightly random bounce value
			boost.body.bounce.y = 0.7 + Math.random() * 0.2;
		}

		klausuren = this.game.add.group();

		//  We will enable physics for any  that is created in this group
		klausuren.enableBody = true;

		for (var i = 0; i < 1; i++)
		{
			//  Create a  inside of the 'booster' group
			var klausur = klausuren.create(i * 10, 40, 'klausur');

			//  Let gravity do its thing
			klausur.body.gravity.y = 0;

			//  This just gives each  a slightly random bounce value
			klausur.body.bounce.y = 0.7 + Math.random() * 0.2;
		}
		//hier wird festgelegt, dass die Kamera immer mit player3 mitläuft:

		game.camera.follow(player3	, Phaser.Camera.FOLLOW_LOCKON, 0.1);

		//  The score
		scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fcbc38' });
		scoreText.fixedToCamera = true;
		//  Our controls.
		//hier werden zusätzlich zu den Standard-Pfeiltasten noch die WASD-Tasten für player2 und der ButtonGravity definiert:

		cursors = game.input.keyboard.createCursorKeys();
		upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
		leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
		downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
		rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
		ButtonGravity = game.input.keyboard.addKey(Phaser.Keyboard.N);

		var pausebutton = this.game.add.button(870, 30, 'pausebutton', this.pause, this, 1, 0);
		pausebutton.fixedToCamera = true;
	},



	update: function () {

		//var unpause = this.game.input.onDown.add(unpause, self);
		function gameover() {
			game.state.start("gameover");
		}

		if ((player1.body.position.x + 32 - game.camera.x) < 0)
		{
			gameover();
		}

		if ((player2.body.position.x + 32 - game.camera.x) < 0)
		{
			gameover();
		}

		if ((player1.body.position.y) > 607)
		{
			gameover();
		}

		if ((player2.body.position.y) > 607)
		{
			gameover();
		}

		if ((player1.body.position.y) < 1)
		{
			gameover();
		}

		if ((player2.body.position.y) < 1)
		{
			gameover();
		}

		player3.body.velocity.x = 75;

		//Hier wird der pro Sekunde erhöht

		game.time.events.add(Phaser.Timer.SECOND *1, this.score, this) ;

		//  Collide the player and the booster with the platforms
		game.physics.arcade.collide(player1, platforms);
		game.physics.arcade.collide(booster, platforms);

		game.physics.arcade.collide(player2, platforms);
		game.physics.arcade.collide(booster, platforms);

		//  Checks to see if the player overlaps with any of the booster, if he does call the collect function
		game.physics.arcade.overlap(player1, booster, this.Boost, null, this);

		game.physics.arcade.overlap(player2, booster, this.Boost, null, this);

		game.physics.arcade.overlap(player1, klausuren, this.Stress, null, this);

		game.physics.arcade.overlap(player2, klausuren, this.Stress, null, this);
		//  Reset the players velocity (movement)
		player1.body.velocity.x = 0;



		if (cursors.left.isDown && player1.body.touching.down == true)
		{
			//  Move to the left
			player1.body.velocity.x = -playerSpeed;

			player1.animations.play('leftup1');
		}
		else if (cursors.left.isDown && player1.body.touching.up == true)
		{
			player1.body.velocity.x = -playerSpeed;

			player1.animations.play('leftup1');
		}

		else if (cursors.left.isDown && player1.body.touching.down == false)
		{
			player1.body.velocity.x = -playerSpeedJumping;

			player1.animations.play('leftup1');
		}
		else if (cursors.right.isDown && player1.body.touching.down == true)
		{
			//  Move to the right
			player1.body.velocity.x = playerSpeed;

			player1.animations.play('rightup1');
		}

		else if (cursors.right.isDown && player1.body.touching.up == true)
		{
			//  Move to the right
			player1.body.velocity.x = playerSpeed;

			player1.animations.play('rightup1');
		}

		else if (cursors.right.isDown && player1.body.touching.down == false)
		{
			player1.body.velocity.x = playerSpeedJumping;

			player1.animations.play('rightup1');
		}

		else
		{
			//  Stand still
			player1.animations.stop();

			player1.frame = 13;
		}

		//hier soll der ButtonGravity für player1 programmiert werden, allerdings kann er bisher nur positive Schwerkraft (man wird nach unten gezogen) in Negative (man wird nach oben gezogen) umwandeln:
		if (ButtonGravity.isDown && player1.body.touching.down )
		{
			player1.body.gravity.y = -300;
			player2.body.gravity.y = 300;
			player1.scale.y *= -1;
			player2.scale.y *= -1;
		}


		if (ButtonGravity.isDown && player2.body.touching.down)
		{
			player1.body.gravity.y = 300;
			player2.body.gravity.y = -300;
			player1.scale.y *= -1;
			player2.scale.y *= -1;
		}

		// hier soll die Sprungrichtung an die Schwerkraft-Richtung angepasst werden, allerdings funktioniert das momentan nur bei positiver Schwerkraft:
		if (upButton.isDown && player2.body.touching.down)
		{
			player2.body.velocity.y = -playerJump;

		}

		if (cursors.up.isDown && player1.body.touching.up)
		{
			player1.body.velocity.y = playerJump;

		}

		if (upButton.isDown && player2.body.touching.up)
		{
			player2.body.velocity.y = playerJump;

		}

		if (cursors.up.isDown && player1.body.touching.down)
		{
			player1.body.velocity.y = -playerJump;

		}

		// Bewegung Player2
		player2.body.velocity.x = 0;



		if (leftButton.isDown && player2.body.touching.down == true)
		{
			//  Move to the left
			player2.body.velocity.x = -playerSpeed;

			player2.animations.play('leftdown2');
		}

		else if (leftButton.isDown && player2.body.touching.up == true)
		{
			//  Move to the left
			player2.body.velocity.x = -playerSpeed;

			player2.animations.play('leftdown2');
		}

		else if (leftButton.isDown && player2.body.touching.down == false)
		{
			player2.body.velocity.x = -playerSpeedJumping;

			player2.animations.play('leftdown2');
		}

		else if (rightButton.isDown && player2.body.touching.down == true)
		{
			//  Move to the right
			player2.body.velocity.x = playerSpeed;

			player2.animations.play('rightdown2');
		}

		else if (rightButton.isDown && player2.body.touching.up == true)
		{
			//  Move to the right
			player2.body.velocity.x = playerSpeed;

			player2.animations.play('rightdown2');
		}

		else if (rightButton.isDown && player2.body.touching.down == false)
		{
			player2.body.velocity.x = playerSpeedJumping;

			player2.animations.play('rightdown2');
		}

		else
		{
			//  Stand still
			player2.animations.stop();

			player2.frame = 4;
		}



		if ((timer1 >= 1)) //Number.isInteger(player1.body.position.x / 800)
		{
			x = Math.floor(Math.random()*10)+2;

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
				case 3:
				{
					this.platform3();
					this.destroyPlatform3Loader();
					break;
				}
				case 4:
				{
					this.platform4();
					this.destroyPlatform4Loader();
					break;
				}
				case 5:
				{
					this.platform5();
					this.destroyPlatform5Loader();
					break;
				}
				case 6:
				{
					this.platform6();
					this.destroyPlatform6Loader();
					break;
				}
				case 7:
				{
					this.platform7();
					this.destroyPlatform7Loader();
					break;
				}
				case 8:
				{
					this.platform8();
					this.destroyPlatform8Loader();
					break;
				}
				case 9:
				{
					this.platform9();
					this.destroyPlatform9Loader();
					break;
				}
				case 10:
				{
					this.platform10();
					this.destroyPlatform10Loader();
					break;
				}
				case 11:
				{
					this.platform11();
					this.destroyPlatform11Loader();
					break;
				}
			}
		}


		//das ist nötig, um die Kamera zu aktualisieren:

		prevCamX = game.camera.x;


	},





	timer1Up: function ()
	{
		timer1 += 1;
	},

	score: function(){

		score += 1;
		scoreText.text = 'Score: ' + score;
	},

	platform2: function ()
	{
		var testen = this.schule();
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 10 * 32, 2 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 10 * 32, 2 * 32, 'booster');
		}
		if (schule == true) {
			klausur2 = klausuren.create(c * 960 + 8 * 32, 11 * 32, 'klausur');
		} else if (schule == false) {
			boost2 = booster.create(c * 960 + 8 * 32, 11 * 32, 'booster');
		}


		block1 = platforms.create(c * 960, 0,'3b');

		block1.body.immovable = true;

		block2 = platforms.create(c * 960 + 3 * 32, 0,'2b');

		block2.body.immovable = true;

		block3 = platforms.create(c * 960 + 7 * 32, 0,'3h');

		block3.body.immovable = true;

		block4 = platforms.create(c * 960 + 8 * 32, 0,'2b');

		block4.body.immovable = true;

		block5 = platforms.create(c * 960 + 11 * 32, 0,'1');

		block5.body.immovable = true;

		block6 = platforms.create(c * 960 + 13 * 32, 1 * 32,'1');

		block6.body.immovable = true;

		block7 = platforms.create(c * 960 + 1 * 32, 2 * 32,'1');

		block7.body.immovable = true;

		block8 = platforms.create(c * 960 + 3 * 32, 3 * 32,'1');

		block8.body.immovable = true;

		block9 = platforms.create(c * 960 + 4 * 32, 4 * 32,'1');

		block9.body.immovable = true;

		block10 = platforms.create(c * 960 + 8 * 32, 4 * 32,'1');

		block10.body.immovable = true;

		block11 = platforms.create(c * 960 + 10 * 32, 5 * 32,'1');

		block11.body.immovable = true;

		block12 = platforms.create(c * 960 + 13 * 32, 4 * 32,'2b');

		block12.body.immovable = true;

		block13 = platforms.create(c * 960 + 14 * 32, 6 * 32,'1');

		block13.body.immovable = true;

		block14 = platforms.create(c * 960 + 8 * 32, 7 * 32,'1');

		block14.body.immovable = true;

		block15 = platforms.create(c * 960 + 9 * 32, 8 * 32,'1');

		block15.body.immovable = true;

		block16 = platforms.create(c * 960 + 10 * 32, 9 * 32,'2b');

		block16.body.immovable = true;

		block17 = platforms.create(c * 960 + 13 * 32, 9 * 32,'1');

		block17.body.immovable = true;

		block18 = platforms.create(c * 960 + 1 * 32, 14 * 32,'1');

		block18.body.immovable = true;

		block19 = platforms.create(c * 960 + 4 * 32, 4 * 32,'2b');

		block19.body.immovable = true;

		block20 = platforms.create(c * 960 + 8 * 32, 14 * 32,'3b');

		block20.body.immovable = true;

		block21 = platforms.create(c * 960 + 7 * 32, 11 * 32,'2h');

		block21.body.immovable = true;

		block22 = platforms.create(c * 960 + 9 * 32, 11 * 32,'1');

		block22.body.immovable = true;

		block23 = platforms.create(c * 960 + 12 * 32, 15 * 32,'1');

		block23.body.immovable = true;

		block24 = platforms.create(c * 960 + 14 * 32, 15 * 32,'1');

		block24.body.immovable = true;

		block25 = platforms.create(c * 960 + 6 * 32, 16 * 32,'3b');

		block25.body.immovable = true;

		block26 = platforms.create(c * 960 + 3 * 32, 17 * 32,'2b');

		block26.body.immovable = true;

		block27 = platforms.create(c * 960 + 5 * 32, 18 * 32,'1');

		block27.body.immovable = true;

		block28 = platforms.create(c * 960 + 3 * 32, 19 * 32,'3b');

		block28.body.immovable = true;

		block29 = platforms.create(c * 960 + 6 * 32, 19 * 32,'1');

		block29.body.immovable = true;

		block30 = platforms.create(c * 960 + 0 * 32, 19 * 32,'2b');

		block30.body.immovable = true;

		block31 = platforms.create(c * 960 + 9 * 32, 19 * 32,'1');

		block31.body.immovable = true;

		block32 = platforms.create(c * 960 + 11 * 32, 19 * 32,'2b');

		block32.body.immovable = true;

		block33 = platforms.create(c * 960 + 14 * 32, 19 * 32,'1');

		block33.body.immovable = true;

		block34 = platforms.create(c * 960 + 3 * 32, 9 * 32,'4x4');

		block34.body.immovable = true;

		block35 = platforms.create(c * 960 + 5 * 32, 9 * 32,'4x4');

		block35.body.immovable = true;

		block36 = platforms.create(c * 960 + 7 * 32, 9 * 32,'2h');

		block36.body.immovable = true;

		block37 = platforms.create(c * 960 + 8 * 32, 10 * 32,'1');

		block37.body.immovable = true;

		block38 = platforms.create(c * 960 + 0 * 32, 9 * 32,'2h');

		block38.body.immovable = true;

		block39 = platforms.create(c * 960 + 1 * 32, 10 * 32,'1');

		block39.body.immovable = true;

		c += 0.5;

		timer1 = 0;

		//timer2.reset();

	},

	platform3: function ()
	{

		var testen = this.schule();
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 7 * 32, 8 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 7 * 32, 8 * 32, 'booster');
		}
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 10 * 32, 2 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 10 * 32, 2 * 32, 'booster');
		}
		block40 = platforms.create(c * 960 + 0 * 32, 0 * 32,'1');

		block40.body.immovable = true;

		block41 = platforms.create(c * 960 + 3.5 * 32, 0 * 32,'1');

		block41.body.immovable = true;

		block42 = platforms.create(c * 960 + 6.5 * 32, 0 * 32,'1');

		block42.body.immovable = true;

		block43 = platforms.create(c * 960 + 9 * 32, 0 * 32,'3b');

		block43.body.immovable = true;

		block44 = platforms.create(c * 960 + 1 * 32, 1 * 32,'1');

		block44.body.immovable = true;

		block45 = platforms.create(c * 960 + 10 * 32, 1 * 32,'2h');

		block45.body.immovable = true;

		block46 = platforms.create(c * 960 + 2 * 32, 2 * 32,'1');

		block46.body.immovable = true;

		block47 = platforms.create(c * 960 + 14 * 32, 1.5 * 32,'1');

		block47.body.immovable = true;

		block48 = platforms.create(c * 960 + 3 * 32, 3 * 32,'1');

		block48.body.immovable = true;

		block49 = platforms.create(c * 960 + 4 * 32, 4 * 32,'1');

		block49.body.immovable = true;

		block50 = platforms.create(c * 960 + 7 * 32, 4 * 32,'3b');

		block50.body.immovable = true;

		block51 = platforms.create(c * 960 + 10 * 32, 4 * 32,'2b');

		block51.body.immovable = true;

		block52 = platforms.create(c * 960 + 14 * 32, 4 * 32,'1');

		block52.body.immovable = true;

		block53 = platforms.create(c * 960 + 1 * 32, 5 * 32,'2b');

		block53.body.immovable = true;

		block54 = platforms.create(c * 960 + 9 * 32, 5 * 32,'4x4');

		block54.body.immovable = true;

		block55 = platforms.create(c * 960 + 6 * 32, 6 * 32,'1');

		block55.body.immovable = true;

		block56 = platforms.create(c * 960 + 5 * 32, 6.5 * 32,'1');

		block56.body.immovable = true;

		block57 = platforms.create(c * 960 + 7 * 32, 7 * 32,'1');

		block57.body.immovable = true;

		block58 = platforms.create(c * 960 + 12 * 32, 7 * 32,'1');

		block58.body.immovable = true;

		block59 = platforms.create(c * 960 + 8 * 32, 8 * 32,'1');

		block59.body.immovable = true;

		block60 = platforms.create(c * 960 + 11 * 32, 8 * 32,'1');

		block60.body.immovable = true;

		block61 = platforms.create(c * 960 + 0 * 32, 9 * 32,'2h');

		block61.body.immovable = true;

		block62 = platforms.create(c * 960 + 2.5 * 32, 9 * 32,'2h');

		block62.body.immovable = true;

		block63 = platforms.create(c * 960 + 5 * 32, 9 * 32,'4x4');

		block63.body.immovable = true;

		block64 = platforms.create(c * 960 + 7 * 32, 9 * 32,'4x4');

		block64.body.immovable = true;

		block65 = platforms.create(c * 960 + 9 * 32, 9 * 32,'4x4');

		block65.body.immovable = true;

		block66 = platforms.create(c * 960 + 11 * 32, 9 * 32,'2h');

		block66.body.immovable = true;

		block67 = platforms.create(c * 960 + 9 * 32, 11 * 32,'2h');

		block67.body.immovable = true;

		block68 = platforms.create(c * 960 + 11 * 32, 11 * 32,'4x4');

		block68.body.immovable = true;

		block69 = platforms.create(c * 960 + 14 * 32, 11 * 32,'1');

		block69.body.immovable = true;

		block70 = platforms.create(c * 960 + 1 * 32, 12 * 32,'2b');

		block70.body.immovable = true;

		block71 = platforms.create(c * 960 + 5 * 32, 12 * 32,'3h');

		block71.body.immovable = true;

		block72 = platforms.create(c * 960 + 1 * 32, 14 * 32,'4x4');

		block72.body.immovable = true;

		block73 = platforms.create(c * 960 + 9 * 32, 15 * 32,'3b');

		block73.body.immovable = true;

		block74 = platforms.create(c * 960 + 0 * 32, 17 * 32,'1');

		block74.body.immovable = true;

		block75 = platforms.create(c * 960 + 6 * 32, 17 * 32,'1');

		block75.body.immovable = true;

		block76 = platforms.create(c * 960 + 10 * 32, 17 * 32,'2h');

		block76.body.immovable = true;

		block77 = platforms.create(c * 960 + 0 * 32, 19 * 32,'2b');

		block77.body.immovable = true;

		block78 = platforms.create(c * 960 + 3.5 * 32, 19 * 32,'1');

		block78.body.immovable = true;

		block79 = platforms.create(c * 960 + 6 * 32, 19 * 32,'1');

		block79.body.immovable = true;

		block80 = platforms.create(c * 960 + 9 * 32, 19 * 32,'3b');

		block80.body.immovable = true;

		block81 = platforms.create(c * 960 + 14 * 32, 19 * 32,'1');

		block81.body.immovable = true;

		c += 0.5;

		timer1 = 0;

	},

	platform4: function()
	{
		var testen = this.schule();
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 3.5 * 32, 8 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 3.5 * 32, 8 * 32, 'booster');
		}
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 3.5 * 32, 11 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 3.5 * 32, 11 * 32, 'booster');
		}
		block82 = platforms.create(c * 960 + 0 * 32, 0 * 32,'1');

		block82.body.immovable = true;

		block83 = platforms.create(c * 960 + 3 * 32, 0 * 32,'2b');

		block83.body.immovable = true;

		block84 = platforms.create(c * 960 + 5 * 32, 0 * 32,'2b');

		block84.body.immovable = true;

		block85 = platforms.create(c * 960 + 4 * 32, 1 * 32,'2h');

		block85.body.immovable = true;

		block86 = platforms.create(c * 960 + 14 * 32, 0 * 32,'1');

		block86.body.immovable = true;

		block87 = platforms.create(c * 960 + 8 * 32, 2 * 32,'3b');

		block87.body.immovable = true;

		block88 = platforms.create(c * 960 + 11 * 32, 2 * 32,'2b');

		block88.body.immovable = true;

		block89 = platforms.create(c * 960 + 10 * 32, 3 * 32,'1');

		block89.body.immovable = true;

		block90 = platforms.create(c * 960 + 12 * 32, 4 * 32,'1');

		block90.body.immovable = true;

		block91 = platforms.create(c * 960 + 3 * 32, 5 * 32,'2b');

		block91.body.immovable = true;

		block92 = platforms.create(c * 960 + 8 * 32, 5 * 32,'3b');

		block92.body.immovable = true;

		block93 = platforms.create(c * 960 + 11 * 32, 5 * 32,'2b');

		block93.body.immovable = true;

		block94 = platforms.create(c * 960 + 13 * 32, 6 * 32,'1');

		block94.body.immovable = true;

		block95 = platforms.create(c * 960 + 1 * 32, 7 * 32,'2h');

		block95.body.immovable = true;

		block96 = platforms.create(c * 960 + 6 * 32, 7 * 32,'2h');

		block96.body.immovable = true;

		block97 = platforms.create(c * 960 + 11 * 32, 8 * 32,'1');

		block97.body.immovable = true;

		block98 = platforms.create(c * 960 + 0 * 32, 9 * 32,'4x4');

		block98.body.immovable = true;

		block99 = platforms.create(c * 960 + 3 * 32, 9.5 * 32,'2b');

		block99.body.immovable = true;

		block100 = platforms.create(c * 960 + 6 * 32, 9 * 32,'4x4');

		block100.body.immovable = true;

		block101 = platforms.create(c * 960 + 10 * 32, 9 * 32,'2h');

		block101.body.immovable = true;

		block102 = platforms.create(c * 960 + 11 * 32, 9 * 32,'4x4');

		block102.body.immovable = true;

		block103 = platforms.create(c * 960 + 13 * 32, 9 * 32,'4x4');

		block103.body.immovable = true;

		block104 = platforms.create(c * 960 + 1 * 32, 11 * 32,'2h');

		block104.body.immovable = true;

		block105 = platforms.create(c * 960 + 6 * 32, 11 * 32,'2h');

		block105.body.immovable = true;

		block106 = platforms.create(c * 960 + 14 * 32, 12 * 32,'1');

		block106.body.immovable = true;

		block107 = platforms.create(c * 960 + 3 * 32, 14 * 32,'2b');

		block107.body.immovable = true;

		block108 = platforms.create(c * 960 + 10 * 32, 14 * 32,'3b');

		block108.body.immovable = true;

		block109 = platforms.create(c * 960 + 14 * 32, 15 * 32,'3h');

		block109.body.immovable = true;

		block110 = platforms.create(c * 960 + 7 * 32, 16 * 32,'2b');

		block110.body.immovable = true;

		block111 = platforms.create(c * 960 + 11.5 * 32, 16 * 32,'2h');

		block111.body.immovable = true;

		block112 = platforms.create(c * 960 + 4 * 32, 17 * 32,'1');

		block112.body.immovable = true;

		block113 = platforms.create(c * 960 + 0 * 32, 19 * 32,'1');

		block113.body.immovable = true;

		block114 = platforms.create(c * 960 + 3 * 32, 19 * 32,'2b');

		block114.body.immovable = true;

		block115 = platforms.create(c * 960 + 7 * 32, 19 * 32,'1');

		block115.body.immovable = true;

		block116 = platforms.create(c * 960 + 10 * 32, 19 * 32,'2b');

		block116.body.immovable = true;

		block117 = platforms.create(c * 960 + 12 * 32, 19 * 32,'2b');

		block117.body.immovable = true;

		c += 0.5;

		timer1 = 0;
	},

	platform5: function ()
	{
		var testen = this.schule();
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 10 * 32, 7 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 10 * 32, 7 * 32, 'booster');
		}
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 3 * 32, 14 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 3 * 32, 14 * 32, 'booster');
		}
		block118 = platforms.create(c * 960 + 0 * 32, 0 * 32,'2b');

		block118.body.immovable = true;

		block119 = platforms.create(c * 960 + 3.5 * 32, 0 * 32,'1');

		block119.body.immovable = true;

		block120 = platforms.create(c * 960 + 6 * 32, 0 * 32,'2b');

		block120.body.immovable = true;

		block121 = platforms.create(c * 960 + 12 * 32, 0 * 32,'1');

		block121.body.immovable = true;

		block122 = platforms.create(c * 960 + 10 * 32, 2 * 32,'1');

		block122.body.immovable = true;

		block123 = platforms.create(c * 960 + 3 * 32, 3 * 32,'3b');

		block123.body.immovable = true;

		block124 = platforms.create(c * 960 + 13 * 32, 3 * 32,'1');

		block124.body.immovable = true;

		block125 = platforms.create(c * 960 + 1 * 32, 4 * 32,'1');

		block125.body.immovable = true;

		block126 = platforms.create(c * 960 + 6 * 32, 4 * 32,'1');

		block126.body.immovable = true;

		block127 = platforms.create(c * 960 + 7 * 32, 5 * 32,'1');

		block127.body.immovable = true;

		block128 = platforms.create(c * 960 + 11 * 32, 5 * 32,'3h');

		block128.body.immovable = true;

		block129 = platforms.create(c * 960 + 2 * 32, 6 * 32,'2b');

		block129.body.immovable = true;

		block130 = platforms.create(c * 960 + 8 * 32, 6* 32,'1');

		block130.body.immovable = true;

		block131 = platforms.create(c * 960 + 9 * 32, 7 * 32,'1');

		block131.body.immovable = true;

		block132 = platforms.create(c * 960 + 0 * 32, 8 * 32,'2h');

		block132.body.immovable = true;

		block133 = platforms.create(c * 960 + 3 * 32, 8 * 32,'4x4');

		block133.body.immovable = true;

		block134 = platforms.create(c * 960 + 10 * 32, 8 * 32,'1');

		block134.body.immovable = true;

		block135 = platforms.create(c * 960 + 11 * 32, 8 * 32,'3h');

		block135.body.immovable = true;

		block136 = platforms.create(c * 960 + 5 * 32, 9 * 32,'4x4');

		block136.body.immovable = true;

		block137 = platforms.create(c * 960 + 7 * 32, 9 * 32,'2h');

		block137.body.immovable = true;

		block138 = platforms.create(c * 960 + 14 * 32, 9 * 32,'2h');

		block138.body.immovable = true;

		block139 = platforms.create(c * 960 + 3 * 32, 11.5 * 32,'1');

		block139.body.immovable = true;

		block140 = platforms.create(c * 960 + 4 * 32, 12 * 32,'1');

		block140.body.immovable = true;

		block141 = platforms.create(c * 960 + 5 * 32, 13 * 32,'1');

		block141.body.immovable = true;

		block142 = platforms.create(c * 960 + 8 * 32, 13 * 32,'1');

		block142.body.immovable = true;

		block143 = platforms.create(c * 960 + 2 * 32, 13.5 * 32,'2h');

		block143.body.immovable = true;

		block144 = platforms.create(c * 960 + 5 * 32, 15 * 32,'2b');

		block144.body.immovable = true;

		block145 = platforms.create(c * 960 + 12 * 32, 15 * 32,'3h');

		block145.body.immovable = true;

		block146 = platforms.create(c * 960 + 4 * 32, 16 * 32,'1');

		block146.body.immovable = true;

		block147 = platforms.create(c * 960 + 3 * 32, 15.5 * 32,'1');

		block147.body.immovable = true;

		block148 = platforms.create(c * 960 + 9 * 32, 17 * 32,'1');

		block148.body.immovable = true;

		block149 = platforms.create(c * 960 + 1 * 32, 19 * 32,'3b');

		block149.body.immovable = true;

		block150 = platforms.create(c * 960 + 4 * 32, 19 * 32,'1');

		block150.body.immovable = true;

		block151 = platforms.create(c * 960 + 6.5 * 32, 19 * 32,'1');

		block151.body.immovable = true;

		block152 = platforms.create(c * 960 + 9 * 32, 19 * 32,'3b');

		block152.body.immovable = true;

		block153 = platforms.create(c * 960 + 14 * 32, 19 * 32,'1');

		block153.body.immovable = true;

		c += 0.5;

		timer1 = 0;
	},

	platform6: function()
	{
		var testen = this.schule();
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 9 * 32, 4 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 9 * 32, 4 * 32, 'booster');
		}
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 9 * 32, 15 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 9 * 32, 15 * 32, 'booster');
		}
		block154 = platforms.create(c * 960 + 0 * 32, 0 * 32,'1');

		block154.body.immovable = true;

		block155 = platforms.create(c * 960 + 5 * 32, 0 * 32,'2b');

		block155.body.immovable = true;

		block156 = platforms.create(c * 960 + 9 * 32, 0 * 32,'1');

		block156.body.immovable = true;

		block157 = platforms.create(c * 960 + 14 * 32, 0 * 32,'1');

		block157.body.immovable = true;

		block158 = platforms.create(c * 960 + 11.5 * 32, 1 * 32,'1');

		block158.body.immovable = true;

		block159 = platforms.create(c * 960 + 2 * 32, 2 * 32,'1');

		block159.body.immovable = true;

		block160 = platforms.create(c * 960 + 5 * 32, 3 * 32,'1');

		block160.body.immovable = true;

		block161 = platforms.create(c * 960 + 4 * 32, 4 * 32,'1');

		block161.body.immovable = true;

		block162 = platforms.create(c * 960 + 3 * 32, 5 * 32,'1');

		block162.body.immovable = true;

		block163 = platforms.create(c * 960 + 2 * 32, 6 * 32,'1');

		block163.body.immovable = true;

		block164 = platforms.create(c * 960 + 9 * 32, 5 * 32,'3h');

		block164.body.immovable = true;

		block165 = platforms.create(c * 960 + 9 * 32, 8 * 32,'3h');

		block165.body.immovable = true;

		block166 = platforms.create(c * 960 + 9 * 32, 11 * 32,'2h');

		block166.body.immovable = true;

		block167 = platforms.create(c * 960 + 9 * 32, 13 * 32,'2h');

		block167.body.immovable = true;

		block168 = platforms.create(c * 960 + 0 * 32, 8 * 32,'2h');

		block168.body.immovable = true;

		block169 = platforms.create(c * 960 + 0 * 32, 10 * 32,'2h');

		block169.body.immovable = true;

		block170 = platforms.create(c * 960 + 3 * 32, 9.5 * 32,'3b');

		block170.body.immovable = true;

		block171 = platforms.create(c * 960 + 7 * 32, 9.5 * 32,'1');

		block171.body.immovable = true;

		block172 = platforms.create(c * 960 + 14 * 32, 9 * 32,'2h');

		block172.body.immovable = true;

		block173 = platforms.create(c * 960 + 2 * 32, 13 * 32,'1');

		block173.body.immovable = true;

		block174 = platforms.create(c * 960 + 3 * 32, 14 * 32,'1');

		block174.body.immovable = true;

		block175 = platforms.create(c * 960 + 4 * 32, 15 * 32,'1');

		block175.body.immovable = true;

		block176 = platforms.create(c * 960 + 0 * 32, 15 * 32,'1');

		block176.body.immovable = true;

		block177 = platforms.create(c * 960 + 5 * 32, 16 * 32,'1');

		block177.body.immovable = true;

		block178 = platforms.create(c * 960 + 2 * 32, 17 * 32,'1');

		block178.body.immovable = true;

		block179 = platforms.create(c * 960 + 0 * 32, 19 * 32,'1');

		block179.body.immovable = true;

		block180 = platforms.create(c * 960 + 5 * 32, 19 * 32,'2b');

		block180.body.immovable = true;

		block181 = platforms.create(c * 960 + 11.5 * 32, 18 * 32,'1');

		block181.body.immovable = true;

		block182 = platforms.create(c * 960 + 9 * 32, 19 * 32,'1');

		block182.body.immovable = true;

		block183= platforms.create(c * 960 + 14 * 32, 19 * 32,'1');

		block183.body.immovable = true;

		c += 0.5;

		timer1 = 0;
	},

	platform7: function ()
	{
		var testen = this.schule();
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 7 * 32, 8 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 7 * 32, 8 * 32, 'booster');
		}
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 7 * 32, 11 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 7 * 32, 11 * 32, 'booster');
		}
		block184= platforms.create(c * 960 + 0 * 32, 0 * 32,'1');

		block184.body.immovable = true;

		block185= platforms.create(c * 960 + 6 * 32, 0 * 32,'2b');

		block185.body.immovable = true;

		block186= platforms.create(c * 960 + 10 * 32, 0 * 32,'3b');

		block186.body.immovable = true;

		block187= platforms.create(c * 960 + 13 * 32, 0 * 32,'2b');

		block187.body.immovable = true;

		block188= platforms.create(c * 960 + 2 * 32, 2 * 32,'1');

		block188.body.immovable = true;

		block189= platforms.create(c * 960 + 13 * 32, 2.5 * 32,'1');

		block189.body.immovable = true;

		block190= platforms.create(c * 960 + 12 * 32, 3 * 32,'3h');

		block190.body.immovable = true;

		block191= platforms.create(c * 960 + 5 * 32, 4 * 32,'1');

		block191.body.immovable = true;

		block192= platforms.create(c * 960 + 11 * 32, 6 * 32,'2h');

		block192.body.immovable = true;

		block193= platforms.create(c * 960 + 10 * 32, 8 * 32,'1');

		block193.body.immovable = true;

		block194= platforms.create(c * 960 + 0 * 32, 9 * 32,'4x4');

		block194.body.immovable = true;

		block195= platforms.create(c * 960 + 9 * 32, 9 * 32,'1');

		block195.body.immovable = true;

		block196= platforms.create(c * 960 + 10 * 32, 9 * 32,'2h');

		block196.body.immovable = true;

		block197= platforms.create(c * 960 + 13 * 32, 9 * 32,'4x4');

		block197.body.immovable = true;

		block198= platforms.create(c * 960 + 6 * 32, 9.5 * 32,'3b');

		block198.body.immovable = true;

		block199= platforms.create(c * 960 + 5 * 32, 10 * 32,'1');

		block199.body.immovable = true;

		block200= platforms.create(c * 960 + 4 * 32, 11 * 32,'1');

		block200.body.immovable = true;

		block201= platforms.create(c * 960 + 10 * 32, 11 * 32,'3h');

		block201.body.immovable = true;

		block202= platforms.create(c * 960 + 3 * 32, 12 * 32,'2h');

		block202.body.immovable = true;

		block203= platforms.create(c * 960 + 2 * 32, 14 * 32,'3h');

		block203.body.immovable = true;

		block204= platforms.create(c * 960 + 1 * 32, 16.5 * 32,'1');

		block204.body.immovable = true;

		block205= platforms.create(c * 960 + 0 * 32, 19 * 32,'3b');

		block205.body.immovable = true;

		block206= platforms.create(c * 960 + 3 * 32, 19 * 32,'3b');

		block206.body.immovable = true;

		block207= platforms.create(c * 960 + 9 * 32, 19 * 32,'2b');

		block207.body.immovable = true;

		block208= platforms.create(c * 960 + 14 * 32, 19 * 32,'1');

		block208.body.immovable = true;

		c += 0.5;

		timer1 = 0;
	},

	platform8: function ()
	{
		var testen = this.schule();

		block1 = platforms.create(c * 960, 19 * 32,'2b');

		block1.body.immovable = true;

		block2 = platforms.create(c * 960 + 5 * 32, 19 * 32,'2b');

		block2.body.immovable = true;

		block3 = platforms.create(c * 960 + 12 * 32, 19 * 32,'1');

		block3.body.immovable = true;

		block4 = platforms.create(c * 960 + 3 * 32, 18 * 32,'1');

		block4.body.immovable = true;

		block5 = platforms.create(c * 960 + 8 * 32, 18 * 32,'1');

		block5.body.immovable = true;

		block6 = platforms.create(c * 960 + 13 * 32, 17 * 32,'2b');

		block6.body.immovable = true;

		block7 = platforms.create(c * 960 + 4 * 32, 16 * 32,'2b');

		block7.body.immovable = true;

		block8 = platforms.create(c * 960 + 0 * 32, 14 * 32,'2h');

		block8.body.immovable = true;

		block9 = platforms.create(c * 960 + 8 * 32, 15 * 32,'1');

		block9.body.immovable = true;

		block10 = platforms.create(c * 960 + 12 * 32, 15 * 32,'1');

		block10.body.immovable = true;

		block11 = platforms.create(c * 960 + 3 * 32, 14 * 32,'1');

		block11.body.immovable = true;

		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 4 * 32, 13 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 4 * 32, 13 * 32, 'booster');
		}

		block12 = platforms.create(c * 960 + 7 * 32, 12 * 32,'2b');

		block12.body.immovable = true;

		block13 = platforms.create(c * 960 + 4 * 32, 9 * 32,'3h');

		block13.body.immovable = true;

		block14 = platforms.create(c * 960 + 12 * 32, 11 * 32,'3b');

		block14.body.immovable = true;

		block15 = platforms.create(c * 960 + 1 * 32, 10* 32,'3b');

		block15.body.immovable = true;

		block16 = platforms.create(c * 960 + 6 * 32, 9 * 32,'2h');

		block16.body.immovable = true;

		block17 = platforms.create(c * 960 + 7 * 32, 9 * 32,'1');

		block17.body.immovable = true;

		block18 = platforms.create(c * 960 + 8 * 32, 9 * 32,'3b');

		block18.body.immovable = true;

		block19 = platforms.create(c * 960 + 4 * 32, 7 * 32,'2h');

		block19.body.immovable = true;

		block20 = platforms.create(c * 960 + 1 * 32, 6 * 32,'1');

		block20.body.immovable = true;

		block21 = platforms.create(c * 960 + 8 * 32, 6 * 32,'2b');

		block21.body.immovable = true;

		block22 = platforms.create(c * 960 + 13 * 32, 6 * 32,'2b');

		block22.body.immovable = true;

		block23 = platforms.create(c * 960 + 0 * 32, 4 * 32,'2h');

		block23.body.immovable = true;

		block24 = platforms.create(c * 960 + 6 * 32, 5 * 32,'1');

		block24.body.immovable = true;

		block25 = platforms.create(c * 960 + 11 * 32, 4 * 32,'2h');

		block25.body.immovable = true;

		block26 = platforms.create(c * 960 + 5 * 32, 4 * 32,'2b');

		block26.body.immovable = true;

		block27 = platforms.create(c * 960 + 3 * 32, 2 * 32,'2h');

		block27.body.immovable = true;

		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 6 * 32, 3 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 6 * 32, 3 * 32, 'booster');
		}

		block28 = platforms.create(c * 960 + 7 * 32, 2 * 32,'1');

		block28.body.immovable = true;

		block29 = platforms.create(c * 960 + 1 * 32, 1 * 32,'1');

		block29.body.immovable = true;

		block30 = platforms.create(c * 960 + 12 * 32, 0 * 32,'2h');

		block30.body.immovable = true;

		block31 = platforms.create(c * 960 + 0 * 32, 0 * 32,'3b');

		block31.body.immovable = true;

		block32 = platforms.create(c * 960 + 3 * 32, 0 * 32,'2b');

		block32.body.immovable = true;

		block33 = platforms.create(c * 960 + 9 * 32, 0 * 32,'2b');

		block33.body.immovable = true;

		block33 = platforms.create(c * 960 + 10 * 32, 19 * 32,'1');

		block33.body.immovable = true;

		c += 0.5;

		timer1 = 0;

		//timer2.reset();

	},
	platform9: function ()
	{
		block209= platforms.create(c * 960 + 1 * 32, 1 * 32,'1');

		block209.body.immovable = true;

		block210= platforms.create(c * 960 + 0 * 32, 7 * 32,'2b');

		block210.body.immovable = true;

		block211= platforms.create(c * 960 + 0 * 32, 12 * 32,'2b');

		block211.body.immovable = true;

		block212= platforms.create(c * 960 + 1 * 32, 17 * 32,'1');

		block212.body.immovable = true;

		block213= platforms.create(c * 960 + 3* 32, 1 * 32,'1');

		block213.body.immovable = true;

		block214= platforms.create(c * 960 + 3 * 32, 3 * 32,'1');

		block214.body.immovable = true;

		block215= platforms.create(c * 960 + 3 * 32, 10 * 32,'2h');

		block215.body.immovable = true;

		block216= platforms.create(c * 960 + 3 * 32, 16 * 32,'1');

		block216.body.immovable = true;

		block217= platforms.create(c * 960 + 3 * 32, 18 * 32,'1');

		block217.body.immovable = true;

		block218= platforms.create(c * 960 + 4 * 32, 0 * 32,'1');

		block218.body.immovable = true;

		block219= platforms.create(c * 960 + 4 * 32, 19 * 32,'1');

		block219.body.immovable = true;

		block220= platforms.create(c * 960 + 5 * 32, 1 * 32,'3h');

		block220.body.immovable = true;

		block221= platforms.create(c * 960 + 5 * 32, 5 * 32,'2b');

		block221.body.immovable = true;

		block222= platforms.create(c * 960 + 5 * 32, 7 * 32,'1');

		block222.body.immovable = true;

		block223= platforms.create(c * 960 + 5 * 32, 12 * 32,'1');

		block223.body.immovable = true;

		block224= platforms.create(c * 960 + 5 * 32, 14 * 32,'2b');

		block224.body.immovable = true;

		block225= platforms.create(c * 960 + 5 * 32, 18 * 32,'1');

		block225.body.immovable = true;

		block226= platforms.create(c * 960 + 6 * 32, 2 * 32,'1');

		block226.body.immovable = true;

		block227= platforms.create(c * 960 + 13 * 32, 9 * 32,'2h');

		block227.body.immovable = true;

		block228= platforms.create(c * 960 + 7 * 32, 1 * 32,'3h');

		block228.body.immovable = true;

		block229= platforms.create(c * 960 + 7 * 32, 10 * 32,'3b');

		block229.body.immovable = true;

		block230= platforms.create(c * 960 + 7 * 32, 18 * 32,'1');

		block230.body.immovable = true;

		block231= platforms.create(c * 960 + 6 * 32, 19 * 32,'1');

		block231.body.immovable = true;

		block232= platforms.create(c * 960 + 11 * 32, 7 * 32,'2h');

		block232.body.immovable = true;

		block233= platforms.create(c * 960 + 8 * 32, 12 * 32,'2h');

		block233.body.immovable = true;

		block234= platforms.create(c * 960 + 8 * 32, 7 * 32,'2h');

		block234.body.immovable = true;

		block235= platforms.create(c * 960 + 9 * 32, 1 * 32,'3h');

		block235.body.immovable = true;

		block236= platforms.create(c * 960 + 9 * 32, 16 * 32,'1');

		block236.body.immovable = true;

		block237= platforms.create(c * 960 + 9 * 32, 18 * 32,'1');

		block237.body.immovable = true;

		block238= platforms.create(c * 960 + 10 * 32, 2 * 32,'1');

		block238.body.immovable = true;

		block239= platforms.create(c * 960 + 10 * 32, 19 * 32,'1');

		block239.body.immovable = true;

		block240= platforms.create(c * 960 + 11 * 32, 1 * 32,'3h');

		block240.body.immovable = true;

		block241= platforms.create(c * 960 + 11 * 32, 18 * 32,'2h');

		block241.body.immovable = true;

		block242= platforms.create(c * 960 + 11 * 32, 13 * 32,'2h');

		block242.body.immovable = true;

		block243= platforms.create(c * 960 + 11 * 32, 16 * 32,'1');

		block243.body.immovable = true;

		block244= platforms.create(c * 960 + 11 * 32, 18 * 32,'1');

		block244.body.immovable = true;

		block245= platforms.create(c * 960 + 12 * 32, 0 * 32,'1');

		block245.body.immovable = true;

		block246= platforms.create(c * 960 + 12 * 32, 17 * 32,'1');

		block246.body.immovable = true;

		block247= platforms.create(c * 960 + 13 * 32, 1 * 32,'1');

		block247.body.immovable = true;

		block248= platforms.create(c * 960 + 13 * 32, 16 * 32,'1');

		block248.body.immovable = true;

		block249= platforms.create(c * 960 + 13 * 32, 18 * 32,'1');

		block249.body.immovable = true;

		c += 0.5;

		timer1 = 0;
	},



	platform10: function ()
	{
		block250= platforms.create(c * 960 + 0 * 32, 0 * 32,'3b');

		block250.body.immovable = true;

		block251= platforms.create(c * 960 + 3 * 32, 0 * 32,'3b');

		block251.body.immovable = true;

		block252= platforms.create(c * 960 + 6 * 32, 0 * 32,'2b');

		block252.body.immovable = true;

		block253= platforms.create(c * 960 + 9 * 32, 0 * 32,'3b');

		block253.body.immovable = true;

		block254= platforms.create(c * 960 + 12 * 32, 0 * 32,'3b');

		block254.body.immovable = true;

		block255= platforms.create(c * 960 + 0 * 32, 19 * 32,'3b');

		block255.body.immovable = true;

		block256= platforms.create(c * 960 + 3 * 32, 19 * 32,'3b');

		block256.body.immovable = true;

		block257= platforms.create(c * 960 + 6 * 32, 19 * 32,'2b');

		block257.body.immovable = true;

		block258= platforms.create(c * 960 + 9 * 32, 19 * 32,'3b');

		block258.body.immovable = true;

		block259= platforms.create(c * 960 + 12 * 32, 19 * 32,'3b');

		block259.body.immovable = true;

		block260= platforms.create(c * 960 + 8 * 32, 0 * 32,'3h');

		block260.body.immovable = true;

		block261= platforms.create(c * 960 + 8 * 32, 3 * 32,'3h');

		block261.body.immovable = true;

		block262= platforms.create(c * 960 + 8 * 32, 6 * 32,'2h');

		block262.body.immovable = true;

		block263= platforms.create(c * 960 + 8 * 32, 17 * 32,'3h');

		block263.body.immovable = true;

		block264= platforms.create(c * 960 + 8 * 32, 14 * 32,'3h');

		block264.body.immovable = true;

		block265= platforms.create(c * 960 + 8 * 32, 12 * 32,'2h');

		block265.body.immovable = true;

		block266= platforms.create(c * 960 + 10 * 32, 6 * 32,'2b');

		block266.body.immovable = true;

		block267= platforms.create(c * 960 + 10 * 32, 13 * 32,'2b');

		block267.body.immovable = true;

		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 10 * 32, 7 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 10 * 32, 7 * 32, 'booster');
		}
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 10 * 32, 12 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 10 * 32, 12 * 32, 'booster');
		}

		c += 0.5;

		timer1 = 0;
	},

	platform11: function ()
	{
		block268= platforms.create(c * 960 + 0 * 32, 0 * 32,'1');

		block268.body.immovable = true;

		block269= platforms.create(c * 960 + 0 * 32, 10 * 32,'3b');

		block269.body.immovable = true;

		block270= platforms.create(c * 960 + 0 * 32, 19 * 32,'1');

		block270.body.immovable = true;

		block271= platforms.create(c * 960 + 2 * 32, 1 * 32,'2b');

		block271.body.immovable = true;

		block272= platforms.create(c * 960 + 4* 32, 0 * 32,'1');

		block272.body.immovable = true;

		block273= platforms.create(c * 960 + 5 * 32, 1 * 32,'1');

		block273.body.immovable = true;

		block274= platforms.create(c * 960 + 7 * 32, 2 * 32,'1');

		block274.body.immovable = true;

		block275= platforms.create(c * 960 + 9 * 32, 1 * 32,'1');

		block275.body.immovable = true;

		block276= platforms.create(c * 960 + 10 * 32, 0 * 32,'1');

		block276.body.immovable = true;

		block277= platforms.create(c * 960 + 11 * 32, 1 * 32,'2b');

		block277.body.immovable = true;

		block278= platforms.create(c * 960 + 14 * 32, 0 * 32,'1');

		block278.body.immovable = true;

		block279= platforms.create(c * 960 + 2 * 32, 4 * 32,'3b');

		block279.body.immovable = true;

		block280= platforms.create(c * 960 + 2 * 32, 10 * 32,'3b');

		block280.body.immovable = true;

		block281= platforms.create(c * 960 + 6 * 32, 7 * 32,'3b');

		block281.body.immovable = true;

		block282= platforms.create(c * 960 + 3 * 32, 9 * 32,'4x4');

		block282.body.immovable = true;

		block283= platforms.create(c * 960 + 10 * 32, 9 * 32,'4x4');

		block283.body.immovable = true;

		block284= platforms.create(c * 960 + 12 * 32, 10 * 32,'3b');

		block284.body.immovable = true;

		block285= platforms.create(c * 960 + 6 * 32, 13 * 32,'3b');

		block285.body.immovable = true;

		block286= platforms.create(c * 960 + 2 * 32, 15 * 32,'3b');

		block286.body.immovable = true;

		block287= platforms.create(c * 960 + 10 * 32, 15 * 32,'3b');

		block287.body.immovable = true;

		block288= platforms.create(c * 960 + 2 * 32, 18 * 32,'2b');

		block288.body.immovable = true;

		block289= platforms.create(c * 960 + 4 * 32, 19 * 32,'1');

		block289.body.immovable = true;

		block290= platforms.create(c * 960 + 5 * 32, 18 * 32,'1');

		block290.body.immovable = true;

		block291= platforms.create(c * 960 + 7 * 32, 17 * 32,'1');

		block291.body.immovable = true;

		block292= platforms.create(c * 960 + 9 * 32, 18 * 32,'1');

		block292.body.immovable = true;

		block293= platforms.create(c * 960 + 8 * 32, 19 * 32,'1');

		block293.body.immovable = true;

		block294= platforms.create(c * 960 + 11 * 32, 18 * 32,'2b');

		block294.body.immovable = true;

		block295= platforms.create(c * 960 + 14 * 32, 19 * 32,'1');

		block295.body.immovable = true;

		block296= platforms.create(c * 960 + 10 * 32, 19 * 32,'1');

		block296.body.immovable = true;

		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 10 * 32, 1 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 10 * 32, 1 * 32, 'booster');
		}

		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 14 * 32, 9 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 14 * 32, 9 * 32, 'booster');
		}
		if (schule == true) {
			klausur1 = klausuren.create(c * 960 + 7 * 32, 12 * 32, 'klausur');
		} else if (schule == false) {
			boost1 = booster.create(c * 960 + 7 * 32, 12 * 32, 'booster');
		}

		c += 0.5;

		timer1 = 0;
	},

	destroyPlatform2Loader:	function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform2, this);
	},

	destroyPlatform3Loader:	function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform3, this);
	},

	destroyPlatform4Loader:	function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform4, this);
	},

	destroyPlatform5Loader:	function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform5, this);
	},

	destroyPlatform6Loader:	function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform6, this);
	},

	destroyPlatform7Loader:	function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform7, this);
	},

	destroyPlatform8Loader: function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform8, this);
	},
	destroyPlatform9Loader: function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform9, this);
	},
	destroyPlatform10Loader: function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform10, this);
	},
	destroyPlatform11Loader: function ()
	{
		game.time.events.add(Phaser.Timer.SECOND * 12, this.destroyPlatform11, this);
	},
	destroyPlatform8: function ()
	{
		if (player3.x - platform8.x >= 480)
		{
			platform8.destroy();
		}
	},




	destroyPlatform2:	function ()
	{
		if (player3.x - block1.x >= 480)
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

	destroyPlatform3: function ()
	{
		if (player3.x - block40.x >= 480)
		{
			block40.destroy();
			block41.destroy();
			block42.destroy();
			block43.destroy();
			block44.destroy();
			block45.destroy();
			block46.destroy();
			block47.destroy();
			block48.destroy();
			block49.destroy();
			block50.destroy();
			block51.destroy();
			block52.destroy();
			block53.destroy();
			block54.destroy();
			block55.destroy();
			block56.destroy();
			block57.destroy();
			block58.destroy();
			block59.destroy();
			block60.destroy();
			block61.destroy();
			block62.destroy();
			block63.destroy();
			block64.destroy();
			block65.destroy();
			block66.destroy();
			block67.destroy();
			block68.destroy();
			block69.destroy();
			block70.destroy();
			block71.destroy();
			block72.destroy();
			block73.destroy();
			block74.destroy();
			block75.destroy();
			block76.destroy();
			block77.destroy();
			block78.destroy();
			block79.destroy();
			block80.destroy();
			block81.destroy();
		}
	},

	destroyPlatform4: function ()
	{
		if (player3.x - block82.x >= 480)
		{
			block82.destroy();
			block83.destroy();
			block84.destroy();
			block85.destroy();
			block86.destroy();
			block87.destroy();
			block88.destroy();
			block89.destroy();
			block90.destroy();
			block91.destroy();
			block92.destroy();
			block93.destroy();
			block94.destroy();
			block95.destroy();
			block96.destroy();
			block97.destroy();
			block98.destroy();
			block99.destroy();
			block100.destroy();
			block101.destroy();
			block102.destroy();
			block103.destroy();
			block104.destroy();
			block105.destroy();
			block106.destroy();
			block107.destroy();
			block108.destroy();
			block109.destroy();
			block110.destroy();
			block111.destroy();
			block112.destroy();
			block113.destroy();
			block114.destroy();
			block115.destroy();
			block116.destroy();
			block117.destroy();
		}
	},

	destroyPlatform5: function ()
	{
		if (player3.x - block118.x >= 480)
		{
			block118.destroy();
			block119.destroy();
			block120.destroy();
			block121.destroy();
			block122.destroy();
			block123.destroy();
			block124.destroy();
			block125.destroy();
			block126.destroy();
			block127.destroy();
			block128.destroy();
			block129.destroy();
			block130.destroy();
			block131.destroy();
			block132.destroy();
			block133.destroy();
			block134.destroy();
			block135.destroy();
			block136.destroy();
			block137.destroy();
			block138.destroy();
			block139.destroy();
			block140.destroy();
			block141.destroy();
			block142.destroy();
			block143.destroy();
			block144.destroy();
			block145.destroy();
			block146.destroy();
			block147.destroy();
			block148.destroy();
			block149.destroy();
			block150.destroy();
			block151.destroy();
			block152.destroy();
			block153.destroy();
		}
	},



	destroyPlatform6: function ()
	{
		if (player3.x - block154.x >= 480)
		{
			block154.destroy();
			block155.destroy();
			block156.destroy();
			block157.destroy();
			block158.destroy();
			block159.destroy();
			block160.destroy();
			block161.destroy();
			block162.destroy();
			block163.destroy();
			block164.destroy();
			block165.destroy();
			block166.destroy();
			block167.destroy();
			block168.destroy();
			block169.destroy();
			block170.destroy();
			block171.destroy();
			block172.destroy();
			block173.destroy();
			block174.destroy();
			block175.destroy();
			block176.destroy();
			block177.destroy();
			block178.destroy();
			block179.destroy();
			block180.destroy();
			block181.destroy();
			block182.destroy();
			block183.destroy();
		}
	},

	destroyPlatform7: function ()
	{
		if (player3.x - block184.x >= 480)
		{
			block184.destroy();
			block185.destroy();
			block186.destroy();
			block187.destroy();
			block189.destroy();
			block190.destroy();
			block191.destroy();
			block192.destroy();
			block193.destroy();
			block194.destroy();
			block195.destroy();
			block196.destroy();
			block197.destroy();
			block198.destroy();
			block199.destroy();
			block200.destroy();
			block201.destroy();
			block202.destroy();
			block202.destroy();
			block203.destroy();
			block204.destroy();
			block205.destroy();
			block206.destroy();
			block207.destroy();
			block208.destroy();
		}
	},

	destroyPlatform9: function ()
	{
		if (player3.x - block209.x >= 480)
		{
			block209.destroy();
			block210.destroy();
			block211.destroy();
			block212.destroy();
			block213.destroy();
			block214.destroy();
			block215.destroy();
			block216.destroy();
			block217.destroy();
			block218.destroy();
			block219.destroy();
			block220.destroy();
			block221.destroy();
			block222.destroy();
			block223.destroy();
			block224.destroy();
			block225.destroy();
			block226.destroy();
			block227.destroy();
			block228.destroy();
			block229.destroy();
			block230.destroy();
			block231.destroy();
			block232.destroy();
			block233.destroy();
			block234.destroy();
			block235.destroy();
			block236.destroy();
			block237.destroy();
			block238.destroy();
			block239.destroy();
			block240.destroy();
			block241.destroy();
			block242.destroy();
			block243.destroy();
			block244.destroy();
			block245.destroy();
			block246.destroy();
			block247.destroy();
			block248.destroy();
			block249.destroy();
		}
	},

	destroyPlatform10: function ()
	{
		if (player3.x - block250.x >= 480)
		{
			block250.destroy();
			block251.destroy();
			block252.destroy();
			block253.destroy();
			block254.destroy();
			block255.destroy();
			block256.destroy();
			block257.destroy();
			block258.destroy();
			block259.destroy();
			block260.destroy();
			block261.destroy();
			block262.destroy();
			block263.destroy();
			block264.destroy();
			block265.destroy();
			block266.destroy();
			block267.destroy();
		}
	},

	destroyPlatform11: function ()
	{
		if (player3.x - block268.x >= 480)
		{
			block268.destroy();
			block269.destroy();
			block270.destroy();
			block271.destroy();
			block272.destroy();
			block273.destroy();
			block274.destroy();
			block275.destroy();
			block276.destroy();
			block277.destroy();
			block278.destroy();
			block279.destroy();
			block280.destroy();
			block281.destroy();
			block282.destroy();
			block283.destroy();
			block284.destroy();
			block285.destroy();
			block286.destroy();
			block287.destroy();
			block288.destroy();
			block289.destroy();
			block290.destroy();
			block291.destroy();
			block292.destroy();
			block293.destroy();
			block294.destroy();
			block295.destroy();
			block296.destroy();
		}
	},

	Boost: function(player, boost)
	{
		if (schule == false) {
			boost.kill();
			playerSpeed += 20
			playerJump += 50
			this.time.events.add(Phaser.Timer.SECOND * 3, function(){
				playerSpeed -= 20
				playerJump -= 50
			});
		}
	},
	Stress: function(player, klausur) {
		if (schule == true) {
			klausur.kill();
			playerSpeed -= 100
			playerJump -= 25
			this.time.events.add(Phaser.Timer.SECOND * 3, function(){
				playerSpeed += 100
				playerJump += 25
			});
		}
	},


};
