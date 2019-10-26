import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  createDb(){

   let orders = [
      { id: 100, name: 'order 1',skill:'Java,Bootstrap' },
      { id: 200, name: 'order 2' ,skill:'Angular,Bootstrap' },
      { id: 300, name: 'order 3' ,skill:'C#,Bootstrap' },
      { id: 400, name: 'order 4',skill:'Ruby,Bootstrap'  }
    ];

   return {orders};

  }
}
