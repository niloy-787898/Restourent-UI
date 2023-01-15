import { CATEGORIESCARDSIX } from '../../../core/db/cat-card-six';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-card-six',
  templateUrl: './cat-card-six.component.html',
  styleUrls: ['./cat-card-six.component.scss']
})
export class CatCardSixComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
