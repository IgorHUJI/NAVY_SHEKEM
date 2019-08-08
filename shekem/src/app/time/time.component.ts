import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/day';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  week: Day[];

  constructor() { }

  ngOnInit() {
    
  }

}
