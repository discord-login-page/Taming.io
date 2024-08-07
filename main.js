const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: [Boot, Preload, Game, UI, Multiplayer]
};

const game = new Phaser.Game(config);
