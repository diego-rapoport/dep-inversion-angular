import { Injectable } from '@angular/core';
import { Contract } from '../interfaces/contrato';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServAService<ModelA> implements Contract<ModelA>{

  constructor() { }

    query(): Observable<ModelA> {
      const teste: ModelA = {
        name: "Jane Fondue",
        info: 'Singer and Model',
        email: 'fondue_j@gmail.com'
      } as ModelA

      return of<ModelA>(teste)
    }
}
