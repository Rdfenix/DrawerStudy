import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { InnerInfoComponent } from './components/inner-info/inner-info.component';
import { InnerInfoTwoComponent } from './components/inner-info-two/inner-info-two.component';

@NgModule({
  declarations: [AppComponent, InfoComponent, DrawerComponent, InnerInfoComponent, InnerInfoTwoComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
