import { Component, OnInit, inject } from '@angular/core';
import { Contrato } from '../../interfaces/contrato';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent<T> implements OnInit {

  data: T = {} as T
  serv = inject(Contrato<T>)

  ngOnInit(): void {
    this.serv.query().subscribe((data) => {
      this.data = data
    })
  }

}
