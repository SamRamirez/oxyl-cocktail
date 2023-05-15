import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [
    RecipeCardComponent,
    RecipeListComponent
  ],
  imports: [
    SharedModule,
    RecipeRoutingModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
