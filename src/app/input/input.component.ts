import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {




  constructor(private m:MainService){}


text = '';

onAddItem(text:string){
this.m.addItem(text)
}

}
