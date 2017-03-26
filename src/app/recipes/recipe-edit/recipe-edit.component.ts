import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { RecipeService } from './../recipe.service';

@Component({
    selector: 'rb-recipe-edit',
    templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    private recipeIndex: number;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute,
                private recipeService: RecipeService) { }

    ngOnInit(): void {

        this.subscription = this.route.params.subscribe(
            (params: any) => {
                let isNew: boolean = true;

                if(params.hasOwnProperty('id')) {
                    isNew = false;
                    this.recipeIndex = parseInt(params['id']);
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}