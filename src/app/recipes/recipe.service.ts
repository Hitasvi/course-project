import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Poori Recipe",
      "puri is an unleavened deep fried bread made with flour & salt.",
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/03/poori-recipe-puri-recipe.jpg",
      [new Ingredient("Flour", 2), new Ingredient("Water", 1)]
    ),
    new Recipe(
      "Kurkuri Bhindi",
      "Kurkuri Bhindi is a spicy fried snack or main course dish made using Okra, gram flour and spices.",
      "https://www.plattershare.com/common/uploaded_files/recipe/5b2224e6108f5_pb.jpg",
      [new Ingredient("Okra", 15), new Ingredient("Gram Flour", 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
