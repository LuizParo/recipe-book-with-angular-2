import { Ingredient } from './../ingredients/ingredient';

export class ShoppingListService {
    private items: Ingredient[] = [];

    getItems(): Ingredient[] {
        return this.items;
    }

    addItems(items: Ingredient[]): void {
        Array.prototype.push.apply(this.items, items);
    }

    addItem(item: Ingredient): void {
        this.items.push(item);
    }

    editItem(oldItem: Ingredient, newItem: Ingredient): void {
        let index = this.items.indexOf(oldItem);
        this.items[index] = newItem;
    }

    deleteItem(item: Ingredient): void {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
}