import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/custom-material/custom-material.module';
import { HeaderComponent } from './core/header/header.component';
import { RecipeCardComponent } from './recipe/recipe-card/recipe-card.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // RecipeCardComponent,
    // RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CustomMaterialModule,
    HttpClientModule,
    CoreModule
    // lazy loadé
    // ,
    // RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
