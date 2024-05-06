import { Component } from '@angular/core';
import { ServBService } from '../../services/serv-b.service';
import { JsonPipe } from '@angular/common';
import { BoxComponent } from '../box/box.component';
import { ModelB } from '../../models/modelB';
import { Contract } from '../../interfaces/contract';

@Component({
  selector: 'app-comp-b',
  standalone: true,
  imports: [BoxComponent, JsonPipe],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss',
  providers: [
    {
      provide: Contract,
      useClass: ServBService<ModelB>,
    }
  ]
})
export class CompBComponent {

  constructor() {}


}
