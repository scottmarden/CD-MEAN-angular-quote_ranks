import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	@Input() quote
	@Output() quoteEmitter = new EventEmitter()

	addQuote(quote){
		this.quoteEmitter.emit(quote);
		//output quote from here to app component for adding to list.
	}

	constructor() { }

	ngOnInit() {
	}

}
