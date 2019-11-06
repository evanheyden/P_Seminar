var CloudsandCaves = CloudsandCaves || {};
CloudsandCaves.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

CloudsandCaves.game.state.add('Boot', CloudsandCaves.Boot);
CloudsandCaves.game.state.add('Preload', CloudsandCaves.Preload);
CloudsandCaves.game.state.add('Game', CloudsandCaves.Game);

CloudsandCaves.game.state.start('Boot');
