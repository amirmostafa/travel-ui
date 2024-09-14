import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AccountTabComponent } from '../../../components/account-tab/account-tab.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SwitcherComponent } from '../../../components/switcher/switcher.component';

@Component({
  selector: 'app-user-payment',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AccountTabComponent,
    FooterComponent,
    SwitcherComponent
  ],
  templateUrl: './user-payment.component.html',
  styleUrl: './user-payment.component.scss'
})
export class UserPaymentComponent {
  payments = [
    {
      image:'assets/images/payments/visa.jpg',
      name:'Visa ending in 4578',
      time:'Expires in 13/03/2024'
    },
    {
      image:'assets/images/payments/american-express.jpg',
      name:'American Express ending in 4578',
      time:'Expires in 5/05/2024'
    },
    {
      image:'assets/images/payments/discover.jpg',
      name:'Discover ending in 4578',
      time:'Expires in 19/06/2024'
    },
    {
      image:'assets/images/payments/mastercard.jpg',
      name:'Master Card ending in 4578',
      time:'Expires in 20/06/2024'
    },
  ]
  isOpen:boolean = false

  showModal(){
    this.isOpen = !this.isOpen;
  }
}
