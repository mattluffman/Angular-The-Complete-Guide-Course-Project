import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDropdown]' // attribute selector
})
export class DropdownDirective {
    @HostBinding('class.open') open = false;

    constructor() {
    }

    @HostListener('click') toggleOpen(eventData: Event) {
        this.open = !this.open;
    }
}
