import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminGuard } from './guards/admin.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent, pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent, pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    canLoad: [AdminGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  { path: '404', component: NotFoundComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
