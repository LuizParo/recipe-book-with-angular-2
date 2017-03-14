import { Injectable } from '@angular/core';

import { Ingredient } from '../ingredients/ingredient';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Dummy', 'Dummy', 'https://yt3.ggpht.com/-tpPJuK2c8QA/AAAAAAAAAAI/AAAAAAAAAAA/b_tq0T0lyFI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', [
            new Ingredient('French fries', 2),
            new Ingredient('Pork meat', 1)
        ]),
        new Recipe('Dummy 2', 'Dummy 2', 'https://yt3.ggpht.com/-tpPJuK2c8QA/AAAAAAAAAAI/AAAAAAAAAAA/b_tq0T0lyFI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', []),
    ];

    getRecipes(): Recipe[] {
        return this.recipes;
    }
}