import { Component } from '@angular/core';
import { TODO } from './shared/Todo.model';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo1';


list:TODO[] = []

constructor(private m:MainService){};


ngOnInit(){
  this.list = this.m.list
}


}
