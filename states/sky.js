// The Sky Sub-Kingdom
// Home to Aidan's Character

const skyState = {

    preload: function () {

        game.load.image('backdrop', 'img/skyKingdom.jpg');
        game.load.image('map', 'img/main.png');
        
         game.load.spritesheet('angelw', 'img/charAngelWings.png', 32, 32, 13);
        
    },

    create: function () {
        
        game.add.sprite(0, 0, 'backdrop');
        console.log("Sky!");
        
        // Add button to go to back to Map
        
        const map = game.add.sprite(50, 50, 'map');
        map.anchor.set(0.5);
        map.inputEnabled = true;
        map.input.useHandCursor = true;  // Change cursor style on mouseover

        // Add a function to the button to be called when the button is clicked
        map.events.onInputDown.add(function () {
            game.state.start('game');
        }, this);
                         game.add.sprite(400, 400, 'angelw');
        // Add Angel WIngs animations
        
        const angelwFrames = [];
        for (let i = 1; i < 14; i++) {
                   angelwFrames.push(i);
            
        
        angelw.animations.add('play', angelwFrames, 10, true);
            
    update: function () {

        
        
    }

};
        // Animate char: Angel WIngs
        angelw.animations.play('play');
