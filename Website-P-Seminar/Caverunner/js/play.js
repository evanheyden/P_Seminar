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
		navigator.geolocation.getCurrentPosition(position=>{latitude = position.coords.latitude; longitude = position.coords.longitude;});

	},
	schule: function() {
		if (latitude > 48.106 && latitude < 48.114 && longitude > 11.670 && longitude < 11.678) {
			var schule = true;
		} else {
			var schule = false;
		}

	},

	create: function () {
		var location = this.getlocation();
		this.game.time.events.repeat(Phaser.Timer.SECOND * 6, 10000, this.timer1Up, this);

		//hier werden die Grenzen der Welt gesetzt:
		this.game.world.setBounds(0, 0, 960*100000000000, 640);

		for (var i = 0; i < 1000; i++)
		{
			this.game.add.sprite(4000*i, 0, 'background');
		}
		c = 1;

		timer1 = 1;

		typeof(timer1)==='double';

		timer2 = this.game.time.create();
		timer2.start();

		platforms = this.game.add.group();

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

game.physics.arcade.enable(player1);
game.physics.arcade.enable(player2);
game.physics.arcade.enable(player3);


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

player1.animations.add('leftup1', [9, 10, 11, 12], 10, true);
player1.animations.add('rightup1', [14, 15, 16, 17], 10, true);

player1.animations.add('leftdown1', [0, 1, 2, 3], 10, true);
player1.animations.add('rightdown1', [5, 6, 7, 8], 10, true);


player2.animations.add('leftdown2', [0, 1, 2, 3], 10, true);
player2.animations.add('rightdown2', [5, 6, 7, 8], 10, true);

player2.animations.add('leftup2', [9, 10, 11, 12], 10, true);
player2.animations.add('rightup2', [14, 15, 16, 17], 10, true);

booster = this.game.add.group();

booster.enableBody = true;

klausuren = this.game.add.group();

klausuren.enableBody = true;


//hier wird festgelegt, dass die Kamera immer mit player3 mitläuft:

game.camera.follow(player3	, Phaser.Camera.FOLLOW_LOCKON, 0.1);

//  The score
scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fcbc38' });
scoreText.fixedToCamera = true;

//hier werden zusätzlich zu den Standard-Pfeiltasten noch die WASD-Tasten für player2 und der ButtonGravity definiert:

cursors = game.input.keyboard.createCursorKeys();
upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
ButtonGravity = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
var pause = this.pausieren();
},

pausieren: function () {
	pauseknopf = game.add.image(870, 30, 'pausebuttonp');
	pauseknopf.inputEnabled = true;
	pauseknopf.fixedToCamera = true;
	pauseknopf.events.onInputUp.add(function () {
		game.paused = true;

		unpausierer = game.add.image(player3.body.position.x - 300, 320, 'pausetext');
		unpausierer.fixedToCamera = true;
	});

	game.input.onDown.add(unpause);

	function unpause(event){
		if(game.paused){
			this.unpausierer.destroy();
			game.paused = false;
		}
	};
},

update: function () {


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
	if ((player1.body.position.x - game.camera.x) > 960)
	{
		gameover();
	}

	if ((player2.body.position.x - game.camera.x) > 960)
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

	game.physics.arcade.collide(player1, platforms);
	game.physics.arcade.collide(booster, platforms);

	game.physics.arcade.collide(player2, platforms);
	game.physics.arcade.collide(booster, platforms);


	game.physics.arcade.overlap(player1, booster, this.Boost, null, this);

	game.physics.arcade.overlap(player2, booster, this.Boost, null, this);

	game.physics.arcade.overlap(player1, klausuren, this.Stress, null, this);

	game.physics.arcade.overlap(player2, klausuren, this.Stress, null, this);

	player1.body.velocity.x = 0;



	if (cursors.left.isDown && player1.body.touching.down == true)
	{
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
		player1.body.velocity.x = playerSpeed;

		player1.animations.play('rightup1');
	}

	else if (cursors.right.isDown && player1.body.touching.up == true)
	{
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
		player1.animations.stop();

		player1.frame = 13;
	}

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
		player2.body.velocity.x = -playerSpeed;

		player2.animations.play('leftdown2');
	}

	else if (leftButton.isDown && player2.body.touching.up == true)
	{
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
		player2.body.velocity.x = playerSpeed;

		player2.animations.play('rightdown2');
	}

	else if (rightButton.isDown && player2.body.touching.up == true)
	{
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
		player2.animations.stop();

		player2.frame = 4;
	}



	if ((timer1 >= 1)) //Number.isInteger(player1.body.position.x / 800)
	{
		x = Math.floor(Math.random()*18)+1;

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
			case 12:
			{
				this.platform12();
				this.destroyPlatform12Loader();
				break;
			}
			case 13:
			{
				this.platform13();
				this.destroyPlatform13Loader();
				break;
			}
			case 14:
			{
				this.platform14();
				this.destroyPlatform14Loader();
				break;
			}
			case 15:
			{
				this.platform15();
				this.destroyPlatform15Loader();
				break;
			}
			case 16:
			{
				this.platform16();
				this.destroyPlatform16Loader();
				break;
			}
			case 17:
			{
				this.platform17();
				this.destroyPlatform17Loader();
				break;
			}
			case 18:
			{
				this.platform18();
				this.destroyPlatform18Loader();
				break;
			}
		}
	}


	//das ist nötig, um die Kamera zu aktualisieren:

	prevCamX = game.camera.x;

if (playerJump >= 231) {
}

},





timer1Up: function ()
{
	timer1 += 1;
},

score: function(){

	score += 1;
	scoreText.text = 'Score: ' + score;
},

platform1: function ()
{
	var testen = this.schule();
	if (schule == true) {
		klausur1 = klausuren.create(c * 960 + 7 * 32, 5 * 32, 'klausur');
	} else if (schule == false) {
		boost1 = booster.create(c * 960 + 7 * 32, 5 * 32, 'booster');
	}

	if (schule == true) {
		klausur2 = klausuren.create(c * 960 + 12 * 32, 12 * 32, 'klausur');
	} else if (schule == false) {
		boost2 = booster.create(c * 960 + 12 * 32, 12 * 32, 'booster');
	}


	block297 = platforms.create(c * 960, 0,'3b');

	block297.body.immovable = true;

	block298 = platforms.create(c * 960 + 3 * 32, 0,'3b');

	block298.body.immovable = true;

	block299 = platforms.create(c * 960 + 6 * 32, 0,'1');

	block299.body.immovable = true;

	block300 = platforms.create(c * 960 + 11 * 32, 0,'3b');

	block300.body.immovable = true;

	block301 = platforms.create(c * 960 + 3 * 32, 2 * 32,'1');

	block301.body.immovable = true;

	block302 = platforms.create(c * 960 + 5 * 32, 2 * 32,'2h');

	block302.body.immovable = true;

	block303 = platforms.create(c * 960 + 13 * 32, 2 * 32,'2b');

	block303.body.immovable = true;

	block304 = platforms.create(c * 960 + 8 * 32, 1 * 32,'2b');

	block304.body.immovable = true;

	block305 = platforms.create(c * 960 + 9 * 32, 3 * 32,'1');

	block305.body.immovable = true;

	block306 = platforms.create(c * 960 + 1 * 32, 4 * 32,'3h');

	block306.body.immovable = true;

	block307 = platforms.create(c * 960 + 6 * 32, 4 * 32,'2b');

	block307.body.immovable = true;

	block308 = platforms.create(c * 960 + 0 * 32, 5 * 32,'1');

	block308.body.immovable = true;

	block309 = platforms.create(c * 960 + 2 * 32, 5 * 32,'2b');

	block309.body.immovable = true;

	block310 = platforms.create(c * 960 + 8 * 32, 6 * 32,'3h');

	block310.body.immovable = true;

	block311 = platforms.create(c * 960 + 12 * 32, 6 * 32,'3b');

	block311.body.immovable = true;

	block312 = platforms.create(c * 960 + 3 * 32, 7 * 32,'2b');

	block312.body.immovable = true;

	block313 = platforms.create(c * 960 + 0 * 32, 8 * 32,'1');

	block313.body.immovable = true;

	block314 = platforms.create(c * 960 + 9 * 32, 8 * 32,'1');

	block314.body.immovable = true;

	block315 = platforms.create(c * 960 + 4 * 32, 9 * 32,'4x4');

	block315.body.immovable = true;

	block316 = platforms.create(c * 960 + 6 * 32, 9 * 32,'1');

	block316.body.immovable = true;

	block317 = platforms.create(c * 960 + 8 * 32, 9 * 32,'3h');

	block317.body.immovable = true;

	block318 = platforms.create(c * 960 + 3 * 32, 10 * 32,'1');

	block318.body.immovable = true;

	block319 = platforms.create(c * 960 + 11 * 32, 10 * 32,'1');

	block319.body.immovable = true;

	block320 = platforms.create(c * 960 + 12 * 32, 10 * 32,'3b');

	block320.body.immovable = true;

	block321 = platforms.create(c * 960 + 0 * 32, 11 * 32,'2h');

	block321.body.immovable = true;

	block322 = platforms.create(c * 960 + 1 * 32, 11 * 32,'1');

	block322.body.immovable = true;

	block323 = platforms.create(c * 960 + 14 * 32, 11 * 32,'2h');

	block323.body.immovable = true;

	block324 = platforms.create(c * 960 + 7 * 32, 13 * 32,'3b');

	block324.body.immovable = true;

	block325 = platforms.create(c * 960 + 12 * 32, 13 * 32,'1');

	block325.body.immovable = true;

	block326 = platforms.create(c * 960 + 5 * 32, 14 * 32,'3h');

	block326.body.immovable = true;

	block327 = platforms.create(c * 960 + 2 * 32, 15 * 32,'2b');

	block327.body.immovable = true;

	block328 = platforms.create(c * 960 + 0 * 32, 17 * 32,'1');

	block328.body.immovable = true;

	block329 = platforms.create(c * 960 + 14 * 32, 16 * 32,'2b');

	block329.body.immovable = true;

	block330 = platforms.create(c * 960 + 9 * 32, 18 * 32,'2h');

	block330.body.immovable = true;

	block331 = platforms.create(c * 960 + 11 * 32, 18 * 32,'1');

	block331.body.immovable = true;

	block332 = platforms.create(c * 960 + 0 * 32, 19 * 32,'3b');

	block332.body.immovable = true;

	block333 = platforms.create(c * 960 + 3 * 32, 19 * 32,'2b');

	block333.body.immovable = true;

	block334 = platforms.create(c * 960 + 7 * 32, 19 * 32,'1');

	block334.body.immovable = true;

	block335 = platforms.create(c * 960 + 13 * 32, 19 * 32,'2b');

	block335.body.immovable = true;

	c += 0.5;

	timer1 = 0;

	//timer2.reset();

},

platform2: function ()
{
	var testen = this.schule();
	if (schule == true) {
		klausur3 = klausuren.create(c * 960 + 10 * 32, 2 * 32, 'klausur');
	} else if (schule == false) {
		boost3 = booster.create(c * 960 + 10 * 32, 2 * 32, 'booster');
	}
	if (schule == true) {
		klausur4 = klausuren.create(c * 960 + 8 * 32, 11 * 32, 'klausur');
	} else if (schule == false) {
		boost4 = booster.create(c * 960 + 8 * 32, 11 * 32, 'booster');
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
		klausur5 = klausuren.create(c * 960 + 7 * 32, 8 * 32, 'klausur');
	} else if (schule == false) {
		boost5 = booster.create(c * 960 + 7 * 32, 8 * 32, 'booster');
	}
	if (schule == true) {
		klausur6 = klausuren.create(c * 960 + 10 * 32, 2 * 32, 'klausur');
	} else if (schule == false) {
		boost6 = booster.create(c * 960 + 10 * 32, 2 * 32, 'booster');
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
		klausur7 = klausuren.create(c * 960 + 3.5 * 32, 8 * 32, 'klausur');
	} else if (schule == false) {
		boost7 = booster.create(c * 960 + 3.5 * 32, 8 * 32, 'booster');
	}
	if (schule == true) {
		klausur8 = klausuren.create(c * 960 + 3.5 * 32, 11 * 32, 'klausur');
	} else if (schule == false) {
		boost8 = booster.create(c * 960 + 3.5 * 32, 11 * 32, 'booster');
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
		klausur9 = klausuren.create(c * 960 + 10 * 32, 7 * 32, 'klausur');
	} else if (schule == false) {
		boost9 = booster.create(c * 960 + 10 * 32, 7 * 32, 'booster');
	}
	if (schule == true) {
		klausur10 = klausuren.create(c * 960 + 3 * 32, 14 * 32, 'klausur');
	} else if (schule == false) {
		boost10 = booster.create(c * 960 + 3 * 32, 14 * 32, 'booster');
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
		klausur11 = klausuren.create(c * 960 + 9 * 32, 4 * 32, 'klausur');
	} else if (schule == false) {
		boost11 = booster.create(c * 960 + 9 * 32, 4 * 32, 'booster');
	}
	if (schule == true) {
		klausur12 = klausuren.create(c * 960 + 9 * 32, 15 * 32, 'klausur');
	} else if (schule == false) {
		boost12 = booster.create(c * 960 + 9 * 32, 15 * 32, 'booster');
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
		klausur13 = klausuren.create(c * 960 + 7 * 32, 8 * 32, 'klausur');
	} else if (schule == false) {
		boost13 = booster.create(c * 960 + 7 * 32, 8 * 32, 'booster');
	}
	if (schule == true) {
		klausur14 = klausuren.create(c * 960 + 7 * 32, 11 * 32, 'klausur');
	} else if (schule == false) {
		boost14 = booster.create(c * 960 + 7 * 32, 11 * 32, 'booster');
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

	block400 = platforms.create(c * 960, 19 * 32,'2b');

	block400.body.immovable = true;

	block401 = platforms.create(c * 960 + 5 * 32, 19 * 32,'2b');

	block401.body.immovable = true;

	block402 = platforms.create(c * 960 + 12 * 32, 19 * 32,'1');

	block402.body.immovable = true;

	block403 = platforms.create(c * 960 + 3 * 32, 18 * 32,'1');

	block403.body.immovable = true;

	block404 = platforms.create(c * 960 + 8 * 32, 18 * 32,'1');

	block404.body.immovable = true;

	block405 = platforms.create(c * 960 + 13 * 32, 17 * 32,'2b');

	block405.body.immovable = true;

	block406 = platforms.create(c * 960 + 4 * 32, 16 * 32,'2b');

	block406.body.immovable = true;

	block407 = platforms.create(c * 960 + 0 * 32, 14 * 32,'2h');

	block407.body.immovable = true;

	block408 = platforms.create(c * 960 + 8 * 32, 15 * 32,'1');

	block408.body.immovable = true;

	block409 = platforms.create(c * 960 + 12 * 32, 15 * 32,'1');

	block409.body.immovable = true;

	block410 = platforms.create(c * 960 + 3 * 32, 14 * 32,'1');

	block410.body.immovable = true;

	if (schule == true) {
		klausur15 = klausuren.create(c * 960 + 4 * 32, 13 * 32, 'klausur');
	} else if (schule == false) {
		boost15 = booster.create(c * 960 + 4 * 32, 13 * 32, 'booster');
	}

	block411 = platforms.create(c * 960 + 7 * 32, 12 * 32,'2b');

	block411.body.immovable = true;

	block412 = platforms.create(c * 960 + 4 * 32, 9 * 32,'3h');

	block412.body.immovable = true;

	block413 = platforms.create(c * 960 + 12 * 32, 11 * 32,'3b');

	block413.body.immovable = true;

	block414 = platforms.create(c * 960 + 1 * 32, 10* 32,'3b');

	block414.body.immovable = true;

	block415 = platforms.create(c * 960 + 6 * 32, 9 * 32,'2h');

	block415.body.immovable = true;

	block416 = platforms.create(c * 960 + 7 * 32, 9 * 32,'1');

	block416.body.immovable = true;

	block417 = platforms.create(c * 960 + 8 * 32, 9 * 32,'3b');

	block417.body.immovable = true;

	block418 = platforms.create(c * 960 + 4 * 32, 7 * 32,'2h');

	block418.body.immovable = true;

	block419 = platforms.create(c * 960 + 1 * 32, 6 * 32,'1');

	block419.body.immovable = true;

	block420 = platforms.create(c * 960 + 8 * 32, 6 * 32,'2b');

	block420.body.immovable = true;

	block421 = platforms.create(c * 960 + 13 * 32, 6 * 32,'2b');

	block421.body.immovable = true;

	block422 = platforms.create(c * 960 + 0 * 32, 4 * 32,'2h');

	block422.body.immovable = true;

	block423 = platforms.create(c * 960 + 6 * 32, 5 * 32,'1');

	block423.body.immovable = true;

	block424 = platforms.create(c * 960 + 11 * 32, 4 * 32,'2h');

	block424.body.immovable = true;

	block425 = platforms.create(c * 960 + 5 * 32, 4 * 32,'2b');

	block425.body.immovable = true;

	block426 = platforms.create(c * 960 + 3 * 32, 2 * 32,'2h');

	block426.body.immovable = true;

	if (schule == true) {
		klausur16 = klausuren.create(c * 960 + 6 * 32, 3 * 32, 'klausur');
	} else if (schule == false) {
		boost16 = booster.create(c * 960 + 6 * 32, 3 * 32, 'booster');
	}

	block427 = platforms.create(c * 960 + 7 * 32, 2 * 32,'1');

	block427.body.immovable = true;

	block428 = platforms.create(c * 960 + 1 * 32, 1 * 32,'1');

	block428.body.immovable = true;

	block429 = platforms.create(c * 960 + 12 * 32, 0 * 32,'2h');

	block429.body.immovable = true;

	block430 = platforms.create(c * 960 + 0 * 32, 0 * 32,'3b');

	block430.body.immovable = true;

	block431 = platforms.create(c * 960 + 3 * 32, 0 * 32,'2b');

	block431.body.immovable = true;

	block432 = platforms.create(c * 960 + 9 * 32, 0 * 32,'2b');

	block432.body.immovable = true;

	block433 = platforms.create(c * 960 + 10 * 32, 19 * 32,'1');

	block433.body.immovable = true;

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
		klausur17 = klausuren.create(c * 960 + 10 * 32, 7 * 32, 'klausur');
	} else if (schule == false) {
		boost17 = booster.create(c * 960 + 10 * 32, 7 * 32, 'booster');
	}
	if (schule == true) {
		klausur18 = klausuren.create(c * 960 + 10 * 32, 12 * 32, 'klausur');
	} else if (schule == false) {
		boost18 = booster.create(c * 960 + 10 * 32, 12 * 32, 'booster');
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
		klausur19 = klausuren.create(c * 960 + 10 * 32, 1 * 32, 'klausur');
	} else if (schule == false) {
		boost19 = booster.create(c * 960 + 10 * 32, 1 * 32, 'booster');
	}

	if (schule == true) {
		klausur20 = klausuren.create(c * 960 + 14 * 32, 9 * 32, 'klausur');
	} else if (schule == false) {
		boost20 = booster.create(c * 960 + 14 * 32, 9 * 32, 'booster');
	}
	if (schule == true) {
		klausur21 = klausuren.create(c * 960 + 7 * 32, 12 * 32, 'klausur');
	} else if (schule == false) {
		boost21 = booster.create(c * 960 + 7 * 32, 12 * 32, 'booster');
	}

	c += 0.5;

	timer1 = 0;
},

platform12: function ()
{
	var testen = this.schule();
	if (schule == true) {
		klausur22 = klausuren.create(c * 960 + 9 * 32, 6 * 32, 'klausur');
	} else if (schule == false) {
		boost22 = booster.create(c * 960 + 9 * 32, 6 * 32, 'booster');
	}

	if (schule == true) {
		klausur23 = klausuren.create(c * 960 + 2 * 32, 13 * 32, 'klausur');
	} else if (schule == false) {
		boost23 = booster.create(c * 960 + 2 * 32, 13 * 32, 'booster');
	}


	block336 = platforms.create(c * 960, 0,'1');

	block336.body.immovable = true;

	block337 = platforms.create(c * 960 + 2 * 32, 0,'2h');

	block337.body.immovable = true;

	block338 = platforms.create(c * 960 + 4 * 32, 0,'3b');

	block338.body.immovable = true;

	block339 = platforms.create(c * 960 + 12 * 32, 0,'2b');

	block339.body.immovable = true;

	block340 = platforms.create(c * 960 + 8 * 32, 1 * 32,'1');

	block340.body.immovable = true;

	block341 = platforms.create(c * 960 + 9 * 32, 2 * 32,'3b');

	block341.body.immovable = true;

	block342 = platforms.create(c * 960 + 0 * 32, 3 * 32,'1');

	block342.body.immovable = true;

	block343 = platforms.create(c * 960 + 13 * 32, 3 * 32,'2b');

	block343.body.immovable = true;

	block345 = platforms.create(c * 960 + 3 * 32, 4 * 32,'3b');

	block345.body.immovable = true;

	block346 = platforms.create(c * 960 + 7 * 32, 4 * 32,'2h');

	block346.body.immovable = true;

	block347 = platforms.create(c * 960 + 2 * 32, 6 * 32,'2h');

	block347.body.immovable = true;

	block348 = platforms.create(c * 960 + 12 * 32, 6 * 32,'2b');

	block348.body.immovable = true;

	block349 = platforms.create(c * 960 + 0 * 32, 7 * 32,'3h');

	block349.body.immovable = true;

	block350 = platforms.create(c * 960 + 9 * 32, 7 * 32,'2b');

	block350.body.immovable = true;

	block351 = platforms.create(c * 960 + 4 * 32, 8 * 32,'1');

	block351.body.immovable = true;

	block352 = platforms.create(c * 960 + 8 * 32, 9 * 32,'1');

	block352.body.immovable = true;

	block353 = platforms.create(c * 960 + 3 * 32, 10 * 32,'2b');

	block353.body.immovable = true;

	block354 = platforms.create(c * 960 + 6 * 32, 10 * 32,'3b');

	block354.body.immovable = true;

	block355 = platforms.create(c * 960 + 10 * 32, 11 * 32,'3h');

	block355.body.immovable = true;

	block356 = platforms.create(c * 960 + 1 * 32, 12 * 32,'3b');

	block356.body.immovable = true;

	block357 = platforms.create(c * 960 + 11 * 32, 12 * 32,'1');

	block357.body.immovable = true;

	block358 = platforms.create(c * 960 + 1 * 32, 13 * 32,'1');

	block358.body.immovable = true;

	block359 = platforms.create(c * 960 + 6 * 32, 13 * 32,'3b');

	block359.body.immovable = true;

	block360 = platforms.create(c * 960 + 0 * 32, 14 * 32,'1');

	block360.body.immovable = true;

	block361 = platforms.create(c * 960 + 1 * 32, 14 * 32,'3b');

	block361.body.immovable = true;

	block362 = platforms.create(c * 960 + 4 * 32, 15 * 32,'2b');

	block362.body.immovable = true;

	block363 = platforms.create(c * 960 + 7 * 32, 16.5 * 32,'1');

	block363.body.immovable = true;

	block364 = platforms.create(c * 960 + 0 * 32, 18 * 32,'1');

	block364.body.immovable = true;

	block365 = platforms.create(c * 960 + 4 * 32, 18 * 32,'2b');

	block365.body.immovable = true;

	block366 = platforms.create(c * 960 + 0 * 32, 19 * 32,'3b');

	block366.body.immovable = true;

	block367 = platforms.create(c * 960 + 10 * 32, 19 * 32,'3b');

	block367.body.immovable = true;

	/*block328 = platforms.create(c * 960 + 0 * 32, 17 * 32,'1');

	block328.body.immovable = true;

	block329 = platforms.create(c * 960 + 14 * 32, 16 * 32,'2b');

	block329.body.immovable = true;

	block330 = platforms.create(c * 960 + 9 * 32, 18 * 32,'2h');

	block330.body.immovable = true;

	block331 = platforms.create(c * 960 + 11 * 32, 18 * 32,'1');

	block331.body.immovable = true;

	block332 = platforms.create(c * 960 + 0 * 32, 19 * 32,'3b');

	block332.body.immovable = true;

	block333 = platforms.create(c * 960 + 3 * 32, 19 * 32,'2b');

	block333.body.immovable = true;

	block334 = platforms.create(c * 960 + 7 * 32, 19 * 32,'1');

	block334.body.immovable = true;

	block335 = platforms.create(c * 960 + 13 * 32, 19 * 32,'2b');

	block335.body.immovable = true;*/

	c += 0.5;

	timer1 = 0;

	//timer2.reset();

},

platform13: function ()
{
	var testen = this.schule();
	if (schule == true) {
		klausur24 = klausuren.create(c * 960 + 1 * 32, 1 * 32, 'klausur');
	} else if (schule == false) {
		boost24 = booster.create(c * 960 + 1 * 32, 1 * 32, 'booster');
	}

	if (schule == true) {
		klausur25 = klausuren.create(c * 960 + 11 * 32, 14 * 32, 'klausur');
	} else if (schule == false) {
		boost25 = booster.create(c * 960 + 11 * 32, 14 * 32, 'booster');
	}
	block130000 = platforms.create(c * 960 + 0 * 32, 0 * 32, '1'); block130000.body.immovable = true;
	block130001 = platforms.create(c * 960 + 0 * 32, 1 * 32, '1'); block130001.body.immovable = true;
	block130006 = platforms.create(c * 960 + 0 * 32, 6 * 32, '1'); block130006.body.immovable = true;
	block130016 = platforms.create(c * 960 + 0 * 32, 16 * 32, '1'); block130016.body.immovable = true;
	block130019 = platforms.create(c * 960 + 0 * 32, 19 * 32, '1'); block130019.body.immovable = true;
	block130100 = platforms.create(c * 960 + 1 * 32, 0 * 32, '1'); block130100.body.immovable = true;
	block130102 = platforms.create(c * 960 + 1 * 32, 2 * 32, '1'); block130102.body.immovable = true;
	block130103 = platforms.create(c * 960 + 1 * 32, 3 * 32, '1'); block130103.body.immovable = true;
	block130106 = platforms.create(c * 960 + 1 * 32, 6 * 32, '1'); block130106.body.immovable = true;
	block130111 = platforms.create(c * 960 + 1 * 32, 11 * 32, '1'); block130111.body.immovable = true;
	block130116 = platforms.create(c * 960 + 1 * 32, 16 * 32, '1'); block130116.body.immovable = true;
	block130119 = platforms.create(c * 960 + 1 * 32, 19 * 32, '1'); block130119.body.immovable = true;
	block130209 = platforms.create(c * 960 + 2 * 32, 9 * 32, '1'); block130209.body.immovable = true;
	block130210 = platforms.create(c * 960 + 2 * 32, 10 * 32, '1'); block130210.body.immovable = true;
	block130211 = platforms.create(c * 960 + 2 * 32, 11 * 32, '1'); block130211.body.immovable = true;
	block130214 = platforms.create(c * 960 + 2 * 32, 14 * 32, '1'); block130214.body.immovable = true;
	block130219 = platforms.create(c * 960 + 2 * 32, 19 * 32, '1'); block130219.body.immovable = true;
	block130300 = platforms.create(c * 960 + 3 * 32, 0 * 32, '1'); block130300.body.immovable = true;
	block130304 = platforms.create(c * 960 + 3 * 32, 4 * 32, '1'); block130304.body.immovable = true;
	block130307 = platforms.create(c * 960 + 3 * 32, 7 * 32, '1'); block130307.body.immovable = true;
	block130308 = platforms.create(c * 960 + 3 * 32, 8 * 32, '1'); block130308.body.immovable = true;
	block130309 = platforms.create(c * 960 + 3 * 32, 9 * 32, '1'); block130309.body.immovable = true;
	block130310 = platforms.create(c * 960 + 3 * 32, 10 * 32, '1'); block130310.body.immovable = true;
	block130317 = platforms.create(c * 960 + 3 * 32, 17 * 32, '1'); block130317.body.immovable = true;
	block130404 = platforms.create(c * 960 + 4 * 32, 4 * 32, '1'); block130404.body.immovable = true;
	block130415 = platforms.create(c * 960 + 4 * 32, 15 * 32, '1'); block130415.body.immovable = true;
	block130419 = platforms.create(c * 960 + 4 * 32, 19 * 32, '1'); block130419.body.immovable = true;
	block130501 = platforms.create(c * 960 + 5 * 32, 1 * 32, '1'); block130501.body.immovable = true;
	block130508 = platforms.create(c * 960 + 5 * 32, 8 * 32, '1'); block130508.body.immovable = true;
	block130509 = platforms.create(c * 960 + 5 * 32, 9 * 32, '1'); block130509.body.immovable = true;
	block130514 = platforms.create(c * 960 + 5 * 32, 14 * 32, '1'); block130514.body.immovable = true;
	block130515 = platforms.create(c * 960 + 5 * 32, 15 * 32, '1'); block130515.body.immovable = true;
	block130519 = platforms.create(c * 960 + 5 * 32, 19 * 32, '1'); block130519.body.immovable = true;
	block130601 = platforms.create(c * 960 + 6 * 32, 1 * 32, '1'); block130601.body.immovable = true;
	block130619 = platforms.create(c * 960 + 6 * 32, 19 * 32, '1'); block130619.body.immovable = true;
	block130701 = platforms.create(c * 960 + 7 * 32, 1 * 32, '1'); block130701.body.immovable = true;
	block130703 = platforms.create(c * 960 + 7 * 32, 3 * 32, '1'); block130703.body.immovable = true;
	block130704 = platforms.create(c * 960 + 7 * 32, 4 * 32, '1'); block130704.body.immovable = true;
	block130709 = platforms.create(c * 960 + 7 * 32, 9 * 32, '1'); block130709.body.immovable = true;
	block130710 = platforms.create(c * 960 + 7 * 32, 10 * 32, '1'); block130710.body.immovable = true;
	block130713 = platforms.create(c * 960 + 7 * 32, 13 * 32, '1'); block130713.body.immovable = true;
	block130716 = platforms.create(c * 960 + 7 * 32, 16 * 32, '1'); block130716.body.immovable = true;
	block130719 = platforms.create(c * 960 + 7 * 32, 19 * 32, '1'); block130719.body.immovable = true;
	block130800 = platforms.create(c * 960 + 8 * 32, 0 * 32, '1'); block130800.body.immovable = true;
	block130809 = platforms.create(c * 960 + 8 * 32, 9 * 32, '1'); block130809.body.immovable = true;
	block130810 = platforms.create(c * 960 + 8 * 32, 10 * 32, '1'); block130810.body.immovable = true;
	block130813 = platforms.create(c * 960 + 8 * 32, 13 * 32, '1'); block130813.body.immovable = true;
	block130816 = platforms.create(c * 960 + 8 * 32, 16 * 32, '1'); block130816.body.immovable = true;
	block130900 = platforms.create(c * 960 + 9 * 32, 0 * 32, '1'); block130900.body.immovable = true;
	block130906 = platforms.create(c * 960 + 9 * 32, 6 * 32, '1'); block130906.body.immovable = true;
	block130909 = platforms.create(c * 960 + 9 * 32, 9 * 32, '1'); block130909.body.immovable = true;
	block130918 = platforms.create(c * 960 + 9 * 32, 18 * 32, '1'); block130918.body.immovable = true;
	block131006 = platforms.create(c * 960 + 10 * 32, 6 * 32, '1'); block131006.body.immovable = true;
	block131012 = platforms.create(c * 960 + 10 * 32, 12 * 32, '1'); block131012.body.immovable = true;
	block131013 = platforms.create(c * 960 + 10 * 32, 13 * 32, '1'); block131013.body.immovable = true;
	block131014 = platforms.create(c * 960 + 10 * 32, 14 * 32, '1'); block131014.body.immovable = true;
	block131015 = platforms.create(c * 960 + 10 * 32, 15 * 32, '1'); block131015.body.immovable = true;
	block131018 = platforms.create(c * 960 + 10 * 32, 18 * 32, '1'); block131018.body.immovable = true;
	block131101 = platforms.create(c * 960 + 11 * 32, 1 * 32, '1'); block131101.body.immovable = true;
	block131108 = platforms.create(c * 960 + 11 * 32, 8 * 32, '1'); block131108.body.immovable = true;
	block131115 = platforms.create(c * 960 + 11 * 32, 15 * 32, '1'); block131115.body.immovable = true;
	block131204 = platforms.create(c * 960 + 12 * 32, 4 * 32, '1'); block131204.body.immovable = true;
	block131213 = platforms.create(c * 960 + 12 * 32, 13 * 32, '1'); block131213.body.immovable = true;
	block131214 = platforms.create(c * 960 + 12 * 32, 14 * 32, '1'); block131214.body.immovable = true;
	block131215 = platforms.create(c * 960 + 12 * 32, 15 * 32, '1'); block131215.body.immovable = true;
	block131219 = platforms.create(c * 960 + 12 * 32, 19 * 32, '1'); block131219.body.immovable = true;
	block131300 = platforms.create(c * 960 + 13 * 32, 0 * 32, '1'); block131300.body.immovable = true;
	block131302 = platforms.create(c * 960 + 13 * 32, 2 * 32, '1'); block131302.body.immovable = true;
	block131304 = platforms.create(c * 960 + 13 * 32, 4 * 32, '1'); block131304.body.immovable = true;
	block131307 = platforms.create(c * 960 + 13 * 32, 7 * 32, '1'); block131307.body.immovable = true;
	block131308 = platforms.create(c * 960 + 13 * 32, 8 * 32, '1'); block131308.body.immovable = true;
	block131309 = platforms.create(c * 960 + 13 * 32, 9 * 32, '1'); block131309.body.immovable = true;
	block131310 = platforms.create(c * 960 + 13 * 32, 10 * 32, '1'); block131310.body.immovable = true;
	block131314 = platforms.create(c * 960 + 13 * 32, 14 * 32, '1'); block131314.body.immovable = true;
	block131319 = platforms.create(c * 960 + 13 * 32, 19 * 32, '1'); block131319.body.immovable = true;
	block131400 = platforms.create(c * 960 + 14 * 32, 0 * 32, '1'); block131400.body.immovable = true;
	block131404 = platforms.create(c * 960 + 14 * 32, 4 * 32, '1'); block131404.body.immovable = true;
	block131407 = platforms.create(c * 960 + 14 * 32, 7 * 32, '1'); block131407.body.immovable = true;
	block131408 = platforms.create(c * 960 + 14 * 32, 8 * 32, '1'); block131408.body.immovable = true;
	block131409 = platforms.create(c * 960 + 14 * 32, 9 * 32, '1'); block131409.body.immovable = true;
	block131410 = platforms.create(c * 960 + 14 * 32, 10 * 32, '1'); block131410.body.immovable = true;
	block131414 = platforms.create(c * 960 + 14 * 32, 14 * 32, '1'); block131414.body.immovable = true;
	block131419 = platforms.create(c * 960 + 14 * 32, 19 * 32, '1'); block131419.body.immovable = true;
	c += 0.5;

	timer1 = 0;
},

platform14: function ()
{
	var testen = this.schule();
	if (schule == true) {
		klausur26 = klausuren.create(c * 960 + 7 * 32, 8 * 32, 'klausur');
	} else if (schule == false) {
		boost26 = booster.create(c * 960 + 7 * 32, 8 * 32, 'booster');
	}

	if (schule == true) {
		klausur27 = klausuren.create(c * 960 + 7 * 32, 11 * 32, 'klausur');
	} else if (schule == false) {
		boost27 = booster.create(c * 960 + 7 * 32, 11 * 32, 'booster');
	}
	block140000 = platforms.create(c * 960 + 0 * 32, 0 * 32, '1'); block140000.body.immovable = true;
	block140004 = platforms.create(c * 960 + 0 * 32, 4 * 32, '1'); block140004.body.immovable = true;
	block140005 = platforms.create(c * 960 + 0 * 32, 5 * 32, '1'); block140005.body.immovable = true;
	block140008 = platforms.create(c * 960 + 0 * 32, 8 * 32, '1'); block140008.body.immovable = true;
	block140011 = platforms.create(c * 960 + 0 * 32, 11 * 32, '1'); block140011.body.immovable = true;
	block140014 = platforms.create(c * 960 + 0 * 32, 14 * 32, '1'); block140014.body.immovable = true;
	block140015 = platforms.create(c * 960 + 0 * 32, 15 * 32, '1'); block140015.body.immovable = true;
	block140019 = platforms.create(c * 960 + 0 * 32, 19 * 32, '1'); block140019.body.immovable = true;
	block140100 = platforms.create(c * 960 + 1 * 32, 0 * 32, '1'); block140100.body.immovable = true;
	block140108 = platforms.create(c * 960 + 1 * 32, 8 * 32, '1'); block140108.body.immovable = true;
	block140111 = platforms.create(c * 960 + 1 * 32, 11 * 32, '1'); block140111.body.immovable = true;
	block140119 = platforms.create(c * 960 + 1 * 32, 19 * 32, '1'); block140119.body.immovable = true;
	block140200 = platforms.create(c * 960 + 2 * 32, 0 * 32, '1'); block140200.body.immovable = true;
	block140202 = platforms.create(c * 960 + 2 * 32, 2 * 32, '1'); block140202.body.immovable = true;
	block140217 = platforms.create(c * 960 + 2 * 32, 17 * 32, '1'); block140217.body.immovable = true;
	block140219 = platforms.create(c * 960 + 2 * 32, 19 * 32, '1'); block140219.body.immovable = true;
	block140300 = platforms.create(c * 960 + 3 * 32, 0 * 32, '1'); block140300.body.immovable = true;
	block140302 = platforms.create(c * 960 + 3 * 32, 2 * 32, '1'); block140302.body.immovable = true;
	block140303 = platforms.create(c * 960 + 3 * 32, 3 * 32, '1'); block140303.body.immovable = true;
	block140316 = platforms.create(c * 960 + 3 * 32, 16 * 32, '1'); block140316.body.immovable = true;
	block140317 = platforms.create(c * 960 + 3 * 32, 17 * 32, '1'); block140317.body.immovable = true;
	block140319 = platforms.create(c * 960 + 3 * 32, 19 * 32, '1'); block140319.body.immovable = true;
	block140405 = platforms.create(c * 960 + 4 * 32, 5 * 32, '1'); block140405.body.immovable = true;
	block140414 = platforms.create(c * 960 + 4 * 32, 14 * 32, '1'); block140414.body.immovable = true;
	block140506 = platforms.create(c * 960 + 5 * 32, 6 * 32, '1'); block140506.body.immovable = true;
	block140513 = platforms.create(c * 960 + 5 * 32, 13 * 32, '1'); block140513.body.immovable = true;
	block140600 = platforms.create(c * 960 + 6 * 32, 0 * 32, '1'); block140600.body.immovable = true;
	block140607 = platforms.create(c * 960 + 6 * 32, 7 * 32, '1'); block140607.body.immovable = true;
	block140612 = platforms.create(c * 960 + 6 * 32, 12 * 32, '1'); block140612.body.immovable = true;
	block140619 = platforms.create(c * 960 + 6 * 32, 19 * 32, '1'); block140619.body.immovable = true;
	block140700 = platforms.create(c * 960 + 7 * 32, 0 * 32, '1'); block140700.body.immovable = true;
	block140707 = platforms.create(c * 960 + 7 * 32, 7 * 32, '1'); block140707.body.immovable = true;
	block140709 = platforms.create(c * 960 + 7 * 32, 9 * 32, '1'); block140709.body.immovable = true;
	block140710 = platforms.create(c * 960 + 7 * 32, 10 * 32, '1'); block140710.body.immovable = true;
	block140712 = platforms.create(c * 960 + 7 * 32, 12 * 32, '1'); block140712.body.immovable = true;
	block140719 = platforms.create(c * 960 + 7 * 32, 19 * 32, '1'); block140719.body.immovable = true;
	block140800 = platforms.create(c * 960 + 8 * 32, 0 * 32, '1'); block140800.body.immovable = true;
	block140807 = platforms.create(c * 960 + 8 * 32, 7 * 32, '1'); block140807.body.immovable = true;
	block140812 = platforms.create(c * 960 + 8 * 32, 12 * 32, '1'); block140812.body.immovable = true;
	block140819 = platforms.create(c * 960 + 8 * 32, 19 * 32, '1'); block140819.body.immovable = true;
	block141005 = platforms.create(c * 960 + 10 * 32, 5 * 32, '1'); block141005.body.immovable = true;
	block141006 = platforms.create(c * 960 + 10 * 32, 6 * 32, '1'); block141006.body.immovable = true;
	block141007 = platforms.create(c * 960 + 10 * 32, 7 * 32, '1'); block141007.body.immovable = true;
	block141012 = platforms.create(c * 960 + 10 * 32, 12 * 32, '1'); block141012.body.immovable = true;
	block141013 = platforms.create(c * 960 + 10 * 32, 13 * 32, '1'); block141013.body.immovable = true;
	block141014 = platforms.create(c * 960 + 10 * 32, 14 * 32, '1'); block141014.body.immovable = true;
	block141105 = platforms.create(c * 960 + 11 * 32, 5 * 32, '1'); block141105.body.immovable = true;
	block141114 = platforms.create(c * 960 + 11 * 32, 14 * 32, '1'); block141114.body.immovable = true;
	block141119 = platforms.create(c * 960 + 11 * 32, 19 * 32, '1'); block141119.body.immovable = true;
	block141200 = platforms.create(c * 960 + 12 * 32, 0 * 32, '1'); block141200.body.immovable = true;
	block141219 = platforms.create(c * 960 + 12 * 32, 19 * 32, '1'); block141219.body.immovable = true;
	block141300 = platforms.create(c * 960 + 13 * 32, 0 * 32, '1'); block141300.body.immovable = true;
	block141307 = platforms.create(c * 960 + 13 * 32, 7 * 32, '1'); block141307.body.immovable = true;
	block141308 = platforms.create(c * 960 + 13 * 32, 8 * 32, '1'); block141308.body.immovable = true;
	block141309 = platforms.create(c * 960 + 13 * 32, 9 * 32, '1'); block141309.body.immovable = true;
	block141310 = platforms.create(c * 960 + 13 * 32, 10 * 32, '1'); block141310.body.immovable = true;
	block141311 = platforms.create(c * 960 + 13 * 32, 11 * 32, '1'); block141311.body.immovable = true;
	block141319 = platforms.create(c * 960 + 13 * 32, 19 * 32, '1'); block141319.body.immovable = true;
	block141400 = platforms.create(c * 960 + 14 * 32, 0 * 32, '1'); block141400.body.immovable = true;
	block141407 = platforms.create(c * 960 + 14 * 32, 7 * 32, '1'); block141407.body.immovable = true;
	block141411 = platforms.create(c * 960 + 14 * 32, 11 * 32, '1'); block141411.body.immovable = true;
	block141419 = platforms.create(c * 960 + 14 * 32, 19 * 32, '1'); block141419.body.immovable = true;
	c += 0.5;

	timer1 = 0;
},

platform15: function ()
{
	var testen = this.schule();
	if (schule == true) {
		klausur28 = klausuren.create(c * 960 + 3 * 32, 8 * 32, 'klausur');
	} else if (schule == false) {
		boost28 = booster.create(c * 960 + 3 * 32, 8 * 32, 'booster');
	}

	if (schule == true) {
		klausur29 = klausuren.create(c * 960 + 12 * 32, 6 * 32, 'klausur');
	} else if (schule == false) {
		boost29 = booster.create(c * 960 + 12 * 32, 6 * 32, 'booster');
	}
	block150000 = platforms.create(c * 960 + 0 * 32, 0 * 32, '1'); block150000.body.immovable = true;
	block150019 = platforms.create(c * 960 + 0 * 32, 19 * 32, '1'); block150019.body.immovable = true;
	block150100 = platforms.create(c * 960 + 1 * 32, 0 * 32, '1'); block150100.body.immovable = true;
	block150119 = platforms.create(c * 960 + 1 * 32, 19 * 32, '1'); block150119.body.immovable = true;
	block150200 = platforms.create(c * 960 + 2 * 32, 0 * 32, '1'); block150200.body.immovable = true;
	block150201 = platforms.create(c * 960 + 2 * 32, 1 * 32, '1'); block150201.body.immovable = true;
	block150202 = platforms.create(c * 960 + 2 * 32, 2 * 32, '1'); block150202.body.immovable = true;
	block150217 = platforms.create(c * 960 + 2 * 32, 17 * 32, '1'); block150217.body.immovable = true;
	block150218 = platforms.create(c * 960 + 2 * 32, 18 * 32, '1'); block150218.body.immovable = true;
	block150219 = platforms.create(c * 960 + 2 * 32, 19 * 32, '1'); block150219.body.immovable = true;
	block150300 = platforms.create(c * 960 + 3 * 32, 0 * 32, '1'); block150300.body.immovable = true;
	block150301 = platforms.create(c * 960 + 3 * 32, 1 * 32, '1'); block150301.body.immovable = true;
	block150302 = platforms.create(c * 960 + 3 * 32, 2 * 32, '1'); block150302.body.immovable = true;
	block150303 = platforms.create(c * 960 + 3 * 32, 3 * 32, '1'); block150303.body.immovable = true;
	block150305 = platforms.create(c * 960 + 3 * 32, 5 * 32, '1'); block150305.body.immovable = true;
	block150306 = platforms.create(c * 960 + 3 * 32, 6 * 32, '1'); block150306.body.immovable = true;
	block150307 = platforms.create(c * 960 + 3 * 32, 7 * 32, '1'); block150307.body.immovable = true;
	block150309 = platforms.create(c * 960 + 3 * 32, 9 * 32, '1'); block150309.body.immovable = true;
	block150310 = platforms.create(c * 960 + 3 * 32, 10 * 32, '1'); block150310.body.immovable = true;
	block150311 = platforms.create(c * 960 + 3 * 32, 11 * 32, '1'); block150311.body.immovable = true;
	block150312 = platforms.create(c * 960 + 3 * 32, 12 * 32, '1'); block150312.body.immovable = true;
	block150313 = platforms.create(c * 960 + 3 * 32, 13 * 32, '1'); block150313.body.immovable = true;
	block150314 = platforms.create(c * 960 + 3 * 32, 14 * 32, '1'); block150314.body.immovable = true;
	block150315 = platforms.create(c * 960 + 3 * 32, 15 * 32, '1'); block150315.body.immovable = true;
	block150317 = platforms.create(c * 960 + 3 * 32, 17 * 32, '1'); block150317.body.immovable = true;
	block150318 = platforms.create(c * 960 + 3 * 32, 18 * 32, '1'); block150318.body.immovable = true;
	block150319 = platforms.create(c * 960 + 3 * 32, 19 * 32, '1'); block150319.body.immovable = true;
	block150400 = platforms.create(c * 960 + 4 * 32, 0 * 32, '1'); block150400.body.immovable = true;
	block150401 = platforms.create(c * 960 + 4 * 32, 1 * 32, '1'); block150401.body.immovable = true;
	block150402 = platforms.create(c * 960 + 4 * 32, 2 * 32, '1'); block150402.body.immovable = true;
	block150403 = platforms.create(c * 960 + 4 * 32, 3 * 32, '1'); block150403.body.immovable = true;
	block150405 = platforms.create(c * 960 + 4 * 32, 5 * 32, '1'); block150405.body.immovable = true;
	block150406 = platforms.create(c * 960 + 4 * 32, 6 * 32, '1'); block150406.body.immovable = true;
	block150407 = platforms.create(c * 960 + 4 * 32, 7 * 32, '1'); block150407.body.immovable = true;
	block150411 = platforms.create(c * 960 + 4 * 32, 11 * 32, '1'); block150411.body.immovable = true;
	block150412 = platforms.create(c * 960 + 4 * 32, 12 * 32, '1'); block150412.body.immovable = true;
	block150413 = platforms.create(c * 960 + 4 * 32, 13 * 32, '1'); block150413.body.immovable = true;
	block150414 = platforms.create(c * 960 + 4 * 32, 14 * 32, '1'); block150414.body.immovable = true;
	block150415 = platforms.create(c * 960 + 4 * 32, 15 * 32, '1'); block150415.body.immovable = true;
	block150417 = platforms.create(c * 960 + 4 * 32, 17 * 32, '1'); block150417.body.immovable = true;
	block150418 = platforms.create(c * 960 + 4 * 32, 18 * 32, '1'); block150418.body.immovable = true;
	block150419 = platforms.create(c * 960 + 4 * 32, 19 * 32, '1'); block150419.body.immovable = true;
	block150500 = platforms.create(c * 960 + 5 * 32, 0 * 32, '1'); block150500.body.immovable = true;
	block150501 = platforms.create(c * 960 + 5 * 32, 1 * 32, '1'); block150501.body.immovable = true;
	block150502 = platforms.create(c * 960 + 5 * 32, 2 * 32, '1'); block150502.body.immovable = true;
	block150503 = platforms.create(c * 960 + 5 * 32, 3 * 32, '1'); block150503.body.immovable = true;
	block150505 = platforms.create(c * 960 + 5 * 32, 5 * 32, '1'); block150505.body.immovable = true;
	block150506 = platforms.create(c * 960 + 5 * 32, 6 * 32, '1'); block150506.body.immovable = true;
	block150507 = platforms.create(c * 960 + 5 * 32, 7 * 32, '1'); block150507.body.immovable = true;
	block150508 = platforms.create(c * 960 + 5 * 32, 8 * 32, '1'); block150508.body.immovable = true;
	block150509 = platforms.create(c * 960 + 5 * 32, 9 * 32, '1'); block150509.body.immovable = true;
	block150511 = platforms.create(c * 960 + 5 * 32, 11 * 32, '1'); block150511.body.immovable = true;
	block150512 = platforms.create(c * 960 + 5 * 32, 12 * 32, '1'); block150512.body.immovable = true;
	block150513 = platforms.create(c * 960 + 5 * 32, 13 * 32, '1'); block150513.body.immovable = true;
	block150514 = platforms.create(c * 960 + 5 * 32, 14 * 32, '1'); block150514.body.immovable = true;
	block150517 = platforms.create(c * 960 + 5 * 32, 17 * 32, '1'); block150517.body.immovable = true;
	block150518 = platforms.create(c * 960 + 5 * 32, 18 * 32, '1'); block150518.body.immovable = true;
	block150519 = platforms.create(c * 960 + 5 * 32, 19 * 32, '1'); block150519.body.immovable = true;
	block150600 = platforms.create(c * 960 + 6 * 32, 0 * 32, '1'); block150600.body.immovable = true;
	block150601 = platforms.create(c * 960 + 6 * 32, 1 * 32, '1'); block150601.body.immovable = true;
	block150607 = platforms.create(c * 960 + 6 * 32, 7 * 32, '1'); block150607.body.immovable = true;
	block150608 = platforms.create(c * 960 + 6 * 32, 8 * 32, '1'); block150608.body.immovable = true;
	block150609 = platforms.create(c * 960 + 6 * 32, 9 * 32, '1'); block150609.body.immovable = true;
	block150611 = platforms.create(c * 960 + 6 * 32, 11 * 32, '1'); block150611.body.immovable = true;
	block150612 = platforms.create(c * 960 + 6 * 32, 12 * 32, '1'); block150612.body.immovable = true;
	block150613 = platforms.create(c * 960 + 6 * 32, 13 * 32, '1'); block150613.body.immovable = true;
	block150616 = platforms.create(c * 960 + 6 * 32, 16 * 32, '1'); block150616.body.immovable = true;
	block150617 = platforms.create(c * 960 + 6 * 32, 17 * 32, '1'); block150617.body.immovable = true;
	block150618 = platforms.create(c * 960 + 6 * 32, 18 * 32, '1'); block150618.body.immovable = true;
	block150619 = platforms.create(c * 960 + 6 * 32, 19 * 32, '1'); block150619.body.immovable = true;
	block150700 = platforms.create(c * 960 + 7 * 32, 0 * 32, '1'); block150700.body.immovable = true;
	block150701 = platforms.create(c * 960 + 7 * 32, 1 * 32, '1'); block150701.body.immovable = true;
	block150703 = platforms.create(c * 960 + 7 * 32, 3 * 32, '1'); block150703.body.immovable = true;
	block150705 = platforms.create(c * 960 + 7 * 32, 5 * 32, '1'); block150705.body.immovable = true;
	block150707 = platforms.create(c * 960 + 7 * 32, 7 * 32, '1'); block150707.body.immovable = true;
	block150708 = platforms.create(c * 960 + 7 * 32, 8 * 32, '1'); block150708.body.immovable = true;
	block150709 = platforms.create(c * 960 + 7 * 32, 9 * 32, '1'); block150709.body.immovable = true;
	block150713 = platforms.create(c * 960 + 7 * 32, 13 * 32, '1'); block150713.body.immovable = true;
	block150715 = platforms.create(c * 960 + 7 * 32, 15 * 32, '1'); block150715.body.immovable = true;
	block150716 = platforms.create(c * 960 + 7 * 32, 16 * 32, '1'); block150716.body.immovable = true;
	block150717 = platforms.create(c * 960 + 7 * 32, 17 * 32, '1'); block150717.body.immovable = true;
	block150718 = platforms.create(c * 960 + 7 * 32, 18 * 32, '1'); block150718.body.immovable = true;
	block150719 = platforms.create(c * 960 + 7 * 32, 19 * 32, '1'); block150719.body.immovable = true;
	block150800 = platforms.create(c * 960 + 8 * 32, 0 * 32, '1'); block150800.body.immovable = true;
	block150801 = platforms.create(c * 960 + 8 * 32, 1 * 32, '1'); block150801.body.immovable = true;
	block150803 = platforms.create(c * 960 + 8 * 32, 3 * 32, '1'); block150803.body.immovable = true;
	block150805 = platforms.create(c * 960 + 8 * 32, 5 * 32, '1'); block150805.body.immovable = true;
	block150807 = platforms.create(c * 960 + 8 * 32, 7 * 32, '1'); block150807.body.immovable = true;
	block150808 = platforms.create(c * 960 + 8 * 32, 8 * 32, '1'); block150808.body.immovable = true;
	block150811 = platforms.create(c * 960 + 8 * 32, 11 * 32, '1'); block150811.body.immovable = true;
	block150815 = platforms.create(c * 960 + 8 * 32, 15 * 32, '1'); block150815.body.immovable = true;
	block150816 = platforms.create(c * 960 + 8 * 32, 16 * 32, '1'); block150816.body.immovable = true;
	block150817 = platforms.create(c * 960 + 8 * 32, 17 * 32, '1'); block150817.body.immovable = true;
	block150818 = platforms.create(c * 960 + 8 * 32, 18 * 32, '1'); block150818.body.immovable = true;
	block150819 = platforms.create(c * 960 + 8 * 32, 19 * 32, '1'); block150819.body.immovable = true;
	block150900 = platforms.create(c * 960 + 9 * 32, 0 * 32, '1'); block150900.body.immovable = true;
	block150901 = platforms.create(c * 960 + 9 * 32, 1 * 32, '1'); block150901.body.immovable = true;
	block150903 = platforms.create(c * 960 + 9 * 32, 3 * 32, '1'); block150903.body.immovable = true;
	block150905 = platforms.create(c * 960 + 9 * 32, 5 * 32, '1'); block150905.body.immovable = true;
	block150910 = platforms.create(c * 960 + 9 * 32, 10 * 32, '1'); block150910.body.immovable = true;
	block150911 = platforms.create(c * 960 + 9 * 32, 11 * 32, '1'); block150911.body.immovable = true;
	block150912 = platforms.create(c * 960 + 9 * 32, 12 * 32, '1'); block150912.body.immovable = true;
	block150914 = platforms.create(c * 960 + 9 * 32, 14 * 32, '1'); block150914.body.immovable = true;
	block150915 = platforms.create(c * 960 + 9 * 32, 15 * 32, '1'); block150915.body.immovable = true;
	block150916 = platforms.create(c * 960 + 9 * 32, 16 * 32, '1'); block150916.body.immovable = true;
	block150917 = platforms.create(c * 960 + 9 * 32, 17 * 32, '1'); block150917.body.immovable = true;
	block150918 = platforms.create(c * 960 + 9 * 32, 18 * 32, '1'); block150918.body.immovable = true;
	block150919 = platforms.create(c * 960 + 9 * 32, 19 * 32, '1'); block150919.body.immovable = true;
	block151000 = platforms.create(c * 960 + 10 * 32, 0 * 32, '1'); block151000.body.immovable = true;
	block151001 = platforms.create(c * 960 + 10 * 32, 1 * 32, '1'); block151001.body.immovable = true;
	block151003 = platforms.create(c * 960 + 10 * 32, 3 * 32, '1'); block151003.body.immovable = true;
	block151005 = platforms.create(c * 960 + 10 * 32, 5 * 32, '1'); block151005.body.immovable = true;
	block151006 = platforms.create(c * 960 + 10 * 32, 6 * 32, '1'); block151006.body.immovable = true;
	block151007 = platforms.create(c * 960 + 10 * 32, 7 * 32, '1'); block151007.body.immovable = true;
	block151009 = platforms.create(c * 960 + 10 * 32, 9 * 32, '1'); block151009.body.immovable = true;
	block151010 = platforms.create(c * 960 + 10 * 32, 10 * 32, '1'); block151010.body.immovable = true;
	block151011 = platforms.create(c * 960 + 10 * 32, 11 * 32, '1'); block151011.body.immovable = true;
	block151012 = platforms.create(c * 960 + 10 * 32, 12 * 32, '1'); block151012.body.immovable = true;
	block151014 = platforms.create(c * 960 + 10 * 32, 14 * 32, '1'); block151014.body.immovable = true;
	block151015 = platforms.create(c * 960 + 10 * 32, 15 * 32, '1'); block151015.body.immovable = true;
	block151016 = platforms.create(c * 960 + 10 * 32, 16 * 32, '1'); block151016.body.immovable = true;
	block151017 = platforms.create(c * 960 + 10 * 32, 17 * 32, '1'); block151017.body.immovable = true;
	block151018 = platforms.create(c * 960 + 10 * 32, 18 * 32, '1'); block151018.body.immovable = true;
	block151019 = platforms.create(c * 960 + 10 * 32, 19 * 32, '1'); block151019.body.immovable = true;
	block151100 = platforms.create(c * 960 + 11 * 32, 0 * 32, '1'); block151100.body.immovable = true;
	block151101 = platforms.create(c * 960 + 11 * 32, 1 * 32, '1'); block151101.body.immovable = true;
	block151103 = platforms.create(c * 960 + 11 * 32, 3 * 32, '1'); block151103.body.immovable = true;
	block151107 = platforms.create(c * 960 + 11 * 32, 7 * 32, '1'); block151107.body.immovable = true;
	block151109 = platforms.create(c * 960 + 11 * 32, 9 * 32, '1'); block151109.body.immovable = true;
	block151110 = platforms.create(c * 960 + 11 * 32, 10 * 32, '1'); block151110.body.immovable = true;
	block151111 = platforms.create(c * 960 + 11 * 32, 11 * 32, '1'); block151111.body.immovable = true;
	block151112 = platforms.create(c * 960 + 11 * 32, 12 * 32, '1'); block151112.body.immovable = true;
	block151115 = platforms.create(c * 960 + 11 * 32, 15 * 32, '1'); block151115.body.immovable = true;
	block151116 = platforms.create(c * 960 + 11 * 32, 16 * 32, '1'); block151116.body.immovable = true;
	block151117 = platforms.create(c * 960 + 11 * 32, 17 * 32, '1'); block151117.body.immovable = true;
	block151118 = platforms.create(c * 960 + 11 * 32, 18 * 32, '1'); block151118.body.immovable = true;
	block151119 = platforms.create(c * 960 + 11 * 32, 19 * 32, '1'); block151119.body.immovable = true;
	block151200 = platforms.create(c * 960 + 12 * 32, 0 * 32, '1'); block151200.body.immovable = true;
	block151204 = platforms.create(c * 960 + 12 * 32, 4 * 32, '1'); block151204.body.immovable = true;
	block151205 = platforms.create(c * 960 + 12 * 32, 5 * 32, '1'); block151205.body.immovable = true;
	block151207 = platforms.create(c * 960 + 12 * 32, 7 * 32, '1'); block151207.body.immovable = true;
	block151209 = platforms.create(c * 960 + 12 * 32, 9 * 32, '1'); block151209.body.immovable = true;
	block151210 = platforms.create(c * 960 + 12 * 32, 10 * 32, '1'); block151210.body.immovable = true;
	block151211 = platforms.create(c * 960 + 12 * 32, 11 * 32, '1'); block151211.body.immovable = true;
	block151212 = platforms.create(c * 960 + 12 * 32, 12 * 32, '1'); block151212.body.immovable = true;
	block151213 = platforms.create(c * 960 + 12 * 32, 13 * 32, '1'); block151213.body.immovable = true;
	block151215 = platforms.create(c * 960 + 12 * 32, 15 * 32, '1'); block151215.body.immovable = true;
	block151216 = platforms.create(c * 960 + 12 * 32, 16 * 32, '1'); block151216.body.immovable = true;
	block151217 = platforms.create(c * 960 + 12 * 32, 17 * 32, '1'); block151217.body.immovable = true;
	block151218 = platforms.create(c * 960 + 12 * 32, 18 * 32, '1'); block151218.body.immovable = true;
	block151219 = platforms.create(c * 960 + 12 * 32, 19 * 32, '1'); block151219.body.immovable = true;
	block151300 = platforms.create(c * 960 + 13 * 32, 0 * 32, '1'); block151300.body.immovable = true;
	block151319 = platforms.create(c * 960 + 13 * 32, 19 * 32, '1'); block151319.body.immovable = true;
	block151400 = platforms.create(c * 960 + 14 * 32, 0 * 32, '1'); block151400.body.immovable = true;
	block151419 = platforms.create(c * 960 + 14 * 32, 19 * 32, '1'); block151419.body.immovable = true;
	c += 0.5;

	timer1 = 0;

},

platform16: function ()
{
	var testen = this.schule();
	if (schule == true) {
		klausur30 = klausuren.create(c * 960 + 7 * 32, 1 * 32, 'klausur');
	} else if (schule == false) {
		boost30 = booster.create(c * 960 + 7 * 32, 1 * 32, 'booster');
	}

	if (schule == true) {
		klausur31 = klausuren.create(c * 960 + 5 * 32, 11 * 32, 'klausur');
	} else if (schule == false) {
		boost31 = booster.create(c * 960 + 5 * 32, 11 * 32, 'booster');
	}
	block160000 = platforms.create(c * 960 + 0 * 32, 0 * 32, '1'); block160000.body.immovable = true;
	block160003 = platforms.create(c * 960 + 0 * 32, 3 * 32, '1'); block160003.body.immovable = true;
	block160004 = platforms.create(c * 960 + 0 * 32, 4 * 32, '1'); block160004.body.immovable = true;
	block160010 = platforms.create(c * 960 + 0 * 32, 10 * 32, '1'); block160010.body.immovable = true;
	block160014 = platforms.create(c * 960 + 0 * 32, 14 * 32, '1'); block160014.body.immovable = true;
	block160015 = platforms.create(c * 960 + 0 * 32, 15 * 32, '1'); block160015.body.immovable = true;
	block160016 = platforms.create(c * 960 + 0 * 32, 16 * 32, '1'); block160016.body.immovable = true;
	block160100 = platforms.create(c * 960 + 1 * 32, 0 * 32, '1'); block160100.body.immovable = true;
	block160104 = platforms.create(c * 960 + 1 * 32, 4 * 32, '1'); block160104.body.immovable = true;
	block160110 = platforms.create(c * 960 + 1 * 32, 10 * 32, '1'); block160110.body.immovable = true;
	block160114 = platforms.create(c * 960 + 1 * 32, 14 * 32, '1'); block160114.body.immovable = true;
	block160119 = platforms.create(c * 960 + 1 * 32, 19 * 32, '1'); block160119.body.immovable = true;
	block160200 = platforms.create(c * 960 + 2 * 32, 0 * 32, '1'); block160200.body.immovable = true;
	block160202 = platforms.create(c * 960 + 2 * 32, 2 * 32, '1'); block160202.body.immovable = true;
	block160205 = platforms.create(c * 960 + 2 * 32, 5 * 32, '1'); block160205.body.immovable = true;
	block160219 = platforms.create(c * 960 + 2 * 32, 19 * 32, '1'); block160219.body.immovable = true;
	block160300 = platforms.create(c * 960 + 3 * 32, 0 * 32, '1'); block160300.body.immovable = true;
	block160306 = platforms.create(c * 960 + 3 * 32, 6 * 32, '1'); block160306.body.immovable = true;
	block160309 = platforms.create(c * 960 + 3 * 32, 9 * 32, '1'); block160309.body.immovable = true;
	block160317 = platforms.create(c * 960 + 3 * 32, 17 * 32, '1'); block160317.body.immovable = true;
	block160319 = platforms.create(c * 960 + 3 * 32, 19 * 32, '1'); block160319.body.immovable = true;
	block160406 = platforms.create(c * 960 + 4 * 32, 6 * 32, '1'); block160406.body.immovable = true;
	block160412 = platforms.create(c * 960 + 4 * 32, 12 * 32, '1'); block160412.body.immovable = true;
	block160417 = platforms.create(c * 960 + 4 * 32, 17 * 32, '1'); block160417.body.immovable = true;
	block160500 = platforms.create(c * 960 + 5 * 32, 0 * 32, '1'); block160500.body.immovable = true;
	block160506 = platforms.create(c * 960 + 5 * 32, 6 * 32, '1'); block160506.body.immovable = true;
	block160512 = platforms.create(c * 960 + 5 * 32, 12 * 32, '1'); block160512.body.immovable = true;
	block160517 = platforms.create(c * 960 + 5 * 32, 17 * 32, '1'); block160517.body.immovable = true;
	block160600 = platforms.create(c * 960 + 6 * 32, 0 * 32, '1'); block160600.body.immovable = true;
	block160601 = platforms.create(c * 960 + 6 * 32, 1 * 32, '1'); block160601.body.immovable = true;
	block160602 = platforms.create(c * 960 + 6 * 32, 2 * 32, '1'); block160602.body.immovable = true;
	block160606 = platforms.create(c * 960 + 6 * 32, 6 * 32, '1'); block160606.body.immovable = true;
	block160612 = platforms.create(c * 960 + 6 * 32, 12 * 32, '1'); block160612.body.immovable = true;
	block160619 = platforms.create(c * 960 + 6 * 32, 19 * 32, '1'); block160619.body.immovable = true;
	block160700 = platforms.create(c * 960 + 7 * 32, 0 * 32, '1'); block160700.body.immovable = true;
	block160702 = platforms.create(c * 960 + 7 * 32, 2 * 32, '1'); block160702.body.immovable = true;
	block160706 = platforms.create(c * 960 + 7 * 32, 6 * 32, '1'); block160706.body.immovable = true;
	block160714 = platforms.create(c * 960 + 7 * 32, 14 * 32, '1'); block160714.body.immovable = true;
	block160719 = platforms.create(c * 960 + 7 * 32, 19 * 32, '1'); block160719.body.immovable = true;
	block160800 = platforms.create(c * 960 + 8 * 32, 0 * 32, '1'); block160800.body.immovable = true;
	block160802 = platforms.create(c * 960 + 8 * 32, 2 * 32, '1'); block160802.body.immovable = true;
	block160805 = platforms.create(c * 960 + 8 * 32, 5 * 32, '1'); block160805.body.immovable = true;
	block160809 = platforms.create(c * 960 + 8 * 32, 9 * 32, '1'); block160809.body.immovable = true;
	block160817 = platforms.create(c * 960 + 8 * 32, 17 * 32, '1'); block160817.body.immovable = true;
	block160819 = platforms.create(c * 960 + 8 * 32, 19 * 32, '1'); block160819.body.immovable = true;
	block160900 = platforms.create(c * 960 + 9 * 32, 0 * 32, '1'); block160900.body.immovable = true;
	block160902 = platforms.create(c * 960 + 9 * 32, 2 * 32, '1'); block160902.body.immovable = true;
	block160905 = platforms.create(c * 960 + 9 * 32, 5 * 32, '1'); block160905.body.immovable = true;
	block160909 = platforms.create(c * 960 + 9 * 32, 9 * 32, '1'); block160909.body.immovable = true;
	block160915 = platforms.create(c * 960 + 9 * 32, 15 * 32, '1'); block160915.body.immovable = true;
	block161000 = platforms.create(c * 960 + 10 * 32, 0 * 32, '1'); block161000.body.immovable = true;
	block161005 = platforms.create(c * 960 + 10 * 32, 5 * 32, '1'); block161005.body.immovable = true;
	block161009 = platforms.create(c * 960 + 10 * 32, 9 * 32, '1'); block161009.body.immovable = true;
	block161010 = platforms.create(c * 960 + 10 * 32, 10 * 32, '1'); block161010.body.immovable = true;
	block161103 = platforms.create(c * 960 + 11 * 32, 3 * 32, '1'); block161103.body.immovable = true;
	block161105 = platforms.create(c * 960 + 11 * 32, 5 * 32, '1'); block161105.body.immovable = true;
	block161110 = platforms.create(c * 960 + 11 * 32, 10 * 32, '1'); block161110.body.immovable = true;
	block161111 = platforms.create(c * 960 + 11 * 32, 11 * 32, '1'); block161111.body.immovable = true;
	block161119 = platforms.create(c * 960 + 11 * 32, 19 * 32, '1'); block161119.body.immovable = true;
	block161203 = platforms.create(c * 960 + 12 * 32, 3 * 32, '1'); block161203.body.immovable = true;
	block161205 = platforms.create(c * 960 + 12 * 32, 5 * 32, '1'); block161205.body.immovable = true;
	block161211 = platforms.create(c * 960 + 12 * 32, 11 * 32, '1'); block161211.body.immovable = true;
	block161219 = platforms.create(c * 960 + 12 * 32, 19 * 32, '1'); block161219.body.immovable = true;
	block161300 = platforms.create(c * 960 + 13 * 32, 0 * 32, '1'); block161300.body.immovable = true;
	block161305 = platforms.create(c * 960 + 13 * 32, 5 * 32, '1'); block161305.body.immovable = true;
	block161307 = platforms.create(c * 960 + 13 * 32, 7 * 32, '1'); block161307.body.immovable = true;
	block161315 = platforms.create(c * 960 + 13 * 32, 15 * 32, '1'); block161315.body.immovable = true;
	block161403 = platforms.create(c * 960 + 14 * 32, 3 * 32, '1'); block161403.body.immovable = true;
	block161407 = platforms.create(c * 960 + 14 * 32, 7 * 32, '1'); block161407.body.immovable = true;
	block161414 = platforms.create(c * 960 + 14 * 32, 14 * 32, '1'); block161414.body.immovable = true;
	block161415 = platforms.create(c * 960 + 14 * 32, 15 * 32, '1'); block161415.body.immovable = true;
	c += 0.5;

	timer1 = 0;
},
platform17: function()
{
	var testen = this.schule();
	if (schule == true) {
		klausur32 = klausuren.create(c * 960 + 10 * 32, 2 * 32, 'klausur');
	} else if (schule == false) {
		boost32 = booster.create(c * 960 + 10 * 32, 2 * 32, 'booster');
	}

	if (schule == true) {
		klausur33 = klausuren.create(c * 960 + 13 * 32, 17 * 32, 'klausur');
	} else if (schule == false) {
		boost33 = booster.create(c * 960 + 13 * 32, 17 * 32, 'booster');
	}
	block020101 = platforms.create(c * 960 + 01 * 32, 01 * 32, '1'); block020101.body.immovable = true;
	block020118 = platforms.create(c * 960 + 01 * 32, 18 * 32, '1'); block020118.body.immovable = true;
	block020201 = platforms.create(c * 960 + 02 * 32, 01 * 32, '1'); block020201.body.immovable = true;
	block020206 = platforms.create(c * 960 + 02 * 32, 06 * 32, '1'); block020206.body.immovable = true;
	block020207 = platforms.create(c * 960 + 02 * 32, 07 * 32, '1'); block020207.body.immovable = true;
	block020212 = platforms.create(c * 960 + 02 * 32, 12 * 32, '1'); block020212.body.immovable = true;
	block020213 = platforms.create(c * 960 + 02 * 32, 13 * 32, '1'); block020213.body.immovable = true;
	block020218 = platforms.create(c * 960 + 02 * 32, 18 * 32, '1'); block020218.body.immovable = true;
	block020301 = platforms.create(c * 960 + 03 * 32, 01 * 32, '1'); block020301.body.immovable = true;
	block020306 = platforms.create(c * 960 + 03 * 32, 06 * 32, '1'); block020306.body.immovable = true;
	block020307 = platforms.create(c * 960 + 03 * 32, 07 * 32, '1'); block020307.body.immovable = true;
	block020312 = platforms.create(c * 960 + 03 * 32, 12 * 32, '1'); block020312.body.immovable = true;
	block020313 = platforms.create(c * 960 + 03 * 32, 13 * 32, '1'); block020313.body.immovable = true;
	block020318 = platforms.create(c * 960 + 03 * 32, 18 * 32, '1'); block020318.body.immovable = true;
	block020401 = platforms.create(c * 960 + 04 * 32, 01 * 32, '1'); block020401.body.immovable = true;
	block020418 = platforms.create(c * 960 + 04 * 32, 18 * 32, '1'); block020418.body.immovable = true;
	block020503 = platforms.create(c * 960 + 05 * 32, 03 * 32, '1'); block020503.body.immovable = true;
	block020516 = platforms.create(c * 960 + 05 * 32, 16 * 32, '1'); block020516.body.immovable = true;
	block020701 = platforms.create(c * 960 + 07 * 32, 01 * 32, '1'); block020701.body.immovable = true;
	block020705 = platforms.create(c * 960 + 07 * 32, 05 * 32, '1'); block020705.body.immovable = true;
	block020714 = platforms.create(c * 960 + 07 * 32, 14 * 32, '1'); block020714.body.immovable = true;
	block020718 = platforms.create(c * 960 + 07 * 32, 18 * 32, '1'); block020718.body.immovable = true;
	block020805 = platforms.create(c * 960 + 08 * 32, 05 * 32, '1'); block020805.body.immovable = true;
	block020814 = platforms.create(c * 960 + 08 * 32, 14 * 32, '1'); block020814.body.immovable = true;
	block020905 = platforms.create(c * 960 + 09 * 32, 05 * 32, '1'); block020905.body.immovable = true;
	block020909 = platforms.create(c * 960 + 09 * 32, 09 * 32, '1'); block020909.body.immovable = true;
	block020914 = platforms.create(c * 960 + 09 * 32, 14 * 32, '1'); block020914.body.immovable = true;
	block021001 = platforms.create(c * 960 + 10 * 32, 01 * 32, '1'); block021001.body.immovable = true;
	block021009 = platforms.create(c * 960 + 10 * 32, 09 * 32, '1'); block021009.body.immovable = true;
	block021018 = platforms.create(c * 960 + 10 * 32, 18 * 32, '1'); block021018.body.immovable = true;
	block021109 = platforms.create(c * 960 + 11 * 32, 09 * 32, '1'); block021109.body.immovable = true;
	block021205 = platforms.create(c * 960 + 12 * 32, 05 * 32, '1'); block021205.body.immovable = true;
	block021209 = platforms.create(c * 960 + 12 * 32, 09 * 32, '1'); block021209.body.immovable = true;
	block021214 = platforms.create(c * 960 + 12 * 32, 14 * 32, '1'); block021214.body.immovable = true;
	block021301 = platforms.create(c * 960 + 13 * 32, 01 * 32, '1'); block021301.body.immovable = true;
	block021305 = platforms.create(c * 960 + 13 * 32, 05 * 32, '1'); block021305.body.immovable = true;
	block021314 = platforms.create(c * 960 + 13 * 32, 14 * 32, '1'); block021314.body.immovable = true;
	block021318 = platforms.create(c * 960 + 13 * 32, 18 * 32, '1'); block021318.body.immovable = true;

	c += 0.5;

	timer1 = 0;
},

platform18: function()
{
	var testen = this.schule();
	if (schule == true) {
		klausur34 = klausuren.create(c * 960 + 11 * 32, 3 * 32, 'klausur');
	} else if (schule == false) {
		boost34 = booster.create(c * 960 + 11 * 32, 3 * 32, 'booster');
	}

	if (schule == true) {
		klausur35 = klausuren.create(c * 960 + 10 * 32, 18 * 32, 'klausur');
	} else if (schule == false) {
		boost35 = booster.create(c * 960 + 10 * 32, 18 * 32, 'booster');
	}
	block180101 = platforms.create(c * 960 + 01 * 32, 01 * 32, '1'); block180101.body.immovable = true;
	block180102 = platforms.create(c * 960 + 04 * 32, 01 * 32, '1'); block180102.body.immovable = true;
	block180106 = platforms.create(c * 960 + 01 * 32, 06 * 32, '1'); block180106.body.immovable = true;
	block180110 = platforms.create(c * 960 + 01 * 32, 10 * 32, '1'); block180110.body.immovable = true;
	block180117 = platforms.create(c * 960 + 01 * 32, 17 * 32, '1'); block180117.body.immovable = true;
	block180201 = platforms.create(c * 960 + 02 * 32, 01 * 32, '1'); block180201.body.immovable = true;
	block180206 = platforms.create(c * 960 + 02 * 32, 06 * 32, '1'); block180206.body.immovable = true;
	block180210 = platforms.create(c * 960 + 02 * 32, 10 * 32, '1'); block180210.body.immovable = true;
	block180217 = platforms.create(c * 960 + 02 * 32, 17 * 32, '1'); block180217.body.immovable = true;
	block180303 = platforms.create(c * 960 + 03 * 32, 03 * 32, '1'); block180303.body.immovable = true;
	block180310 = platforms.create(c * 960 + 03 * 32, 10 * 32, '1'); block180310.body.immovable = true;
	block180313 = platforms.create(c * 960 + 03 * 32, 13 * 32, '1'); block180313.body.immovable = true;
	block180403 = platforms.create(c * 960 + 04 * 32, 03 * 32, '1'); block180403.body.immovable = true;
	block180413 = platforms.create(c * 960 + 04 * 32, 13 * 32, '1'); block180413.body.immovable = true;
	block180417 = platforms.create(c * 960 + 04 * 32, 17 * 32, '1'); block180417.body.immovable = true;
	block180500 = platforms.create(c * 960 + 05 * 32, 00 * 32, '1'); block180500.body.immovable = true;
	block180503 = platforms.create(c * 960 + 05 * 32, 03 * 32, '1'); block180503.body.immovable = true;
	block180504 = platforms.create(c * 960 + 05 * 32, 04 * 32, '1'); block180504.body.immovable = true;
	block180512 = platforms.create(c * 960 + 05 * 32, 12 * 32, '1'); block180512.body.immovable = true;
	block180513 = platforms.create(c * 960 + 05 * 32, 13 * 32, '1'); block180513.body.immovable = true;
	block180519 = platforms.create(c * 960 + 05 * 32, 19 * 32, '1'); block180519.body.immovable = true;
	block180603 = platforms.create(c * 960 + 06 * 32, 03 * 32, '1'); block180603.body.immovable = true;
	block180604 = platforms.create(c * 960 + 06 * 32, 04 * 32, '1'); block180604.body.immovable = true;
	block180612 = platforms.create(c * 960 + 06 * 32, 12 * 32, '1'); block180612.body.immovable = true;
	block180613 = platforms.create(c * 960 + 06 * 32, 13 * 32, '1'); block180613.body.immovable = true;
	block180616 = platforms.create(c * 960 + 06 * 32, 16 * 32, '1'); block180616.body.immovable = true;
	block180619 = platforms.create(c * 960 + 06 * 32, 19 * 32, '1'); block180619.body.immovable = true;
	block180704 = platforms.create(c * 960 + 07 * 32, 04 * 32, '1'); block180704.body.immovable = true;
	block180709 = platforms.create(c * 960 + 07 * 32, 09 * 32, '1'); block180709.body.immovable = true;
	block180712 = platforms.create(c * 960 + 07 * 32, 12 * 32, '1'); block180712.body.immovable = true;
	block180716 = platforms.create(c * 960 + 07 * 32, 16 * 32, '1'); block180716.body.immovable = true;
	block180719 = platforms.create(c * 960 + 07 * 32, 19 * 32, '1'); block180719.body.immovable = true;
	block180800 = platforms.create(c * 960 + 08 * 32, 00 * 32, '1'); block180800.body.immovable = true;
	block180804 = platforms.create(c * 960 + 08 * 32, 04 * 32, '1'); block180804.body.immovable = true;
	block180808 = platforms.create(c * 960 + 08 * 32, 08 * 32, '1'); block180808.body.immovable = true;
	block180809 = platforms.create(c * 960 + 08 * 32, 09 * 32, '1'); block180809.body.immovable = true;
	block180810 = platforms.create(c * 960 + 08 * 32, 10 * 32, '1'); block180810.body.immovable = true;
	block180811 = platforms.create(c * 960 + 08 * 32, 11 * 32, '1'); block180811.body.immovable = true;
	block180812 = platforms.create(c * 960 + 08 * 32, 12 * 32, '1'); block180812.body.immovable = true;
	block180816 = platforms.create(c * 960 + 08 * 32, 16 * 32, '1'); block180816.body.immovable = true;
	block180902 = platforms.create(c * 960 + 09 * 32, 02 * 32, '1'); block180902.body.immovable = true;
	block180907 = platforms.create(c * 960 + 09 * 32, 07 * 32, '1'); block180907.body.immovable = true;
	block180908 = platforms.create(c * 960 + 09 * 32, 08 * 32, '1'); block180908.body.immovable = true;
	block180916 = platforms.create(c * 960 + 09 * 32, 16 * 32, '1'); block180916.body.immovable = true;
	block180919 = platforms.create(c * 960 + 09 * 32, 19 * 32, '1'); block180919.body.immovable = true;
	block181000 = platforms.create(c * 960 + 10 * 32, 00 * 32, '1'); block181000.body.immovable = true;
	block181002 = platforms.create(c * 960 + 10 * 32, 02 * 32, '1'); block181002.body.immovable = true;
	block181007 = platforms.create(c * 960 + 10 * 32, 07 * 32, '1'); block181007.body.immovable = true;
	block181102 = platforms.create(c * 960 + 11 * 32, 02 * 32, '1'); block181102.body.immovable = true;
	block181114 = platforms.create(c * 960 + 11 * 32, 14 * 32, '1'); block181114.body.immovable = true;
	block181115 = platforms.create(c * 960 + 11 * 32, 15 * 32, '1'); block181115.body.immovable = true;
	block181118 = platforms.create(c * 960 + 11 * 32, 18 * 32, '1'); block181118.body.immovable = true;
	block181200 = platforms.create(c * 960 + 12 * 32, 00 * 32, '1'); block181200.body.immovable = true;
	block181212 = platforms.create(c * 960 + 12 * 32, 12 * 32, '1'); block181212.body.immovable = true;
	block181218 = platforms.create(c * 960 + 12 * 32, 18 * 32, '1'); block181218.body.immovable = true;
	block181307 = platforms.create(c * 960 + 13 * 32, 07 * 32, '1'); block181307.body.immovable = true;
	block181312 = platforms.create(c * 960 + 13 * 32, 12 * 32, '1'); block181312.body.immovable = true;
	block181316 = platforms.create(c * 960 + 13 * 32, 16 * 32, '1'); block181316.body.immovable = true;
	block181402 = platforms.create(c * 960 + 14 * 32, 02 * 32, '1'); block181402.body.immovable = true;
	block181407 = platforms.create(c * 960 + 14 * 32, 07 * 32, '1'); block181407.body.immovable = true;

	c += 0.5;

	timer1 = 0;

},

destroyPlatform1Loader:	function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform1, this);
},
destroyPlatform2Loader:	function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform2, this);
},
destroyPlatform3Loader:	function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform3, this);
},
destroyPlatform4Loader:	function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform4, this);
},
destroyPlatform5Loader:	function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform5, this);
},
destroyPlatform6Loader:	function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform6, this);
},
destroyPlatform7Loader:	function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform7, this);
},
destroyPlatform8Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform8, this);
},
destroyPlatform9Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform9, this);
},
destroyPlatform10Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform10, this);
},
destroyPlatform11Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform11, this);
},
destroyPlatform12Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform12, this);
},
destroyPlatform13Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform13, this);
},
destroyPlatform14Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform14, this);
},
destroyPlatform15Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform15, this);
},
destroyPlatform16Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform16, this);
},
destroyPlatform17Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform17, this);
},
destroyPlatform18Loader: function ()
{
	game.time.events.add(Phaser.Timer.SECOND * 1, this.destroyPlatform18, this);
},

destroyPlatform1:	function ()
{
	if (player3.x - block297.x >= 480)
	{
		block297.destroy();
		block298.destroy();
		block299.destroy();
		block300.destroy();
		block301.destroy();
		block302.destroy();
		block303.destroy();
		block304.destroy();
		block305.destroy();
		block306.destroy();
		block307.destroy();
		block308.destroy();
		block309.destroy();
		block310.destroy();
		block311.destroy();
		block312.destroy();
		block313.destroy();
		block314.destroy();
		block315.destroy();
		block316.destroy();
		block317.destroy();
		block318.destroy();
		block319.destroy();
		block320.destroy();
		block321.destroy();
		block322.destroy();
		block323.destroy();
		block324.destroy();
		block325.destroy();
		block326.destroy();
		block327.destroy();
		block328.destroy();
		block329.destroy();
		block330.destroy();
		block331.destroy();
		block332.destroy();
		block333.destroy();
		block334.destroy();
		block335.destroy();
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

destroyPlatform8: function ()
{
	if (player3.x - block400 >= 480)
	{
		block400.destroy();
		block401.destroy();
		block402.destroy();
		block403.destroy();
		block404.destroy();
		block405.destroy();
		block406.destroy();
		block407.destroy();
		block408.destroy();
		block409.destroy();
		block410.destroy();
		block411.destroy();
		block412.destroy();
		block413.destroy();
		block414.destroy();
		block415.destroy();
		block416.destroy();
		block417.destroy();
		block418.destroy();
		block419.destroy();
		block420.destroy();
		block421.destroy();
		block422.destroy();
		block423.destroy();
		block424.destroy();
		block425.destroy();
		block426.destroy();
		block427.destroy();
		block428.destroy();
		block429.destroy();
		block430.destroy();
		block431.destroy();
		block432.destroy();
		block433.destroy();
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

destroyPlatform12: function ()
{
	if (player3.x - block367.x >= 480)
	{
		block336.destroy();
		block337.destroy();
		block338.destroy();
		block339.destroy();
		block340.destroy();
		block341.destroy();
		block342.destroy();
		block343.destroy();
		block345.destroy();
		block346.destroy();
		block347.destroy();
		block348.destroy();
		block349.destroy();
		block350.destroy();
		block351.destroy();
		block352.destroy();
		block353.destroy();
		block354.destroy();
		block355.destroy();
		block356.destroy();
		block357.destroy();
		block358.destroy();
		block359.destroy();
		block360.destroy();
		block361.destroy();
		block362.destroy();
		block363.destroy();
		block364.destroy();
		block365.destroy();
		block366.destroy();
		block367.destroy();
	}
},

destroyPlatform13: function ()
{
	if (player3.x - block130000.x >= 480)
	{
		block130000.destroy();
		block130001.destroy();
		block130006.destroy();
		block130016.destroy();
		block130019.destroy();
		block130100.destroy();
		block130102.destroy();
		block130103.destroy();
		block130106.destroy();
		block130111.destroy();
		block130116.destroy();
		block130119.destroy();
		block130209.destroy();
		block130210.destroy();
		block130211.destroy();
		block130214.destroy();
		block130219.destroy();
		block130300.destroy();
		block130304.destroy();
		block130307.destroy();
		block130308.destroy();
		block130309.destroy();
		block130310.destroy();
		block130317.destroy();
		block130404.destroy();
		block130415.destroy();
		block130419.destroy();
		block130501.destroy();
		block130508.destroy();
		block130509.destroy();
		block130514.destroy();
		block130515.destroy();
		block130519.destroy();
		block130601.destroy();
		block130619.destroy();
		block130701.destroy();
		block130703.destroy();
		block130704.destroy();
		block130709.destroy();
		block130710.destroy();
		block130713.destroy();
		block130716.destroy();
		block130719.destroy();
		block130800.destroy();
		block130809.destroy();
		block130810.destroy();
		block130813.destroy();
		block130816.destroy();
		block130900.destroy();
		block130906.destroy();
		block130909.destroy();
		block130918.destroy();
		block131006.destroy();
		block131012.destroy();
		block131013.destroy();
		block131014.destroy();
		block131015.destroy();
		block131018.destroy();
		block131101.destroy();
		block131108.destroy();
		block131115.destroy();
		block131204.destroy();
		block131213.destroy();
		block131214.destroy();
		block131215.destroy();
		block131219.destroy();
		block131300.destroy();
		block131302.destroy();
		block131304.destroy();
		block131307.destroy();
		block131308.destroy();
		block131309.destroy();
		block131310.destroy();
		block131314.destroy();
		block131319.destroy();
		block131400.destroy();
		block131404.destroy();
		block131407.destroy();
		block131408.destroy();
		block131409.destroy();
		block131410.destroy();
		block131414.destroy();
		block131419.destroy();
	}
},
destroyPlatform14: function ()
{
	if (player3.x - block140000.x >= 480)
	{
		block140000.destroy();
		block140004.destroy();
		block140005.destroy();
		block140008.destroy();
		block140011.destroy();
		block140014.destroy();
		block140015.destroy();
		block140019.destroy();
		block140100.destroy();
		block140108.destroy();
		block140111.destroy();
		block140119.destroy();
		block140200.destroy();
		block140202.destroy();
		block140217.destroy();
		block140219.destroy();
		block140300.destroy();
		block140302.destroy();
		block140303.destroy();
		block140316.destroy();
		block140317.destroy();
		block140319.destroy();
		block140405.destroy();
		block140414.destroy();
		block140506.destroy();
		block140513.destroy();
		block140600.destroy();
		block140607.destroy();
		block140612.destroy();
		block140619.destroy();
		block140700.destroy();
		block140707.destroy();
		block140709.destroy();
		block140710.destroy();
		block140712.destroy();
		block140719.destroy();
		block140800.destroy();
		block140807.destroy();
		block140812.destroy();
		block140819.destroy();
		block141005.destroy();
		block141006.destroy();
		block141007.destroy();
		block141012.destroy();
		block141013.destroy();
		block141014.destroy();
		block141105.destroy();
		block141114.destroy();
		block141119.destroy();
		block141200.destroy();
		block141219.destroy();
		block141300.destroy();
		block141307.destroy();
		block141308.destroy();
		block141309.destroy();
		block141310.destroy();
		block141311.destroy();
		block141319.destroy();
		block141400.destroy();
		block141407.destroy();
		block141411.destroy();
		block141419.destroy();

	}
},
destroyPlatform15: function ()
{
	if (player3.x - block150000.x >= 480)
	{
		block150000.destroy();
		block150019.destroy();
		block150100.destroy();
		block150119.destroy();
		block150200.destroy();
		block150201.destroy();
		block150202.destroy();
		block150217.destroy();
		block150218.destroy();
		block150219.destroy();
		block150300.destroy();
		block150301.destroy();
		block150302.destroy();
		block150303.destroy();
		block150305.destroy();
		block150306.destroy();
		block150307.destroy();
		block150309.destroy();
		block150310.destroy();
		block150311.destroy();
		block150312.destroy();
		block150313.destroy();
		block150314.destroy();
		block150315.destroy();
		block150317.destroy();
		block150318.destroy();
		block150319.destroy();
		block150400.destroy();
		block150401.destroy();
		block150402.destroy();
		block150403.destroy();
		block150405.destroy();
		block150406.destroy();
		block150407.destroy();
		block150411.destroy();
		block150412.destroy();
		block150413.destroy();
		block150414.destroy();
		block150415.destroy();
		block150417.destroy();
		block150418.destroy();
		block150419.destroy();
		block150500.destroy();
		block150501.destroy();
		block150502.destroy();
		block150503.destroy();
		block150505.destroy();
		block150506.destroy();
		block150507.destroy();
		block150508.destroy();
		block150509.destroy();
		block150511.destroy();
		block150512.destroy();
		block150513.destroy();
		block150514.destroy();
		block150517.destroy();
		block150518.destroy();
		block150519.destroy();
		block150600.destroy();
		block150601.destroy();
		block150607.destroy();
		block150608.destroy();
		block150609.destroy();
		block150611.destroy();
		block150612.destroy();
		block150613.destroy();
		block150616.destroy();
		block150617.destroy();
		block150618.destroy();
		block150619.destroy();
		block150700.destroy();
		block150701.destroy();
		block150703.destroy();
		block150705.destroy();
		block150707.destroy();
		block150708.destroy();
		block150709.destroy();
		block150713.destroy();
		block150715.destroy();
		block150716.destroy();
		block150717.destroy();
		block150718.destroy();
		block150719.destroy();
		block150800.destroy();
		block150801.destroy();
		block150803.destroy();
		block150805.destroy();
		block150807.destroy();
		block150808.destroy();
		block150811.destroy();
		block150815.destroy();
		block150816.destroy();
		block150817.destroy();
		block150818.destroy();
		block150819.destroy();
		block150900.destroy();
		block150901.destroy();
		block150903.destroy();
		block150905.destroy();
		block150910.destroy();
		block150911.destroy();
		block150912.destroy();
		block150914.destroy();
		block150915.destroy();
		block150916.destroy();
		block150917.destroy();
		block150918.destroy();
		block150919.destroy();
		block151000.destroy();
		block151001.destroy();
		block151003.destroy();
		block151005.destroy();
		block151006.destroy();
		block151007.destroy();
		block151009.destroy();
		block151010.destroy();
		block151011.destroy();
		block151012.destroy();
		block151014.destroy();
		block151015.destroy();
		block151016.destroy();
		block151017.destroy();
		block151018.destroy();
		block151019.destroy();
		block151100.destroy();
		block151101.destroy();
		block151103.destroy();
		block151107.destroy();
		block151109.destroy();
		block151110.destroy();
		block151111.destroy();
		block151112.destroy();
		block151115.destroy();
		block151116.destroy();
		block151117.destroy();
		block151118.destroy();
		block151119.destroy();
		block151200.destroy();
		block151204.destroy();
		block151205.destroy();
		block151207.destroy();
		block151209.destroy();
		block151210.destroy();
		block151211.destroy();
		block151212.destroy();
		block151213.destroy();
		block151215.destroy();
		block151216.destroy();
		block151217.destroy();
		block151218.destroy();
		block151219.destroy();
		block151300.destroy();
		block151319.destroy();
		block151400.destroy();
		block151419.destroy();

	}
},
destroyPlatform16: function ()
{
	if (player3.x - block160000.x >= 480)
	{
		block160000.destroy();
		block160003.destroy();
		block160004.destroy();
		block160010.destroy();
		block160014.destroy();
		block160015.destroy();
		block160016.destroy();
		block160100.destroy();
		block160104.destroy();
		block160110.destroy();
		block160114.destroy();
		block160119.destroy();
		block160200.destroy();
		block160202.destroy();
		block160205.destroy();
		block160219.destroy();
		block160300.destroy();
		block160306.destroy();
		block160309.destroy();
		block160317.destroy();
		block160319.destroy();
		block160406.destroy();
		block160412.destroy();
		block160417.destroy();
		block160500.destroy();
		block160506.destroy();
		block160512.destroy();
		block160517.destroy();
		block160600.destroy();
		block160601.destroy();
		block160602.destroy();
		block160606.destroy();
		block160612.destroy();
		block160619.destroy();
		block160700.destroy();
		block160702.destroy();
		block160706.destroy();
		block160714.destroy();
		block160719.destroy();
		block160800.destroy();
		block160802.destroy();
		block160805.destroy();
		block160809.destroy();
		block160817.destroy();
		block160819.destroy();
		block160900.destroy();
		block160902.destroy();
		block160905.destroy();
		block160909.destroy();
		block160915.destroy();
		block161000.destroy();
		block161005.destroy();
		block161009.destroy();
		block161010.destroy();
		block161103.destroy();
		block161105.destroy();
		block161110.destroy();
		block161111.destroy();
		block161119.destroy();
		block161203.destroy();
		block161205.destroy();
		block161211.destroy();
		block161219.destroy();
		block161300.destroy();
		block161305.destroy();
		block161307.destroy();
		block161315.destroy();
		block161403.destroy();
		block161407.destroy();
		block161414.destroy();
		block161415.destroy();

	}
},
destroyPlatform17: function ()
{
	if (player3.x - block020101.x >= 480)
	{
		block020101.destroy();
		block020118.destroy();
		block020201.destroy();
		block020206.destroy();
		block020207.destroy();
		block020212.destroy();
		block020213.destroy();
		block020218.destroy();
		block020301.destroy();
		block020306.destroy();
		block020307.destroy();
		block020312.destroy();
		block020313.destroy();
		block020318.destroy();
		block020401.destroy();
		block020418.destroy();
		block020503.destroy();
		block020516.destroy();
		block020701.destroy();
		block020705.destroy();
		block020714.destroy();
		block020718.destroy();
		block020805.destroy();
		block020814.destroy();
		block020905.destroy();
		block020909.destroy();
		block020914.destroy();
		block021001.destroy();
		block021009.destroy();
		block021018.destroy();
		block021109.destroy();
		block021205.destroy();
		block021209.destroy();
		block021214.destroy();
		block021301.destroy();
		block021305.destroy();
		block021314.destroy();
		block021318.destroy();

	}
},
destroyPlatform18: function ()
{
	if (player3.x - block180101.x >= 480)
	{
		block180101.destroy();
		block180102.destroy();
		block180106.destroy();
		block180110.destroy();
		block180117.destroy();
		block180201.destroy();
		block180206.destroy();
		block180210.destroy();
		block180217.destroy();
		block180303.destroy();
		block180310.destroy();
		block180313.destroy();
		block180403.destroy();
		block180413.destroy();
		block180417.destroy();
		block180500.destroy();
		block180503.destroy();
		block180504.destroy();
		block180512.destroy();
		block180513.destroy();
		block180519.destroy();
		block180603.destroy();
		block180604.destroy();
		block180612.destroy();
		block180613.destroy();
		block180616.destroy();
		block180619.destroy();
		block180704.destroy();
		block180709.destroy();
		block180712.destroy();
		block180716.destroy();
		block180719.destroy();
		block180800.destroy();
		block180804.destroy();
		block180808.destroy();
		block180809.destroy();
		block180810.destroy();
		block180811.destroy();
		block180812.destroy();
		block180816.destroy();
		block180902.destroy();
		block180907.destroy();
		block180908.destroy();
		block180916.destroy();
		block180919.destroy();
		block181000.destroy();
		block181002.destroy();
		block181007.destroy();
		block181102.destroy();
		block181114.destroy();
		block181115.destroy();
		block181118.destroy();
		block181200.destroy();
		block181212.destroy();
		block181218.destroy();
		block181307.destroy();
		block181312.destroy();
		block181316.destroy();
		block181402.destroy();
		block181407.destroy();

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
