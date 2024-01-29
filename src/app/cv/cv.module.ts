import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { CvRoutingModule } from './cv-routing.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { CommonBackgroundComponent } from './components/common-background/common-background.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AboutComponent,
    NavbarComponent,
    CommonBackgroundComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CvRoutingModule,
    TranslocoRootModule,
  ],
})
export class CvModule {}
