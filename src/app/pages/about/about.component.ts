import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() data: any;
  toggleMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onToggle() {
    console.log('Click')
    this.toggleMenu = !this.toggleMenu;
  }

}
