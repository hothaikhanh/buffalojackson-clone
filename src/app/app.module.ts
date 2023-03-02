import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { HeaderTopRightComponent } from './header/header-top-right/header-top-right.component';
import { HeaderTopLeftComponent } from './header/header-top-left/header-top-left.component';
import { HeaderLowRightComponent } from './header/header-low-right/header-low-right.component';
import { HeaderLowLeftComponent } from './header/header-low-left/header-low-left.component';
import { HeaderCenterComponent } from './header/header-center/header-center.component';
import { MainSliderComponent } from './main-slider/main-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopRightComponent,
    HeaderTopLeftComponent,
    HeaderLowRightComponent,
    HeaderLowLeftComponent,
    HeaderCenterComponent,
    HeaderMenuComponent,
    MainSliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
