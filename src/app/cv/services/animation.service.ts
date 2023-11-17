import { trigger, transition, style, animate } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  static getSlideInAnimation() {
    return trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(0)' })),
      ]),
    ]);
  }
}
