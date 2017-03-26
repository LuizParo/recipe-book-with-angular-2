import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Ingredient } from './../ingredients/ingredient';

import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'rb-shopping-list-add',
    templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
    @Input() item: Ingredient;
    @Output() cleared: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
    isAdding: boolean = true;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnChanges(changes): void {
        this.isAdding = changes.item.currentValue === null;
        this.item = changes.item.currentValue === null ? {name : null, amount : null} : this.item;
    }

    onSubmit(ingredient: Ingredient): void {
        const newIngredient = new Ingredient(ingredient.name, ingredient.amount);

        if(this.isAdding) {
            this.item = newIngredient;
            this.shoppingListService.addItem(this.item);
            return;
        }

        this.shoppingListService.editItem(this.item, newIngredient);
        this.onClear();
    }

    onDelete(): void {
        this.shoppingListService.deleteItem(this.item);
        this.onClear();
    }

    onClear(): void {
        this.isAdding = true;
        this.cleared.emit(null);
    }
}