import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../model/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {


  constructor(
    private recipeService : RecipeService,
    private route: ActivatedRoute
    ){}

  ngOnInit(){
    this.recipeService.getRecipes().subscribe(recipeList => {this.recipeList = recipeList});
  }
  recipeList?: Recipe[]
  toggled: boolean = false;


  deleteRecipe(id: number): void {
    this.recipeService.deleteRecipe(id)
      .subscribe(
        () => this.recipeService.getRecipes().subscribe(recipeList => {this.recipeList = recipeList})
        );
  }

}
