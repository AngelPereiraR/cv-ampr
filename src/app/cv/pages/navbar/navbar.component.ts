import { Component } from '@angular/core';

interface MenuItem {
  name : string;
  route: string;
}

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  public menuItems: MenuItem[] = [
    { route: './about', name: 'Acerca de mí' },
    { route: './experience', name: 'Experiencia' },
    { route: './knowledge', name: 'Conocimientos' },
  ];

}
