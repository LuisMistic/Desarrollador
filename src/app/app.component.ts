// Importamos el core de componentes de Angular
import { Component } from '@angular/core';

//el componente es un decorada
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Aprendiendo a usar mi primer proyecto en Angular';
}
