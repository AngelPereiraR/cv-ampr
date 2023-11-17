import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { CvRoutingModule } from './cv-routing.module';
import { ExperienceComponent } from './pages/experience/experience.component';
import { TranslocoRootModule } from '../transloco-root.module';
import { CommonBackgroundComponent } from './components/common-background/common-background.component';



@NgModule({
  declarations: [
    AboutComponent,
    KnowledgeComponent,
    NavbarComponent,
    ExperienceComponent,
    CommonBackgroundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CvRoutingModule,
    TranslocoRootModule,
  ]
})
export class CvModule { }
