import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss'
})
export class SwitcherComponent {

  htmlTag = document.getElementsByTagName("html")[0]

  changeTheme(event:any){
    event.preventDefault()
    if (this.htmlTag.className.includes("dark")) {
      this.htmlTag.className = 'light'
  } else {
      this.htmlTag.className = 'dark'
  }
  }

  changeLayout(event:any){
    event.preventDefault()
   const switcherRtl = document.getElementById("switchRtl") as any;
    if (switcherRtl.innerText === "LTR") {
      document.documentElement.dir = "ltr"
    }
    else {
      document.documentElement.dir = "rtl"
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
ngAfterViewInit() {
  feather.replace();
}
  
}
