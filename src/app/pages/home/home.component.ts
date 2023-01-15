import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CATEGORIES} from '../../core/db/category.db';
import {CATTWO} from '../../core/db/cat.db';
import {CATEGORIESCARDSIX} from 'src/app/core/db/cat-card-six';
import {PRODUCTCARDONE} from "../../core/db/product-card-one.db";
import {CarouselCntrlService} from "../../services/core/carousel-cntrl.service";
// import Swiper core and required modules
import SwiperCore, {Pagination} from "swiper";
import { HOMELESSNESS} from "../../core/db/homecaroselone.db";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @Input() data: any;
  // Dynamic Data
  
  homelessness:any[] = HOMELESSNESS;
  categories: any[] = CATEGORIES;
  overviews: any[] = CATTWO;
  categoriesCardSix: any[] = CATEGORIESCARDSIX;
  category: any[] = CATEGORIES;
  cat: any[] = CATTWO;
  productCardOne: any[] = PRODUCTCARDONE;

  toggleMenu: boolean = false;


  constructor(private CarouselCntrlService:CarouselCntrlService) {
  }

  ngOnInit(): void {
  }

  onToggle() {
    console.log('Click')
    this.toggleMenu = !this.toggleMenu;
  }

}
