import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
    @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    recipe: Recipe = new Recipe('Dummy', 'Dummy', 'https://yt3.ggpht.com/-tpPJuK2c8QA/AAAAAAAAAAI/AAAAAAAAAAA/b_tq0T0lyFI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg');

    constructor() { }

    ngOnInit() {
    }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}