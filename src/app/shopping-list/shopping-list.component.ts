import { Component } from '@angular/core';
import { Ingredient } from '../_shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('zahar', 5),
    new Ingredient('sol', 3),
    new Ingredient('krastavica', 2),
    new Ingredient('domat', 1),
  ];

  onIngredientCreated(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
