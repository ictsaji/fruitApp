import { Component, OnInit } from '@angular/core';
import { CustomApiService } from '../custom-api.service';
//import * as api from 'CustomApi';
declare var CustomApi:any;

@Component({
  selector: 'app-task-a',
  templateUrl: './task-a.component.html',
  styleUrls: ['./task-a.component.css']
})
export class TaskAComponent implements OnInit{

  //fruitsFavourites: string[] = []
  apiData: any[] = [];
  fruitCounts: { [key: string]: number } = {};
  selectedFruit: string | null = null;
  fruitKeys: string[] = []; // Array to store fruit keys (for iteration)


  constructor( private apiService: CustomApiService ) {    
   
  }

  ngOnInit(): void {   
    this.loadData();
  }


  loadData() {
    this.apiService.getData().then(data => {
      this.apiData = data;
      this.aggregateFruitCounts();
    });

  }

  aggregateFruitCounts(): void {
    this.fruitCounts = {};
    this.apiData.forEach(item => {
      this.fruitCounts[item.favoriteFruit] = (this.fruitCounts[item.favoriteFruit] || 0) + 1;
    });

     // Sort fruit counts from most to least popular
     this.fruitKeys = Object.keys(this.fruitCounts).sort((a, b) => this.fruitCounts[b] - this.fruitCounts[a]);
    
    
  }

 
  selectFruit(fruit: string): void {
    this.selectedFruit = fruit;
    console.log(`Fruit selected: ${fruit}, ${this.fruitCounts[fruit]}`);
  }  



}
