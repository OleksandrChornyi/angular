import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit 
{

  name: string;
  hobbies: any[];
  address: Address;
  
  constructor() 
  { 
  
  }

  ngOnInit() 
  {
    this.name = 'Hlib';
    this.address = 
    {
      street: '50 main st',
      city: 'NewYork',
      state: 'NY'
    }
    this.hobbies = ['Snowboarding', 'Crypro'];
  }
  
  
  addHobby(hobby)
  {
    this.hobbies.push(hobby);
    return false;
  }
  
  deleteHobby(hobby)
  {
    for (let i = 0; i < this.hobbies.length; i++)
    {
      if (this.hobbies[i] == hobby)
        {
          this.hobbies.splice(i, 1);
        }
    }
  }
  
}

 
}
interface Address {
  street: string;
  city: string;
  state: string;
}