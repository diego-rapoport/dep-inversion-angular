import { Injectable } from '@angular/core';
import { Contrato } from '../interfaces/contrato';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServBService<ModelB> implements Contrato<ModelB> {

  constructor() { }

    query(): Observable<ModelB> {
      const teste: ModelB = {
        id: 1,
        nome: 'Sim',
        logradouro: 'Avenida Brasil'
      } as ModelB

      return of(teste)
    }
}
