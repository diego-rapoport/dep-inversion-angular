import { Injectable } from '@angular/core';
import { Contrato } from '../interfaces/contrato';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServAService<ModelA> implements Contrato<ModelA>{

  constructor() { }

    query(): Observable<ModelA> {
      const teste: ModelA = {
        nome: "A",
        cpf: '00000000',
        rua: 'Rua 123 OK'
      } as ModelA

      return of<ModelA>(teste)
    }
}
