import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent {
  isMenuOpen = false;

  constructor(private router: Router){}

  isDarkMode: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Invierte el estado del menú (abrir/cerrar)
  }



  toggleMode() {
    console.log("aaaaaaaaaaaaa");
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      // Cambiar a modo oscuro
      document.body.style.backgroundColor = '#555555'; 
      
      document.querySelectorAll('div').forEach((div) => {
        div.style.color = '#555555';
        div.style.backgroundColor = '#555555';
      });

      document.querySelectorAll('.containerCarrousel').forEach((div) => {
        (div as HTMLElement).style.backgroundColor = '#e9d2d2';
      })

      document.querySelectorAll('.carousel-item').forEach((div) => {
        (div as HTMLElement).style.backgroundColor = '#e9d2d2';
      })

      document.querySelectorAll('h1').forEach((h1) => {
        h1.style.color = '#555555'; 
      });      

      document.body.style.backgroundColor = '#e9d2d2'; 

      document.querySelectorAll('h2').forEach((h2) => {
        h2.style.color = '#555555'; 
      });
      document.querySelectorAll('p').forEach((p) => {
        p.style.color = '#555555'; // color p
      });       

    } else {
      // Cambiar a modo claro
      document.body.style.backgroundColor = '#e9d2d2'; 
      
      document.querySelectorAll('div').forEach((div) => {
        div.style.color = '#e9d2d2';
        div.style.backgroundColor = '#e9d2d2';
      });

      document.querySelectorAll('.containerCarrousel').forEach((div) => {
        (div as HTMLElement).style.backgroundColor = '#555555';
      })

      document.querySelectorAll('.carousel-item').forEach((div) => {
        (div as HTMLElement).style.backgroundColor = '#555555';
      })

      document.querySelectorAll('h1').forEach((h1) => {
        h1.style.color = '#e9d2d2'; 
      });      


      document.querySelectorAll('h2').forEach((h2) => {
        h2.style.color = '#e9d2d2'; 
      });
      document.querySelectorAll('p').forEach((p) => {
        p.style.color = '#e9d2d2'; // color p
      }); 
      
      
    }
  }

  securityColor(){
    if (this.isDarkMode == true){
      this.router.navigateByUrl('/login');
    }else{
      this.toggleMode();
      this.router.navigateByUrl('/login');
    }
  }
}
