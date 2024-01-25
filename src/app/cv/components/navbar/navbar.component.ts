import { Component, ElementRef } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

interface MenuItem {
  route: string;
}

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private translocoService: TranslocoService,
    private el: ElementRef
  ) {}

  public languagesList: Array<Record<'imgUrl' | 'code' | 'name', string>> = [
    {
      imgUrl: '/assets/Spanish.svg',
      code: 'es',
      name: 'Cambiar a Español',
    },
    {
      imgUrl: '/assets/English.svg',
      code: 'en',
      name: 'Change to English',
    },
  ];

  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    // languageCode === 'fa'
    //   ? (document.body.style.direction = 'rtl')
    //   : (document.body.style.direction = 'ltr');
  }

  public scrollToSection(sectionId: string) {
    const section = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
