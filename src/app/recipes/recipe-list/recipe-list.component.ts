import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[new Recipe('Poori Recipe','puri is an unleavened deep fried bread made with flour & salt.',
  'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/03/poori-recipe-puri-recipe.jpg'),
  new Recipe('Kurkuri Bhindi','Kurkuri Bhindi is a spicy fried snack or main course dish made using Okra, gram flour and spices.',
  'https://www.plattershare.com/common/uploaded_files/recipe/5b2224e6108f5_pb.jpg')
];
@Output() recipeWasSelected=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {

  }
  onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
  }

}
