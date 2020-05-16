import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Little Italy Pizza!', 'this is the best pizza you\'ve ever had, trust me! ', 'https://upload.wikimedia.org/wikipedia/commons/6/64/NYPizzaPie.jpg'),
        new Recipe('Donkey On Crack', 'Chuck\'s Fish preimer roll. Cream cheese Spicy sauce Green onion Avocado Tuna Crab Deep fried and topped with Baked seafood Japanese mayo Eel sauce Sriracha Uptown sauce.', 'https://s3-media0.fl.yelpcdn.com/bphoto/HmnSB02FTqSP5mrU9jPyDw/o.jpg')
    ];

    constructor() {
    }

    ngOnInit(): void {
    }
}
