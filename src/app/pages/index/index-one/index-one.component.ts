import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TaglineComponent } from '../../../components/tagline/tagline.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FormComponent } from '../../../components/form/form.component';
import { TopDestinationsComponent } from '../../../components/top-destinations/top-destinations.component';
import { GridDataComponent } from '../../../components/grid-data/grid-data.component';
import { AboutComponent } from '../../../components/about/about.component';
import { ClientComponent } from '../../../components/client/client.component';
import { BlogComponent } from '../../../components/blog/blog.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SwitcherComponent } from '../../../components/switcher/switcher.component';

import * as feather from 'feather-icons';
import Package from '../../../data/packages.json'

@Component({
  selector: 'app-index-one',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    TaglineComponent,
    NavbarComponent,
    FormComponent, 
    TopDestinationsComponent,
    GridDataComponent,
    AboutComponent,
    ClientComponent,
    BlogComponent,
    FooterComponent, 
    SwitcherComponent
  ],
  templateUrl: './index-one.component.html',
  styleUrl: './index-one.component.scss'
})
export class IndexOneComponent {

  package = Package

  ngAfterViewInit() {
    feather.replace();
  }
}
