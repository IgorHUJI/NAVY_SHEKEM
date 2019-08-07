import { Component, OnInit } from '@angular/core';
import { PurchaseRecord } from 'src/app/purchase_record';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-month-reports',
  templateUrl: './month-reports.component.html',
  styleUrls: ['./month-reports.component.css']
})
export class MonthReportsComponent implements OnInit {
  month: string;
  previous_sum: number;
  crew_num: number;
  budget: number;
  records: PurchaseRecord[];

  constructor(private infoService: InfoService) {
  } 

  getInfo(): void {
    this.infoService.getRecords().subscribe(records => this.records = records);
  }

  ngOnInit() {
    this.getInfo();
  }

}
