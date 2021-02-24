import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styles: []
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameField: ElementRef<HTMLInputElement>;
    @ViewChild('amountInput') amountField: ElementRef<HTMLInputElement>;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    constructor() {
    }

    ngOnInit(): void {
    }

    addIngredient(): void {
        const item = new Ingredient(this.nameField.nativeElement.value, this.amountField.nativeElement.valueAsNumber);
        this.ingredientAdded.emit(item);
        // clear fields
        this.nameField.nativeElement.value = '';
        this.amountField.nativeElement.value = '';
        // would be good to reset the form as well
    }
}
