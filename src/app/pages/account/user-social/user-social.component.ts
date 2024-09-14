import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SwitcherComponent } from '../../../components/switcher/switcher.component';
import { AccountTabComponent } from '../../../components/account-tab/account-tab.component';

@Component({
  selector: 'app-user-social',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    SwitcherComponent,
    AccountTabComponent
  ],
  templateUrl: './user-social.component.html',
  styleUrl: './user-social.component.scss'
})
export class UserSocialComponent {
  social = [
    {
      icon:'twitter',
      name:'Twitter',
      placeholder:'Twitter Profile Name',
      desc:'Add your Twitter username (e.g. jesus).'
    },
    {
      icon:'facebook',
      name:'Facebook',
      placeholder:'Facebook Profile Name',
      desc:'Add your Facebook username (e.g. jesus).'
    },
    {
      icon:'instagram',
      name:'Instagram',
      placeholder:'Instagram Profile Name',
      desc:'Add your Instagram username (e.g. jesus).'
    },
    {
      icon:'linkedin',
      name:'Linkedin',
      placeholder:'Linkedin Profile Name',
      desc:'Add your Linkedin username (e.g. jesus).'
    },
    {
      icon:'youtube',
      name:'Youtube',
      placeholder:'Youtube url',
      desc:'Add your Youtube url.'
    },
  ]
}
