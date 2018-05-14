import { Component, OnInit, Input } from '@angular/core';
import {BoardService} from '../board.service';

@Component({
  selector: 'app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.css']
})
export class BoardTileComponent implements OnInit {
	@Input()
	index:number = 0;

	value:number = 0;

  constructor(private boardService:BoardService) { }

  ngOnInit() {
  	this.value = this.boardService.getTileFromIndex(this.index);
  }

  generateClass() {
  	let clz = "black";
  	switch(this.value) {
  		case 1:
  			clz = "red";
  			break;
  		case 2:
  			clz = "blue";
  			break;
  		case 3:
  			clz = "green";
  			break;
  		case 4:
  			clz = "brown";
  			break;
  		case 5:
  			clz = "yellow";
  			break;
  	}
  	return clz;

  }



}
