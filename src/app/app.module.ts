import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SillyComponent } from './silly/silly.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SillyComponent,
    NotFoundComponent,
    EducationComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
