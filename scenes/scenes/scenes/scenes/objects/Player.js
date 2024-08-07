class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player_idle');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.setMaxVelocity(200);
    this.setDrag(100);
    this.setAcceleration(200);
    this.setFriction(0.8);
    this.setAngularVelocity(0);
    this.setAngularDrag(100);
    this.setMass(1);
    this.setInertia(0.8);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.setImmovable(true);
    this.id = Phaser.Math.RND.uuid();
    this.inventory = new Inventory(this.scene);
    this.otherPlayer = false;
  }

  update(cursors) {
    if (!this.otherPlayer) {
      this.handleInput(cursors);
      this.handleAnimations();
    }
  }

  handleInput(cursors) {
    const acceleration = 200;

    if (cursors.left.isDown) {
      this.setAngularVelocity(-300);
    } else if (cursors.right.isDown) {
      this.setAngularVelocity(300);
    } else {
      this.setAngularVelocity(0);
    }

    if (cursors.up.isDown) {
      this.setAccelerationY(-acceleration);
    } else if (cursors.down.isDown) {
      this.setAccelerationY(acceleration);
    } else {
      this.setAccelerationY(0);
    }
  }

  handleAnimations() {
    const { body } = this;
    const isMoving = body.velocity.length() > 0;

    if (isMoving) {
      this.setTexture('player_run');
    } else {
      this.setTexture('player_idle');
    }
  }

  setOtherPlayer(value) {
    this.otherPlayer = value;
    if (value) {
      this.setImmovable(false);
      this.setCollideWorldBounds(false);
      this.setBounce(0);
    }
  }
}
