class MapGenerator {
  constructor(scene) {
    this.scene = scene;
    this.map = null;
  }

  generateMap(width, height) {
    this.map = this.scene.make.tilemap({ width, height });
    const tileset = this.scene.textures.get('tile');
    this.map.addTilesetImage('grass', 'tile');
    const layer = this.map.createStaticLayer('Ground', tileset, 0, 0);
    layer.setCollisionByProperty({ collides: true });
    return this.map;
  }
}
