import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent {

  recipe?:Recipe|any={};


  constructor(
    private recipeService: RecipeService
    ){}

  recipeForm = new FormGroup({
    name : new FormControl(''),
    picture : new FormControl(''),
    description : new FormControl('')
  });

  submit(){
    this.recipe.name = this.recipeForm.value.name;
    this.recipe.description = this.recipeForm.value.description;
    this.recipe.picture = this.recipeForm.value.picture;
    this.postRecipe(this.recipe)
  }

  postRecipe(recipe: Recipe): void {
    this.recipeService.postRecipe(recipe)
      .subscribe(recipe => this.recipe = recipe);
  }



}
