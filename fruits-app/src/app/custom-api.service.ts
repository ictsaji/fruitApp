import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomApiService {

  constructor() { }


  // custom api call to load data
  
  getData(): Promise<any[]> {
    return new Promise((resolve) => {
      if (window['CustomApi'] && window['CustomApi'].get) {
        window['CustomApi'].get((data: any[]) => {
          resolve(data);
        });
      } else {
        resolve([]); 
      }
    });
  }
}
