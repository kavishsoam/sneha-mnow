import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { MatButtonModule, MatMenuModule, MatSidenavModule,MatIconModule,MatListModule,MatCardModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarModule } from "./shared-component/progress-bar/progress-bar.module";
import { LineChartComponent } from './_graph/line-chart/line-chart.component';
import { LeftPanelComponent } from './_layout/left-panel/left-panel.component';
import { AvgTimeAppointmentComponent } from './_module/home/avg-time-appointment/avg-time-appointment.component';
import { CostProfitCustomerComponent } from './_module/home/cost-profit-customer/cost-profit-customer.component';
import { HomeComponent } from './_module/home/home.component';
import { RatingComponent } from './_module/home/rating/rating.component';
import { RevenueComponent } from './_module/home/revenue/revenue.component';
import { SalesComponent } from './_module/home/sales/sales.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    HomeComponent,
    SalesComponent,
    LineChartComponent,
    RevenueComponent,
    AvgTimeAppointmentComponent,
    CostProfitCustomerComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ProgressBarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
