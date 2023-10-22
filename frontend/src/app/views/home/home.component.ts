import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  ngOnInit(){
    this.toggleMode();
  }

  toggleMode() {
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
