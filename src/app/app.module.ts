import 'rxjs/Rx';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { ROUTING } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        ROUTING
    ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    providers: [RecipeService, ShoppingListService],
    bootstrap: [AppComponent]
})
export class AppModule {}