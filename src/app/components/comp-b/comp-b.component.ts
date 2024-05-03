import { Component } from '@angular/core';
import { Contrato } from '../../interfaces/contrato';
import { ServBService } from '../../services/serv-b.service';
import { JsonPipe } from '@angular/common';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-comp-b',
  standalone: true,
  imports: [BoxComponent, JsonPipe],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss',
  providers: [
    {
      provide: Contrato,
      useClass: ServBService,
    }
  ]
})
export class CompBComponent {

  constructor() {}


}
