import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
