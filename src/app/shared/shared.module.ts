import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// If we had declarations associated with one module, we would have to import it before exporting.
@NgModule({
    exports : [CommonModule]
})
export class SharedModule {

}