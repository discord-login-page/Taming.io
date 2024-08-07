class Creature extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setBounce(0.5);
    this.setCollideWorldBounds(true);
    this.setImmovable(false);
    this.setVelocity(Phaser.Math.Between(-20, 20), Phaser.Math.Between(-20, 20));
    this.health = 100;
    this.level = 1;
  }

  tame(inventory) {
    if (inventory.hasItem('apple') && this.health > 0) {
      this.health -= 10;
      inventory.removeItem('apple');
      if (this.health <= 0) {
        this.disableBody(true, true);
        // Add creature taming logic here
      }
    }
  }
}
