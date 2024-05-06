import { Component } from '@angular/core';
import { ServAService } from '../../services/serv-a.service';
import { BoxComponent } from '../box/box.component';
import { Contract } from '../../interfaces/contrato';
import { ModelA } from '../../models/modelA';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-comp-a',
  standalone: true,
  imports: [BoxComponent, JsonPipe],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.scss',
  providers: [
    {
      provide: Contract,
      useClass: ServAService<ModelA>,
    }
  ]
})
export class CompAComponent {

  constructor() { }

}
