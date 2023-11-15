import { Component } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    AnimationService.getSlideInAnimation()
  ]
})
export class AboutComponent {

}
