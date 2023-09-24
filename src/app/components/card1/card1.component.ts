import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component {
  @Input() width:string = '';
  @Input() title:string = '';
  @Input() capa:string = '';
}
