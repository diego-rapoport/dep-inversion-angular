import { Observable } from "rxjs";

export abstract class Contrato<T> {
  abstract query(): Observable<T>
}
