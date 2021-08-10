import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Little Italy Pizza!',
            'this is the best pizza you\'ve ever had, trust me! ',
            'https://www.orderbulldawgfood.com/food/v_2_i33383671s.jpg',
            [
                new Ingredient('Dough', 1),
                new Ingredient('Sauce', 0.2),
                new Ingredient('Cheese', 1),
                new Ingredient('Pepperoni', 20)
            ]
        ),
        new Recipe(
            'Donkey On Crack',
            'Chuck\'s Fish premier roll. Cream cheese Spicy sauce Green onion Avocado Tuna Crab Deep fried and topped with Baked seafood Japanese mayo Eel sauce Sriracha Uptown sauce.',
            'https://s3-media0.fl.yelpcdn.com/bphoto/HmnSB02FTqSP5mrU9jPyDw/o.jpg',
            [
                new Ingredient('Cream Cheese', 1),
                new Ingredient('Rice', 1),
                new Ingredient('Sauce', 3),
                new Ingredient('Avacado', 1),
                new Ingredient('Crab', 1),
                new Ingredient('Tuna', 1),
                new Ingredient('Mayo', 1),
                new Ingredient('Sriracha', 1),
                new Ingredient('Green onion', 1)
            ]
        )
    ];

    constructor() {
    }

    getRecipes() {
        return this.recipes.slice(); // using slice with no arguments here basically makes a copy of this object.
                                     // That way the client code can't modify the array in the service.
    }
}
