import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	@Input() quotesList
	@Output() voteEmitter = new EventEmitter()

	voteUp(quote){
		quote.rating ++;
		this.voteEmitter.emit(quote)
	}

	voteDown(quote){
		quote.rating --;
		this.voteEmitter.emit(quote)
	}

	constructor() { }

	ngOnInit() { }

}
