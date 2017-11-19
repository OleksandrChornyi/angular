import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit
{
  
  coins: Coins[];
  
  constructor(private dataService: DataService)
  {

  }

  ngOnInit()
  {
    this.dataService.getCoins().subscribe((coins) => {
     // console.log(coins);
      this.coins = coins;
    });
  }

  
}

interface Coins {
  name: string;
  symbol: string;
  }

