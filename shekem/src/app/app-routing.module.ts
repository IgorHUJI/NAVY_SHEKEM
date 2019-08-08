import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthReportsComponent } from 'src/app/month-reports/month-reports.component';
import { HomeComponent } from 'src/app/home/home.component'
import { PurchaseComponent } from 'src/app/purchase/purchase.component'
import { TimeComponent } from './time/time.component';

const routes: Routes = [
  { path: 'month_reports', component: MonthReportsComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'purchase', component: PurchaseComponent},
  { path: 'time', component: TimeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
