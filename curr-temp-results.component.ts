import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curr-temp-results',
  template: `
    <div class="container fluid current-temperature">
		  <p>current weather in ottawa</p>	
		</div>
  `,
  styleUrls: ['./curr-temp-results.component.css']
})
export class CurrTempResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
