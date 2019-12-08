import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { NavDesktopComponent } from './components/nav-desktop/nav-desktop.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { WipOverlayComponent } from './components/wip-overlay/wip-overlay.component';
import { DevComponent } from './components/dev/dev.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent,
    AboutComponent,
    SkillComponent,
    PortfolioItemComponent,
    NavDesktopComponent,
    NavMobileComponent,
    NotFoundComponent,
    LoginComponent,
    WipOverlayComponent,
    DevComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
