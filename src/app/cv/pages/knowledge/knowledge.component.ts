import { Component } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css'],
  animations: [
    AnimationService.getSlideInAnimation()
  ]
})
export class KnowledgeComponent {

}
