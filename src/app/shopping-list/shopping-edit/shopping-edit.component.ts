import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Ingredient} from '../../_shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  clearForm(): void {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

  onCreateIngredient(): void {
    const name = this.nameInputRef.nativeElement.value;
    const amount = Number.parseInt(this.amountInputRef.nativeElement.value, 10);
    if (name === '') {
      alert('Name cannot be empty!');
      return;
    }
    if (amount === 0 || isNaN(amount)) {
      alert('Amount cannot be 0!');
      return;
    }
    const newIngredient = new Ingredient(name, amount);
    this.ingredientCreated.emit(newIngredient);

    this.clearForm();
  }
}
