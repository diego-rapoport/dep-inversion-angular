import { Injectable } from '@angular/core';
import { Contract } from '../interfaces/contrato';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServBService<ModelB> implements Contract<ModelB> {

  constructor() { }

    query(): Observable<ModelB> {
      const teste: ModelB = {
        id: 1,
        name: 'Archer Arrow',
        street: 'Main Street'
      } as ModelB

      return of(teste)
    }
}
