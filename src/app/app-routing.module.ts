import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent } from './selection/selection.component';
import { LoginComponent } from './login/login.component';
import { ChoicesComponent } from './choices/choices.component';
import { ResultsComponent } from './results/results.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'select', component: SelectionComponent },
  { path: 'choices', component: ChoicesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'trends', component: TrendsComponent }

  //trends
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
