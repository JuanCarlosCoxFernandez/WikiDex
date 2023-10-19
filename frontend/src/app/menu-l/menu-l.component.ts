import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-l',
  templateUrl: './menu-l.component.html',
  styleUrls: ['./menu-l.component.css']
})

export class MenuLComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  search(){
    const searchWord=document.getElementById("word") as HTMLInputElement;
    const words = searchWord.value;

    if(words!=null){
      alert("Esta funcionalidad se esta implementando, perdonen las molestias");
    }else{
      alert("Por favor rellene los campos");
    }
  }

  constructor(private router: Router){}

  isDarkMode: boolean = false;

  securityColor(){
    if (this.isDarkMode != false){
      this.toggleMode();
      this.router.navigateByUrl('/home');
    }else{
      this.router.navigateByUrl('/home');
    }
  }

  toggleMode() {
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

      document.body.style.backgroundColor = '#555555'; 

      document.querySelectorAll('h2').forEach((h2) => {
        h2.style.color = '#e9d2d2'; 
      });
      document.querySelectorAll('p').forEach((p) => {
        p.style.color = '#e9d2d2'; // color p
      }); 
      
      
    }
  }
}
