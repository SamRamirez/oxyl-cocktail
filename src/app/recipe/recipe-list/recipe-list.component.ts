import { Component } from '@angular/core';
import { Recipe } from '../../model/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  constructor(private recipeService : RecipeService){}

  ngOnInit(){
    this.recipeService.getRecipes().subscribe(recipeList => {this.recipeList = recipeList});
  }
  recipeList?: Recipe[]
  toggled: boolean = false;

}
