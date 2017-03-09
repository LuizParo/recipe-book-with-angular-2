import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[rbDropdown]'
})
export class DropdownDirective {
    private isOpen: Boolean = false;

    @HostBinding('class.open') get opened(): Boolean {
        return this.isOpen;
    }

    @HostListener('click') open(): void {
        this.isOpen = true;
    }

    @HostListener('mouseleave') close(): void {
        this.isOpen = false;
    }

    constructor() { }
}