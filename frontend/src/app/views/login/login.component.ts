import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';;




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  miFormulario: FormGroup;


  constructor(private router: Router, private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      user: ['' , Validators.required],
      pswd: ['', Validators.required]
    }); 
  }

  mySubmit() {
    //Asignacion de valores
    //dia
    const campo = document.getElementById('user') as HTMLInputElement;
    const valoruser = campo.value;
    console.log('Valor del campo: ' + valoruser);
    //Hora
    const campo2 = document.getElementById('pswd') as HTMLInputElement;
    const valorpswd = campo2.value;
    console.log('Valor del campo: ' + valorpswd);

  if (valoruser != '' && valorpswd != '') {
    console.log(valoruser);
    console.log(valorpswd);
    // Continue with form submission or other actions
    this.router.navigate(['/principalLogin']);
  } else {
    alert("Todos los campos son obligatorios. Por favor, llene todos los campos.");
  }
}
}
