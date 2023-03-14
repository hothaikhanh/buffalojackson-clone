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
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CollectionComponent } from './collection/collection.component';
import { SliderItemComponent } from './slider-item/slider-item.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { StatsComponent } from './stats/stats.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';


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
    CatalogueComponent,
    CollectionComponent,
    SliderItemComponent,
    SliderComponent,
    BannerComponent,
    ItemDisplayComponent,
    StatsComponent,
    FooterComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
