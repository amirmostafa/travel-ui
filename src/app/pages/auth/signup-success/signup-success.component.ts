import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { SwitcherComponent } from '../../../components/switcher/switcher.component';

@Component({
  selector: 'app-signup-success',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BackToHomeComponent,
    SwitcherComponent
  ],
  templateUrl: './signup-success.component.html',
  styleUrl: './signup-success.component.scss'
})
export class SignupSuccessComponent {
  date:any
  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
}
