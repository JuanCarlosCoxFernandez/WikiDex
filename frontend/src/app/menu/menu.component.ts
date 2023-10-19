import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
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
}

