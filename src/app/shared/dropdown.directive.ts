import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDropdown]' // attribute selector
})
export class DropdownDirective {
    @HostBinding('class.open') open = false;

    constructor(private element: ElementRef) {
    }

    @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
        console.log(eventData);
        console.log(eventData.target);
        this.open = this.element.nativeElement.contains(eventData.target) ? !this.open : false;
    }
}
