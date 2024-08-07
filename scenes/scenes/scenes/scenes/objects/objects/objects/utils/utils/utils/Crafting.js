class Crafting {
  constructor(scene) {
    this.scene = scene;
    this.recipes = [
      { input: ['apple', 'grass'], output: 'carrot' },
      // Add more recipes here
    ];
  }

  canCraft(input) {
    return this.recipes.some(recipe => {
      if (input.every(item => recipe.input.includes(item))) {
        return true;
      }
      return false;
    });
  }

  craft(input) {
    const recipe = this.recipes.find(recipe => input.every(item => recipe.input.includes(item)));
    if (recipe) {
      // Remove input items from inventory and add output item to inventory
    }
  }

  update() {
    // Add crafting UI update logic here
  }
}
