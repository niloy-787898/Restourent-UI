import { Component, OnInit ,Input} from '@angular/core';
import { RELATEDONE } from 'src/app/core/db/related-product.db';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: any;
  related: any[]= RELATEDONE;

  toggleMenu: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    console.log('Click')
    this.toggleMenu = !this.toggleMenu;
  }

}
