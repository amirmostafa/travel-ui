import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-account-tab',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './account-tab.component.html',
  styleUrl: './account-tab.component.scss'
})
export class AccountTabComponent {
    constructor(private router: Router){}
    current:string = ''

    ngOnInit(): void {
      this.current = this.router.url
      
    }
}
