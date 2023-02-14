import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{

      return this.getAll().find(food => food.id == id)!;

  }
  
  getAllFoodByTag(tag: string): Foods[]{
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      { name:'All', count:14 },
      { name:'FastFood', count:4 },
      { name:'Pizza', count:2 },
      { name:'Lunch', count:3 },
      { name:'Fry', count:1 },
      { name:'Soup', count:1 },
      


    ]
  }
  getAll():Foods[]{
    return[
      {
        id : 1,
        name : 'Pizza',
        price:100,
        cookTime:'40-50',
        favorite:false,
        origins:['Italy'],
        star: 4.0,
        imageUrl: '/assets/1.jpeg',
        tags: ['FastFood','Pizza','Lunch']
      },
      {
        id : 2,
        name : 'Pizza-2',
        price:100,
        cookTime:'40-50',
        favorite:false,
        origins:['Italy'],
        star: 4.0,
        imageUrl: '/assets/2.jpeg',
        tags: ['FastFood','Pizza','Lunch']
      },
      {
        id : 3,
        name : 'Pizza-3',
        price:100,
        cookTime:'40-50',
        favorite:false,
        origins:['Italy'],
        star: 4.0,
        imageUrl: '/assets/3.jpeg',
        tags: ['FastFood','Pizza','Lunch']
      },
      {
        id : 4,
        name : 'Pizza-4',
        price:100,
        cookTime:'40-50',
        favorite:false,
        origins:['Italy'],
        star: 4.0,
        imageUrl: '/assets/4.jpeg',
        tags: ['FastFood','Pizza','Lunch']
      },{
        id : 5,
        name : 'Biryani',
        price:100,
        cookTime:'40-50',
        favorite:false,
        origins:['Italy'],
        star: 4.0,
        imageUrl: '/assets/1.jpeg',
        tags: ['FastFood','Pizza','Lunch']
      },{
        id : 6,
        name : 'Burger',
        price:100,
        cookTime:'40-50',
        favorite:false,
        origins:['Italy'],
        star: 4.0,
        imageUrl: '/assets/1.jpeg',
        tags: ['FastFood','Pizza','Lunch']
      }

    ]
  }
}
