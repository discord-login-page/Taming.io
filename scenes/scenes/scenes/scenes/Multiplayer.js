class Multiplayer extends Phaser.Scene {
  constructor() {
    super('Multiplayer');
  }

  init() {
    this.socket = null;
    this.otherPlayers = this.physics.add.group();
  }

  create() {
    this.socket = io();
    this.socket.on('playerConnected', this.addOtherPlayer.bind(this));
    this.socket.on('playerDisconnected', this.removeOtherPlayer.bind(this));
    this.socket.on('playerMoved', this.moveOtherPlayer.bind(this));
  }

  addOtherPlayer(playerInfo) {
    const otherPlayer = new Player(this, playerInfo.x, playerInfo.y);
    otherPlayer.setOtherPlayer(true);
    this.otherPlayers.add(otherPlayer);
  }

  removeOtherPlayer(playerId) {
    this.otherPlayers.getChildren().forEach(otherPlayer => {
      if (otherPlayer.id === playerId) {
        otherPlayer.disableBody(true, true);
      }
    });
  }

  moveOtherPlayer(playerId, x, y) {
    this.otherPlayers.getChildren().forEach(otherPlayer => {
      if (otherPlayer.id === playerId) {
        otherPlayer.setPosition(x, y);
      }
    });
  }

  update(time, delta) {
    if (this.socket && this.player) {
      this.socket.emit('playerMoved', {
        id: this.player.id,
        x: this.player.x,
        y: this.player.y
      });
    }
  }
}
