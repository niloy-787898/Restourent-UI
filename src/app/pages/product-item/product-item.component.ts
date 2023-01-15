import { Component, OnInit ,Input} from '@angular/core';
import { PRODUCTITEM } from 'src/app/core/db/product-item.db';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() data: any;
  toggleMenu: boolean = false;
  
  productItem:any[] = PRODUCTITEM;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    console.log('Click')
    this.toggleMenu = !this.toggleMenu;
  }

}
