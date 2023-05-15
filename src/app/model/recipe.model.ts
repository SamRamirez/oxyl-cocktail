import { RecipeIngredient } from './recipe-ingredient.model';

export interface Recipe {
  id?: number;
  name: string;
  picture: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
}
