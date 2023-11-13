import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'knowledge',
        component: KnowledgeComponent
      },
      {
        path: '**',
        redirectTo: 'about'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
