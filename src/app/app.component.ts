import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'quote-ranks';
	quotes: Array<any> = [];
	quote = new Quote();
	nextId = 0;

	addQuote(newQuote){
		newQuote.id = this.nextId;
		this.nextId ++;
		this.quotes.push(newQuote);
		this.quote = new Quote();
	}

	newRating(quote){
		console.log("Quote: ", quote)
	}
}
