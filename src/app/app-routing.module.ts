import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScrollBackgroundComponent } from './scroll-background/scroll-background.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { NewComponent } from './new/new.component';
import { DemoComponent } from './demo/demo.component';
import { Reuters2Component } from './reuters2/reuters2.component';
import { Reuters3Component } from './reuters3/reuters3.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'scroll-background', component: ScrollBackgroundComponent },
  { path: 'section2', component: Section2Component },
  { path: 'section3', component: Section3Component },
  { path: 'new', component: NewComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'reuters2', component: Reuters2Component },
  { path: 'reuters3', component: Reuters3Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

