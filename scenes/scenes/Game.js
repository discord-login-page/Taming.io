class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.player = null;
    this.items = this.physics.add.group();
    this.creatures = this.physics.add.group();
    this.map = null;
    this.cursors = null;
  }

  preload() {
    this.load.tilemapTiledJSON('map', 'maps/map.json');
    // Load other assets here
  }

  create() {
    this.map = this.make.tilemap({ key: 'map' });
    const tileset = this.map.addTilesetImage('grass', 'tile');
    const layer = this.map.createStaticLayer('Ground', tileset, 0, 0);
    layer.setCollisionByProperty({ collides: true });

    this.player = new Player(this, 400, 300);
    this.physics.add.collider(this.player, layer);

    this.items = new Item(this, this.physics.world, this.map, this.items);
    this.creatures = new Creature(this, this.physics.world, this.map, this.creatures);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.overlap(this.player, this.items, this.collectItem, null, this);
    this.physics.add.overlap(this.player, this.creatures, this.tameCreature, null, this);

   this.physics.add.overlap(this.player, this.creatures, this.tameCreature, null, this);

    this.scene.launch('UI');
    this.scene.launch('Multiplayer');
  }

  update(time, delta) {
    this.player.update(this.cursors);
  }

  collectItem(player, item) {
    item.collect(this.player.inventory);
    item.disableBody(true, true);
  }

  tameCreature(player, creature) {
    creature.tame(this.player.inventory);
    creature.disableBody(true, true);
  }
}
