import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_URL } from '../environments/dev';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

//   constructor() { }

//   getRecipes(): Observable<Recipe[]> {
//     return of(MOCK_RECIPES);
// }

private readonly recipeUrl = `${API_URL}/recipes`

constructor(private http: HttpClient) { }

getRecipes(): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(`${this.recipeUrl}`);
}

getRecipe(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(`${ this.recipeUrl }/${ id }`);
}

deleteRecipe(id: number): Observable<Object>{
  return this.http.delete<Recipe>(`${ this.recipeUrl }/${ id }`);
}

postRecipe(recipe: Recipe): Observable<Recipe>{
  return this.http.post<Recipe>(`${ this.recipeUrl }`, recipe);
}

// addHero(hero: Hero): Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//     .pipe(
//       catchError(this.handleError('addHero', hero))
//     );
// }

}
