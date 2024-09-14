import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  date :any
  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
  social = [
    {
      icon:'shopping-cart',
      link:'https://1.envato.market/travosy-angular'
    },
    {
      icon:'dribbble',
      link:'https://dribbble.com/shreethemes'
    },
    {
      icon:'linkedin',
      link:'http://linkedin.com/company/shreethemes'
    },
    {
      icon:'facebook',
      link:'https://www.facebook.com/shreethemes'
    },
    {
      icon:'instagram',
      link:'https://www.instagram.com/shreethemes/'
    },
    {
      icon:'twitter',
      link:'https://twitter.com/shreethemes'
    },
    {
      icon:'mail',
      link:'mailto:support@shreethemes.in'
    },
  ]

  company = [
    {
      link:'/aboutus',
      name:'About us'
    },
    {
      link:'/services',
      name:'Services'
    },
    {
      link:'/team',
      name:'Team'
    },
    {
      link:'/pricing',
      name:'Pricing'
    },
    {
      link:'/blogs',
      name:'Blog'
    },
    {
      link:'/login',
      name:'Login'
    },
  ]
}
