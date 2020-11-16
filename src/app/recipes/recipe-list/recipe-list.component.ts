import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('bob', 's nadenica', 'https://recepti.gotvach.bg/files/lib/600x350/bobnadenichka5.jpg'),
    new Recipe('bob', 's nadenica', 'https://recepti.gotvach.bg/files/lib/600x350/bobnadenichka5.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
