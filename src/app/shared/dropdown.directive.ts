import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDropdown]' // attribute selector
})
export class DropdownDirective {
    open = false;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('click') dropdownClick(eventData: Event) {
        this.open = !this.open;
        if (this.open) {
            this.renderer.addClass(this.element.nativeElement, 'open');
        } else {
            this.renderer.removeClass(this.element.nativeElement, 'open');
        }
    }
}
