import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  contactform = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    comment: new FormControl(''),
  })

  contactResult() {
    console.log(this.contactform.value)
  }


  ngOnInit(): void {
  }

}
