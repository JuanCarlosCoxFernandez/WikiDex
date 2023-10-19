import { Component } from '@angular/core';


@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.component.html',
  template:'<div [ngClass]="{\'dark-mode\': darkModeService.isDarkMode}">Otro Componente</div>',
  styleUrls: ['./principal-login.component.css']
})
export class PrincipalLoginComponent {
  
}
