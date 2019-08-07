import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthReportsComponent } from 'src/app/month-reports/month-reports.component';
import { HomeComponent } from 'src/app/home/home.component'

const routes: Routes = [
  { path: 'month_reports', component: MonthReportsComponent },
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
