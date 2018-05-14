import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	BOARD_TILES:number = 64;
	arrayWithSixtyFour:number[] = [];
  constructor() {
    	for(let i = 0; i < this.BOARD_TILES; i++) {
  			this.arrayWithSixtyFour[i] = i;
  		}
   }

  ngOnInit() {

  }

}
