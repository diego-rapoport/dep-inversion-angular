import { Component, OnInit, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Contract } from '../../interfaces/contract';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent<T> implements OnInit {

  data: T = {} as T
  serv = inject(Contract<T>)

  ngOnInit(): void {
    this.serv.query().subscribe((data) => {
      this.data = data
    })
  }

}
