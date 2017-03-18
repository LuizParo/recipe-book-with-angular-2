import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { RecipeService } from './../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    private recipeIndex: number;
    selectedRecipe:Recipe;

    constructor(private shoppingListService: ShoppingListService,
                private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe((params: any) => {
            this.recipeIndex = params['id'];
            this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onAddToShoppingList(): void {
        this.shoppingListService.addItems(this.selectedRecipe.ingredients);
    }

    onEdit(): void {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    }

    onDelete(): void {
        this.recipeService.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    }
}