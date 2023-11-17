import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

interface MenuItem {
  route: string;
}

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private translocoService: TranslocoService) {}

  public languagesList:
    Array<Record<'imgUrl' | 'code' | 'name', string>> = [
    {
      imgUrl: '/assets/Spanish.svg',
      code: 'es',
      name: 'Spanish',
    },
    {
      imgUrl: '/assets/English.svg',
      code: 'en',
      name: 'English',
    },
  ];

  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    // languageCode === 'fa'
    //   ? (document.body.style.direction = 'rtl')
    //   : (document.body.style.direction = 'ltr');
  }

  public menuItems: MenuItem[] = [
    { route: './about' },
    { route: './experience' },
    { route: './knowledge' },
  ];

}
