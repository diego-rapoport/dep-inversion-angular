import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contract } from '../interfaces/contract';

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
