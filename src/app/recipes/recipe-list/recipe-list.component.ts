import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Little Italy Pizza!', 'this is the best pizza you\'ve ever had, trust me! ', 'https://www.orderbulldawgfood.com/food/v_2_i33383671s.jpg'),
        new Recipe('Donkey On Crack', 'Chuck\'s Fish preimer roll. Cream cheese Spicy sauce Green onion Avocado Tuna Crab Deep fried and topped with Baked seafood Japanese mayo Eel sauce Sriracha Uptown sauce.', 'https://s3-media0.fl.yelpcdn.com/bphoto/HmnSB02FTqSP5mrU9jPyDw/o.jpg')
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onRecipeItemClicked(recipe: Recipe): void {
        console.log(recipe);
        this.recipeSelected.emit(recipe);
    }
}
