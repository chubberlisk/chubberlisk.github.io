import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SillyComponent } from './silly/silly.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'silly', component: SillyComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
