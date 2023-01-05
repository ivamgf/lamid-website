import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {InfrastructureComponent} from "./pages/infrastructure/infrastructure.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {TeamComponent} from "./pages/team/team.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },
  {
    path: 'pages/home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'infrastructure',
    component: InfrastructureComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'team',
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
