import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>AULA DE SERVICES COM ANGULAR</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service';
}
