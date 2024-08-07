class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.add.image(400, 300, 'loading');
    this.load.setPath('assets/');
    this.load.image('tile', 'tiles/grass.png');
    // Load other assets here
  }

  create() {
    this.scene.start('Game');
  }
}
