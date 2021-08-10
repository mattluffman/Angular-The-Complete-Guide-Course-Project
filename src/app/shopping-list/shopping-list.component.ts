import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private slService: ShoppingListService) {
    }

    ngOnInit(): void {
        this.ingredients = this.slService.getIngredients();

        // subscribe to changes emitted from service
        this.slService.ingredientAdded.subscribe(
            () => {
                this.ingredients = this.slService.getIngredients();
            }
        );
    }
}
