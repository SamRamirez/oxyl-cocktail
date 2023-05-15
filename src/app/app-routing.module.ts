import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

// const routes: Routes = [
//   {
//       path: 'recipes',
//       component: RecipeListComponent,
//       pathMatch: 'full'
//   },
//   {
//       path: '**',
//       redirectTo: 'recipes',
//       pathMatch: 'full'
//   }
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipe/recipe.module')
                         .then(m => m.RecipeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
