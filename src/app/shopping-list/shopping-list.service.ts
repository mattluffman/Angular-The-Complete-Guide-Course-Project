import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() {
    }

    getIngredients(): Ingredient[] {
        // using slice with no arguments here basically makes a copy of this object.
        // That way the client code can't modify the array in the service.
        // same as in RecipeService
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit();
    }

    /**
     * add multiple {@link Ingredient}'s to the list at once
     * @param ingredients list of ingredients
     */
    addIngredients(ingredients: Ingredient[]): void {
        ingredients.forEach(i => this.ingredients.push(i));
        this.ingredientsChanged.emit();
    }
}
