import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/model/ingredient.model';
import { RecipeIngredient } from 'src/app/model/recipe-ingredient.model';
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
    name : new FormControl('', [
      Validators.required]),
    picture : new FormControl('', [
      Validators.required,
      this.pictureStartsWithHttpValidator(/^(http|https):\/\//i)]),
    description : new FormControl(''),
    ingredients: new FormArray<FormControl>([])
  });

  submit(){
    this.recipe.name = this.recipeForm.value.name;
    this.recipe.description = this.recipeForm.value.description;
    this.recipe.picture = this.recipeForm.value.picture;
    let ingredientsFromForm = this.recipeForm.value.ingredients;
    console.log(ingredientsFromForm?.values)
    console.log(ingredientsFromForm?.keys)
    //let recipeIngredients : RecipeIngredient[] = [...(this.recipeForm.value.ingredients as any[])]



    let recipeIngredients : RecipeIngredient[] = []
    for(let ingredientString of (ingredientsFromForm ? ingredientsFromForm : [])){
    let recipeIngredient : RecipeIngredient =
      {
        ingredient: {name:""},
        quantity:0,
        unit:''
      };
      let ingredient : Ingredient = {name:''};
      ingredient.name = ingredientString;
      recipeIngredient.ingredient = ingredient;
      recipeIngredients.push(recipeIngredient);
    }
    this.recipe.ingredients = recipeIngredients;


    console.log(this.recipe)

    this.postRecipe(this.recipe)
  }

  postRecipe(recipe: Recipe): void {
    this.recipeService.postRecipe(recipe)
      .subscribe(recipe => this.recipe = recipe);
  }

  pictureStartsWithHttpValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return null;
      //return forbidden ? null : {forbiddenName: {value: control.value}};
    };
  }

  pushIngredient(): void{
    this.recipeForm.controls.ingredients.push(new FormControl(''));

  }



}
