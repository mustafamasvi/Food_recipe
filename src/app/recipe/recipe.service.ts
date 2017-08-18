import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is the test recipie',
     'https://goo.gl/5viSWL',
     [
         new Ingredient('Apples', 20),
         new Ingredient('Banana', 30)
     ]),
    new Recipe('Another Test Recipe',
    'This is the test recipie',
    'https://goo.gl/5viSWL',
    [
        new Ingredient('Kiwi', 80),
        new Ingredient('Milk', 20)
    ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}
