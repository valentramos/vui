import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './ui/colors/colors.component';
import { FontsComponent } from './ui/fonts/fonts.component';


const routes: Routes = [
  { path: '',   redirectTo: '/tipografia', pathMatch: 'full' },
  { path: 'colores', component: ColorsComponent },
  { path: 'tipografia', component: FontsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
