import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLComponent } from './menu-l/menu-l.component';
import { PrincipalLoginComponent } from './views/principal-login/principal-login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'principal', component:PrincipalComponent},
  { path: 'menu', component:MenuComponent},
  { path: 'menul', component:MenuLComponent},
  { path: 'principalLogin', component:PrincipalLoginComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: '**', component:PageNotFoundComponent}
];
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  
})
export class AppRoutingModule { }
