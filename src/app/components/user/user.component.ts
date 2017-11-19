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
  selectedCoinPrice: string;
  constructor(private dataService: DataService)
  {

  }

  ngOnInit()
  {
    this.dataService.getCoins().subscribe((coins) => {
    this.coins = coins;
    });
  }

  selectCoin (event: any) {
    // update the ui
    this.selectedCoinPrice = event.target.value;
  }
}

interface Coins {
  name: string;
  symbol: string;
  price_usd: string;
  }

