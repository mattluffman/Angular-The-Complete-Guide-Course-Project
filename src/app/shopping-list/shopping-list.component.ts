import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();

        // subscribe to changes emitted from service
        this.shoppingListService.ingredientAdded.subscribe(
            () => {
                this.ingredients = this.shoppingListService.getIngredients();
            }
        );
    }
}
