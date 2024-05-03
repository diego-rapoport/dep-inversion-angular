import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompAComponent } from './components/comp-a/comp-a.component';
import { CompBComponent } from './components/comp-b/comp-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompAComponent, CompBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invdep';
}
