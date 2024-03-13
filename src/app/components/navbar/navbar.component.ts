import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private _login:LoginService){}
  click() {
    this._login.doLogin();
  }

}
