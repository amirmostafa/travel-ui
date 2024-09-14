import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { FaqAccordianComponent } from '../../../../components/faq-accordian/faq-accordian.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { SwitcherComponent } from '../../../../components/switcher/switcher.component';

@Component({
  selector: 'app-tour-detail-two',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    NavbarComponent,
    LightgalleryModule,
    FaqAccordianComponent,
    FooterComponent,
    SwitcherComponent
  ],
  templateUrl: './tour-detail-two.component.html',
  styleUrl: './tour-detail-two.component.scss'
})
export class TourDetailTwoComponent {

}
