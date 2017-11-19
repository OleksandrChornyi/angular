import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
   console.log('DataService connected...');
   }

  getCoins() 
  
  {
  return this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit=100').map(res => res.json()); 
  }
  
}
