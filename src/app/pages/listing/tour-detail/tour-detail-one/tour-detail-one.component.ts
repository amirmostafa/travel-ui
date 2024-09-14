import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { SwitcherComponent } from '../../../../components/switcher/switcher.component';
import { FaqAccordianComponent } from '../../../../components/faq-accordian/faq-accordian.component';

import { LightgalleryModule } from 'lightgallery/angular';
import PackageData from '../../../../data/packages.json'

@Component({
  selector: 'app-tour-detail-one',
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
  templateUrl: './tour-detail-one.component.html',
  styleUrl: './tour-detail-one.component.scss'
})
export class TourDetailOneComponent {
  packageData = PackageData
  packageId:any
  data :any
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.packageId = params.get('id');
      this.data= this.packageData.find((item:any) => item.id === parseInt(this.packageId))
    });
  }
}
