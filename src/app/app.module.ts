import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SelectionComponent } from './selection/selection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChoicesComponent } from './choices/choices.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { TrendsComponent } from './trends/trends.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectionComponent,
    HeaderComponent,
    FooterComponent,
    ChoicesComponent,
    ResultsComponent,
    TrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
