import { Component } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

interface MenuItem {
  name : string;
  route: string;
}

@Component({
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
  animations: [
    AnimationService.getSlideInAnimation()
  ]
})
export class KnowledgeComponent {

  public menuItems: MenuItem[] = [
    { route: '../assets/tecnologies/html-1.svg', name: 'HTML' },
    { route: '../assets/tecnologies/css-3.svg', name: 'CSS' },
    { route: '../assets/tecnologies/rss.svg', name: 'RSS' },
    { route: '../assets/tecnologies/java-4.svg', name: 'Java' },
    { route: '../assets/tecnologies/spring-3.svg', name: 'Spring Boot' },
    { route: '../assets/tecnologies/flutter.svg', name: 'Flutter' },
    { route: '../assets/tecnologies/laravel-2.svg', name: 'Laravel' },
    { route: '../assets/tecnologies/python-5.svg', name: 'Python' },
    { route: '../assets/tecnologies/django.svg', name: 'Django' },
    { route: '../assets/tecnologies/xml-2.svg', name: 'XML' },
    { route: '../assets/tecnologies/qlik-1.svg', name: 'Qlik Sense' },
    { route: '../assets/tecnologies/mysql-logo.svg', name: 'MySQL' },
    { route: '../assets/tecnologies/mongodb-icon-1.svg', name: 'MongoDB' },
    { route: '../assets/tecnologies/odoo.svg', name: 'Odoo' },
    { route: '../assets/tecnologies/github-icon-1.svg', name: 'GitHub' },
    { route: '../assets/tecnologies/trello.svg', name: 'Trello' },
    { route: '../assets/tecnologies/javascript-1.svg', name: 'JavaScript' },
    { route: '../assets/tecnologies/vitejs.svg', name: 'ViteJS' },
    { route: '../assets/tecnologies/typescript.svg', name: 'TypeScript' },
    { route: '../assets/tecnologies/angular-icon-1.svg', name: 'Angular' },
    { route: '../assets/tecnologies/nestjs.svg', name: 'NestJS' },
    { route: '../assets/tecnologies/docker.svg', name: 'Docker' },
  ];

}
