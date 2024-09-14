import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { tns } from 'tiny-slider';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  clientData = [
    {
      image:'assets/images/client/01.jpg',
      name:'Calvin Carlo',
      possition:'Manager',
      desc:'" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "'
    },
    {
      image:'assets/images/client/02.jpg',
      name:'Christa Smith',
      possition:'Manager',
      desc:'" The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century"'
    },
    {
      image:'assets/images/client/03.jpg',
      name:'Jemina CLone',
      possition:'Manager',
      desc:'"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others"'
    },
    {
      image:'assets/images/client/04.jpg',
      name:'Smith Vodka',
      possition:'Manager',
      desc:'"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts"'
    },
    {
      image:'assets/images/client/05.jpg',
      name:'Cristino Murfi',
      possition:'Manager',
      desc:'"There is now an abundance of readable dummy texts. These are usually used when a text is required."'
    },
    {
      image:'assets/images/client/06.jpg',
      name:'Cristino Murfi',
      possition:'Manager',
      desc:'"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero."'
    },
  ]
  ngAfterViewInit(){
    tns({
      container: '.tiny-three-item',
      controls: false,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      speed: 400,
      gutter: 12,
      responsive: {
          992: {
              items: 3
          },

          767: {
              items: 2
          },

          320: {
              items: 1
          },
      },
    })
    
  }
}
