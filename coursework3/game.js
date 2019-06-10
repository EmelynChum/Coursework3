var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 520,
    backgroundColor: '#FFFACD',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('point', 'img/Boid.png');
}

function create() {
    // Each node
    var points = [
    50,  300, 179, 449, 394, 498, 
    593, 455, 701, 338, 692, 190, 
    603, 76,  423, 41, 272, 78, 
    181, 186, 230, 328, 416, 395,
    565, 327, 550, 202, 467, 149,
    355, 164, 343, 254, 428, 303
    ];

    //Link each node
    var curve = new Phaser.Curves.Spline(points);

    //Draw line
    var graphics = this.add.graphics();
    graphics.lineStyle(1, 0xFFFF00, 0.5);
    curve.draw(graphics, 128);
    graphics.fillStyle(0x4169E1, 0.5);
    for (var i = 0; i < curve.points.length; i++) {
        graphics.fillCircle(curve.points[i].x, curve.points[i].y, 4);
    }
    //Create object
    var lemming = this.add.follower(curve, 50, 300, 'racecar').setScale(0.3);

   //Let the object follow the path
    lemming.startFollow({
        duration: 10000,
        yoyo: true,
        repeat: 2,
        rotateToPath: true,
        verticalAdjust: true
    });

//audio
function preload() { 
　　  game.load.audio('sound', 'sound/sound.mp3');
}

function create() {
    //Add music to the game scene and play it
    music = game.add.audio('sound');
    music.play();
    //Set the volume
    music.volume = 0.6;
}
}