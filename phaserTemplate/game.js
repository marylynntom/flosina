var map;

// Create the main game state class
const gameState = function () { };

// Add the create/preload/update functions to the game class
gameState.prototype = {

  // Phaser function to load assets (images, sounds, etc)
  preload: function () {

    /*** Load assets here ***/
    this.load.image('map', 'img/map.jpg');
  
  },

  // Phaser function to initialize variables and instantiate objects
  create: function () {
      
    // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.setScreenSize(true);
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.input.onDown.add(goFull, this);
      
    // Add some text
    text = game.add.text(300, 280, '', { fontSize: '32px', fill: '#fff' });
      
    map = this.add.sprite(0, 0, 'map');
      
    this.input.mouse.capture = true;
  },

  // Phaser main game function to update the screen
  update: function () {
      
    // Show mouse coordinates for debugging and placing objects
    // text.setText("X: " + game.input.mousePointer.x + "  Y: " + game.input.mousePointer.y);
      
    // game.debug.text("Left Button: " + this.input.activePointer.leftButton.isDown, 300, 132);
      
    /* if (this.input.activePointer.leftButton.isDown) {
        map.scale.setTo(1.5);
    } */
  }
};

function goFull() {
    game.scale.startFullScreen();
}

// Global variables
let text;