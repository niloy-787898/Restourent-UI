import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ContactFormModule} from "../../shared/lazy/contact-form/contact-form.module";
import {SharedModule} from "../../shared/shared.module";
import {CategoryCardOneModule} from '../../shared/lazy/category-card-one/category-card-one.module';
import {CatCardTwoModule} from '../../shared/lazy/cat-card-two/cat-card-two.module';
import {CatCardSixModule} from "../../shared/lazy/cat-card-six/cat-card-six.module";
import {ProductCardOneModule} from "../../shared/lazy/product-card-one/product-card-one.module";
import {SwiperModule} from "swiper/angular";
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    HomeComponent
  ],

    imports: [
        CommonModule,
        HomeRoutingModule,
        ContactFormModule,
        CategoryCardOneModule,
        CatCardTwoModule,
        SharedModule,
        CatCardSixModule,
        ProductCardOneModule,
        SwiperModule,
        MatTabsModule

    ],
})
export class HomeModule {
}
