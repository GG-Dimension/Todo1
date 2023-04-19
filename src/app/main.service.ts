import { Injectable } from '@angular/core';
import { TODO } from './shared/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {


list:TODO[] = [
 {description:"Do Something", done:false},
 {description:"Do Something1", done:true},
 {description:"Do Something2", done:false}
]


  constructor() { }

  addItem(newItem:string){
    this.list.unshift({description:newItem, done:false})
  }
  deleteItem(index:number){
    this.list.splice(index, 1);
  }

  finishItem(index:number){
    this.list[index].done = !this.list[index].done;
  }


}
