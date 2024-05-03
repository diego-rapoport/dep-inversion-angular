import { Component, OnInit } from '@angular/core';
import { ServAService } from '../../services/serv-a.service';
import { BoxComponent } from '../box/box.component';
import { Contrato } from '../../interfaces/contrato';
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
      provide: Contrato,
      useClass: ServAService,
    }
  ]
})
export class CompAComponent implements OnInit {

  dataA: ModelA = {} as ModelA

  constructor(private service: ServAService<ModelA>) { }

  ngOnInit(): void {
    this.service.query().subscribe((data) => {
      this.dataA = data
    })
  }

}
