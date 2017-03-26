import { Injectable } from '@angular/core';

import { Ingredient } from '../ingredients/ingredient';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('French fries', 'French fries', 'http://www.texaschickenmalaysia.com/menu/sides-french-fries.png', [
            new Ingredient('French fries', 2),
            new Ingredient('Pork meat', 1)
        ]),
        new Recipe('Bacon', 'Bacon', 'http://www.brechando.com/wp-content/uploads/2016/06/bacon.jpg', []),
    ];

    getRecipes(): Recipe[] {
        return this.recipes;
    }

    getRecipe(id: number): Recipe {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe): void {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe): void {
        let index = this.recipes.indexOf(oldRecipe);
        this.recipes[index] = newRecipe;
    }
}