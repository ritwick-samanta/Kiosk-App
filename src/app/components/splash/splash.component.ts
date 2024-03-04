import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
      setTimeout(()=>this.router.navigate(['/home']),10000);
  }
}
