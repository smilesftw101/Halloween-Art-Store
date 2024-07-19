import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Painting } from '../paintings';

//this component is used for when art goes on sale

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrl: './art-details.component.css'
})
export class ArtDetailsComponent {

  @Input() painting: Painting | undefined;

  //emits an event when value of notify property changes
  @Output() notify = new EventEmitter();

}
