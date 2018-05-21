import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2.component';
import { Page3Component } from './page3.component';


const routes: Routes = [
  { path: '', children: [] },
  { path: 'p1', component: Page1Component },
  { path: 'p2', component: Page2Component },
  { path: 'p3', component: Page3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
