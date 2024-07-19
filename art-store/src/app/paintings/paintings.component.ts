import { Component } from '@angular/core';

//imported from paintings.ts
import { paintings } from '../paintings';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrl: './paintings.component.css'
})
export class PaintingsComponent {

  //necessary for initializing for the html file
  paintings = [...paintings]

}
