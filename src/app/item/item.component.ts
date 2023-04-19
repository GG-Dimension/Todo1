import { Component, Input } from '@angular/core';
import { MainService } from '../main.service';
import { TODO } from '../shared/Todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()myItem!:TODO;
  @Input()itemIndex!:number;





  constructor(private m:MainService){}

  ngOnInit(){

  }

  onDeleteItem(itemIndex:number){
this.m.deleteItem(itemIndex);
  }

  onFinish(itemIndex:number){
    this.m.finishItem(itemIndex);
      }
  
}
