import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user_title: string;
  hobbies: any[];
  address: Address;
  
  constructor() { }

  ngOnInit() {
    this.user_title = 'Hlib';
    this.address = {
    street: '50 main st',
    city: 'NewYork',
    state: 'NY'
    }
    this.hobbies = ['Snowboarding', 'Crypro'];
  }
  
  onClick() {
  console.log('Click worked!');
  }
  
}

interface Address {
  street: string;
  city: string;
  state: string;
}