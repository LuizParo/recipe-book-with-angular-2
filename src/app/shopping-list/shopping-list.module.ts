import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';

import { shoppingListRouting } from './shopping-list.routing';

@NgModule({
    imports : [
        FormsModule,
        SharedModule,
        shoppingListRouting
    ],
    declarations : [
        ShoppingListAddComponent,
        ShoppingListComponent
    ]
})
export class ShoppingListModule {

}