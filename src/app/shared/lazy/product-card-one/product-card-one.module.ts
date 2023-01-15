import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneComponent } from './product-card-one.component';
import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [
        ProductCardOneComponent
    ],
    exports: [
        ProductCardOneComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ProductCardOneModule { }
