import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsComponent } from './charts/charts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatButtonModule } from '@angular/material/button';
// import * as echarts from 'echarts';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DataDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SpinnerComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  exports: [
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})

export class AppModule { }
