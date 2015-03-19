window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() 
    {
        // Load an image and call it 'logo'.
        game.load.image('background','assets/background.png');
        game.load.spritesheet( 'player', 'assets/player.png',21,50);
        game.load.image('person','assets/person.png');
        game.load.image('pitfall','assets/pitfall.png');
        game.load.image('pitfalltwo','assets/pitfalltwo.png');
        game.load.image('win','assets/win.png');
        game.load.image('lose','assets/lose.png');
        game.load.audio('music','assets/Song of Unhealing.mp3');
    }
    
    var player;
    var background;
    var pitfalls;
    var person;
    var cursors;
    var win;
    var lose;
    var fakes;
    var music;
    
    function create() {
    	music = game.add.audio('music');
    	music.play();
        // Create a sprite at the center of the screen using the 'logo' image.
        background = game.add.sprite(0,0,'background');
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        player = game.add.sprite(10, game.world.height - 50, 'player' );
        person = game.add.sprite(700, 10, 'person' );
        game.physics.enable( person , Phaser.Physics.ARCADE );
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( player , Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        player.body.collideWorldBounds = true;
        
        
        pitfalls = game.add.group();
        pitfalls.enableBody = true;
        
        var pit = pitfalls.create(50, game.world.height - 100, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(50, 400, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(50, 200, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(50, 300, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(150, 300, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(150, 100, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(150, 0, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(150, 0, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(250, 0, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(350, 0, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(450, 0, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(550, 0, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(650, 0, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(550, 100, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(450, 100, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(250, 100, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(250, 100, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(250, 200, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(250, 300, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(350, 300, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(450, 300, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(550, 300, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(750, 300, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(750, 400, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(650, 400, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(550, 400, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(450, 400, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(350, 400, 'pitfalltwo');
        pit.body.immovable = true;
         var pit = pitfalls.create(250, 400, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(150, 400, 'pitfall');
        pit.body.immovable = true;
        var pit = pitfalls.create(150, 500, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(250, 500, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(350, 500, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(450, 500, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(550, 500, 'pitfalltwo');
        pit.body.immovable = true;
        var pit = pitfalls.create(650, 500, 'pitfalltwo');
        pit.body.immovable = true;
        
        fakes = game.add.group();
        fakes.enableBody = true;
        var fake = fakes.create(50,300,'pitfall');
        fake.body.immovable = true;
        var fake = fakes.create(50,200,'pitfall');
        fake.body.immovable = true;
        var fake = fakes.create(350,100,'pitfalltwo');
        fake.body.immovable = true;
        var fake = fakes.create(650,300,'pitfalltwo');
        fake.body.immovable = true;
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        cursors = game.input.keyboard.createCursorKeys();
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        game.physics.arcade.overlap(player, person, win, null, this);
     	game.physics.arcade.overlap(player, pitfalls, lose, null, this);
        
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        
    if (cursors.left.isDown)
    {
        //  Move to the left
        player.frame = 3;
        player.body.velocity.x = -150;
        
 	}
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.frame = 2;
        player.body.velocity.x = 150;
        
	}
	else if (cursors.up.isDown)
    {
        //  Move to the left
        player.frame = 1;
        player.body.velocity.y = -150;
        
 	}
    else if (cursors.down.isDown)
    {
        //  Move to the right
        player.frame = 0;
        player.body.velocity.y = 150;
        
	}
        
       }
   function lose()
   {
   player.kill();
   game.add.sprite(0,0,'lose');
   game.paused = true;
   }
   function win()
   {
   player.kill();
   game.add.sprite(0,0,'win');
   person.kill();
   game.paused = true;
   }
};
