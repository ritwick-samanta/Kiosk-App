import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf,CommonModule, IMAGE_CONFIG } from '@angular/common';
@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css',
  animations:[
    trigger('fadeIn', [
      
      transition('void=>*', [
        style({opacity:0}),
        animate('1s ease-out',style({opacity:1}))
      ])
      
  ]
  ),
trigger('fadeOut',[
  transition('void=>*', [
    style({opacity:1}),
    animate('1s ease-in-out',style({opacity:0}))
  ])
])],
providers: [
  {
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true
    }
  },
]
})
export class SplashComponent implements OnInit {
  image:String;
  constructor(private router:Router){}
  visibility=true;
  async ngOnInit(): Promise<void> {
    this.image='assets/images/BA_LOGO.png';
    setTimeout(() => {
      this.visibility = false;
    }, 1000)
    setTimeout(() => this.router.navigate(['/home']), 2000)
  }
  
}
