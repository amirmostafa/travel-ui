import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import Faq from '../../data/faq.json'
import { FooterComponent } from '../footer/footer.component';
import { SwitcherComponent } from '../switcher/switcher.component';

@Component({
  selector: 'app-faq-accordian',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-accordian.component.html',
  styleUrl: './faq-accordian.component.scss'
})
export class FaqAccordianComponent {
  faqData = Faq
  activeTab:number = 1

  onTabClick(index:number){
    this.activeTab = index;
  }
}
