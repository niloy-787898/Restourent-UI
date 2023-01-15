import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cat-card-two',
  templateUrl: './cat-card-two.component.html',
  styleUrls: ['./cat-card-two.component.scss']
})
export class CatCardTwoComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
