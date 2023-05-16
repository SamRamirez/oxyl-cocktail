import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {

  @Input()
  recipe?: Recipe;

  @Output()
  delete: EventEmitter<number> = new EventEmitter();

  toggled: boolean = false;

  toggle() {
    this.toggled = !this.toggled;
  }

}
