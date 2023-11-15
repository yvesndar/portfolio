import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { NavigationComponent } from './Component/navigation/navigation.component';
import { FooterComponent } from './Component/footer/footer.component';
import { PayComponent } from './Component/pay/pay.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    PayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxPayPalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
