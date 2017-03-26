import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { Recipe } from './../recipe';
import { RecipeService } from './../recipe.service';

@Component({
    selector: 'rb-recipe-edit',
    templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    private recipeIndex: number;
    private recipe: Recipe = null;
    private isNew: boolean = true;
    private subscription: Subscription;

    recipeForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private recipeService: RecipeService,
                private formBuilder: FormBuilder,
                private router: Router) { }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                if(params.hasOwnProperty('id')) {
                    this.isNew = false;
                    this.recipeIndex = parseInt(params['id']);
                    this.recipe = this.recipeService.getRecipe(this.recipeIndex);
                }
            }
        );

        this.initForm();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onSubmit(): void {
        const newRecipe: Recipe = this.recipeForm.value;

        if(this.isNew) {
            this.recipeService.addRecipe(newRecipe);
            return;
        }
        this.recipeService.editRecipe(this.recipe, newRecipe);
        this.navigateBack();
    }

    onCancel(): void {
        this.navigateBack();
    }

    onAddItem(name: string, amount: string): void {
        (<FormArray>this.recipeForm.controls['ingredients']).push(
            new FormGroup({
                name : new FormControl(name, Validators.required),
                amount : new FormControl(parseFloat(amount), [Validators.required, Validators.pattern('\\d+')])
            })
        );
    }

    onRemoveItem(index: number): void {
        (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
    }

    private navigateBack(): void {
        this.router.navigate(['../']);
    }

    private initForm(): void {
        let recipeName: string = "";
        let recipeImageUrl: string = "";
        let recipeContent: string = "";
        let recipeIngredients: FormArray = new FormArray([]);

        if(!this.isNew) {
            this.recipe.ingredients
                .map(ingredient => new FormGroup({
                    name : new FormControl(ingredient.name, Validators.required),
                    amount : new FormControl(ingredient.amount, [Validators.required, Validators.pattern('\\d+')])
                }))
                .map(formGroup => recipeIngredients.push(formGroup));

            recipeName = this.recipe.name;
            recipeImageUrl = this.recipe.imagePath;
            recipeContent = this.recipe.description;
        }
        
        this.recipeForm = this.formBuilder.group({
            name : [recipeName, Validators.required],
            imagePath : [recipeImageUrl, Validators.required],
            description : [recipeContent, Validators.required],
            ingredients : recipeIngredients,
        });
    }
}