import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('The Best Pizza!', 'this is the best pizza you\'ve ever had, trust me!', 'https://upload.wikimedia.org/wikipedia/commons/6/64/NYPizzaPie.jpg')
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
