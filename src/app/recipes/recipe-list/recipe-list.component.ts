import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('bob', 's nadenica', 'https://recepti.gotvach.bg/files/lib/600x350/bobnadenichka5.jpg'),
    new Recipe('bob', 'bez nadenica', 'https://recepti.gotvach.bg/files/lib/600x350/bobnadenichka5.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeChange(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
