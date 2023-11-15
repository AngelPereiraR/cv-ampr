import { Component } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    AnimationService.getSlideInAnimation()
  ]
})
export class ExperienceComponent {

}
