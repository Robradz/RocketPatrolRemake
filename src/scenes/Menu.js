class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', '../../assets/blip_select12.wav');
        this.load.audio('sfx_explosion', '../../assets/explosion38.wav');
        this.load.audio('sfx_rocket', '../../assets/rocket_shot.wav');
    }

    create() {
        // display score
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //Show Menu Text
        this.add.text(game.config.width/2, game.config.height/2 - 
            borderUISize - borderPadding, 'ROCKET PATROL', 
            menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2,
            "Use <- -> arrows to move & (F) to fire", menuConfig).setOrigin(0.5);
        
    }
}