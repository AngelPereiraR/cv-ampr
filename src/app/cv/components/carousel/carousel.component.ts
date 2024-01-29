import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  images = [
    '../assets/projects/gestion-empresas/01-login.webp',
    '../assets/projects/gestion-empresas/02-companies.webp',
    '../assets/projects/gestion-empresas/03-buy.webp',
    '../assets/projects/gestion-empresas/04-suggestions.webp',
    '../assets/projects/gestion-empresas/05-order.webp',
    '../assets/projects/gestion-empresas/06-make-order.webp',
  ];

  currentImageIndex: number = 0;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 2000);
  }
}
