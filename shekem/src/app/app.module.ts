import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthReportsComponent } from './month-reports/month-reports.component';
import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthReportsComponent,
    HomeComponent,
    PurchaseComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
