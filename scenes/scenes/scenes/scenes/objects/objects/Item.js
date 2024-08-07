
```javascript
class Item extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setBounce(0.5);
    this.setCollideWorldBounds(true);
    this.setImmovable(false);
    this.setVelocity(Phaser.Math.Between(-20, 20), Phaser.Math.Between(-20, 20));
  }

  collect(inventory) {
    inventory.addItem(this.key);
  }
}
