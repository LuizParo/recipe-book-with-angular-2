import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../ingredients/ingredient';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
    private url: string = 'https://recipebook-925c1.firebaseio.com/recipes.json';

    private recipes: Recipe[] = [
        new Recipe('French fries', 'French fries', 'http://www.texaschickenmalaysia.com/menu/sides-french-fries.png', [
            new Ingredient('French fries', 2),
            new Ingredient('Pork meat', 1)
        ]),
        new Recipe('Bacon', 'Bacon', 'http://www.brechando.com/wp-content/uploads/2016/06/bacon.jpg', []),
    ];
    
    recipesChanged: EventEmitter<Recipe[]> = new EventEmitter<Recipe[]>();

    constructor(private http: Http) {}

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

    storeData(): Observable<any> {
        const body: string = JSON.stringify(this.recipes);
        const headers: Headers = new Headers({
            'Content-Type' : 'application/json'
        });

        return this.http.put(this.url, body, {headers : headers});
    }

    fetchData() {
        return this.http.get(this.url)
            .map((response: Response) => response.json())
            .subscribe((data: Recipe[]) => {
                this.recipes = data;
                this.recipesChanged.emit(this.recipes);
            });
    }
}