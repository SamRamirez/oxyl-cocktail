import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
    ){}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }



}
