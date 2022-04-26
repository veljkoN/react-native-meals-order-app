class Meal {
  constructor(
    id,
    cateogryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    IsGlutenFree,
    isVegan,
    isVegeterian,
    isLactoseFree
  ) {
    this.id = id;
    this.cateogryIds = cateogryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.IsGlutenFree = IsGlutenFree;
    this.isVegan = isVegan;
    this.isVegeterian = isVegeterian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
