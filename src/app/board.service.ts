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

  private generateRandomNumber() {
  	return Math.floor(Math.random() * 5);
  }
}
