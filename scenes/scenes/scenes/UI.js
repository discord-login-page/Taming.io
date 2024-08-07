class UI extends Phaser.Scene {
  constructor() {
    super('UI');
  }

  init() {
    this.inventory = null;
    this.crafting = null;
  }

  create() {
    this.inventory = new Inventory(this);
    this.crafting = new Crafting(this);
  }

  update(time, delta) {
    this.inventory.update();
    this.crafting.update();
  }
}
