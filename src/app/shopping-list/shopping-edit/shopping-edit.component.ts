import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styles: []
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput', {static: false}) nameField: ElementRef<HTMLInputElement>;
    @ViewChild('amountInput', {static: false}) amountField: ElementRef<HTMLInputElement>;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit(): void {
    }

    /**
     * creating new Ingredient & emitting event when new ingredient is added,
     * also clearing form fields
     */
    onAddIngredient(): void {
        const item = new Ingredient(this.nameField.nativeElement.value, this.amountField.nativeElement.valueAsNumber);
        // this.ingredientAdded.emit(item); // old call from when we were emitting this locally
        this.shoppingListService.addIngredient(item);

        // clear fields
        this.nameField.nativeElement.value = '';
        this.amountField.nativeElement.value = '';
        // would be good to reset the form as well
    }
}
