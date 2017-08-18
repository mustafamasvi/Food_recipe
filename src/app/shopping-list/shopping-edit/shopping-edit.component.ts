import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const nwName = this.nameInputRef.nativeElement.value;
    const nwAmount = this.amountInputRef.nativeElement.value;
    const nwIngredient = new Ingredient(nwName, nwAmount);
    this.shoppingListService.addIngredient(nwIngredient);
  }
}
