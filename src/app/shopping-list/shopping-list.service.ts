import { Ingredient } from '../ingredients/ingredient';

export class ShoppingListService {
    private items: Ingredient[] = [];

    getItems(): Ingredient[] {
        return this.items;
    }

    addItems(items: Ingredient[]): void {
        Array.prototype.push.apply(this.items, items);
    }
}