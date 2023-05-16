import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecipeCardComponent,
    RecipeListComponent,
    RecipeCreateComponent
  ],
  imports: [
    SharedModule,
    RecipeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
