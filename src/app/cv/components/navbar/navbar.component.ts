import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { TranslocoService } from '@ngneat/transloco';

interface MenuItem {
  route: string;
}

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showFiller = false;
  mostrarBoton = true;
  @ViewChild('drawer') drawer!: MatDrawer;

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

  scrollToSectionAndToggleDrawer(id: string) {
    this.scrollToSection(id);
    this.toggleDrawer();
  }

  scrollToSection(id: string) {
    const element: HTMLElement = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleDrawer() {
    this.drawer.close();
  }
}
