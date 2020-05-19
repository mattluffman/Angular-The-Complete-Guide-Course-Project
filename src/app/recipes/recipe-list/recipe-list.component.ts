import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Little Italy Pizza!', 'this is the best pizza you\'ve ever had, trust me! ', 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/82082680_3055049484514959_6696054683926003712_n.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=Ch-0W2qhZ7kAX9wDjO2&_nc_ht=scontent-atl3-1.xx&oh=042987dec59ecbf645e41319abfe5899&oe=5EE96F5E'),
        new Recipe('Donkey On Crack', 'Chuck\'s Fish preimer roll. Cream cheese Spicy sauce Green onion Avocado Tuna Crab Deep fried and topped with Baked seafood Japanese mayo Eel sauce Sriracha Uptown sauce.', 'https://s3-media0.fl.yelpcdn.com/bphoto/HmnSB02FTqSP5mrU9jPyDw/o.jpg')
    ];

    constructor() {
    }

    ngOnInit(): void {
    }
}
