import { Observable } from "rxjs";

export abstract class Contract<T> {
  abstract query(): Observable<T>
}
