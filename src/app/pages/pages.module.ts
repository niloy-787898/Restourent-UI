import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from '../shared/shared.module';
import {PipesModule} from '../shared/pipes/pipes.module';
import { FooterModule } from '../shared/lazy/footer/footer.module';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    PagesComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SwiperModule,
    SharedModule,
    PipesModule,
    FooterModule
  ]
})
export class PagesModule {
}
