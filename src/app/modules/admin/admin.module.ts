import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSkillsComponent } from './pages/manage-skills/manage-skills.component';
import { ManagePortfolioComponent } from './pages/manage-portfolio/manage-portfolio.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { EditPortfolioComponent } from './components/edit-portfolio/edit-portfolio.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { AddPortfolioComponent } from './components/add-portfolio/add-portfolio.component';
import { RouterModule } from '@angular/router';
import { AdminGuard } from '../../guards/admin.guard';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ManageSkillsComponent,
    ManagePortfolioComponent,
    EditSkillComponent,
    EditPortfolioComponent,
    AddSkillComponent,
    AddPortfolioComponent,
    NavAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'manage-skills',
        component: ManageSkillsComponent,
        pathMatch: 'prefix'
        // canActivate: [AdminGuard]
      },
      {
        path: 'manage-portfolio',
        component: ManagePortfolioComponent,
        pathMatch: 'prefix'
        // canActivate: [AdminGuard]
      },
      { path: '', redirectTo: 'manage-skills', pathMatch: 'prefix' }
    ])
  ]
})
export class AdminModule {}
