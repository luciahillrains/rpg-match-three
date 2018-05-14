import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
	BOARD_SIZE:number = 8;
	board:number[][];

  constructor() {
  	this.generateBoard();
  }

  generateBoard() {
  	this.board = [];
  	for(let i = 0; i < this.BOARD_SIZE; i++) {
  		this.board[i] = [];
  		for(let j = 0; j < this.BOARD_SIZE; j++) {
  			this.board[i][j] = this.generateRandomNumber();
  		}
  	}
  }

  getTileFromIndex(index:number) {
  	let x = Math.floor(index/this.BOARD_SIZE)
 	let y = index - (x * this.BOARD_SIZE);
 	console.log("index is "+index+" x,y="+x+","+y);
 	return this.board[x][y];
  }


  private generateRandomNumber() {
  	return Math.floor(Math.random() * 5);
  }


}
