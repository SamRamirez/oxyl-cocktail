import { Component, Input } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {

  @Input()
  recipe?: Recipe;

  toggled: boolean = false;

  toggle() {
    this.toggled = !this.toggled;
  }

}
