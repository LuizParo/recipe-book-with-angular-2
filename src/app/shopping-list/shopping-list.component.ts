import { Component, OnInit } from '@angular/core';

import { Ingredient } from './../ingredients/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'rb-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
    items: Ingredient[] = [];
    selectedItem: Ingredient = null;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.items = this.shoppingListService.getItems();
    }

    onSelectItem(item: Ingredient): void {
        this.selectedItem = item;
    }

    onItemCleared(): void {
        this.selectedItem = null;
    }
}