import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email: string;
  phone: string;
  year = (new Date()).getFullYear();
  constructor() { }

  ngOnInit() {
    this.email = 'yuda@thegdads.com';
    this.phone = '+6285655448804';
  }
}
