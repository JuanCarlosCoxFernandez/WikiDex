import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLComponent } from './menu-l/menu-l.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { PrincipalLoginComponent } from './views/principal-login/principal-login.component';
import { DarkModeService } from './dark-mode.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    PrincipalComponent,
    MenuComponent,
    MenuLComponent,
    HeaderLoginComponent,
    PrincipalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
