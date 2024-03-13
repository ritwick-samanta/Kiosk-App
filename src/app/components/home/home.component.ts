import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/login.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent,MatButtonModule]
})
export class HomeComponent {
 constructor(private _login:LoginService){}
 login(){
    this._login.doLogin();
 }
}
