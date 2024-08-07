class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.path = 'assets/';
    this.load.image('loading', 'ui/loading.png');
  }

  create() {
    this.scene.start('Preload');
  }
}
