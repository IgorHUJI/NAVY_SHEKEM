import { Component, OnInit, Input } from '@angular/core';
import { PurchaseRecord } from 'src/app/purchase_record';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-month-reports',
  templateUrl: './month-reports.component.html',
  styleUrls: ['./month-reports.component.css']
})
export class MonthReportsComponent implements OnInit {
  @Input() month: string = '01.2019';
  previous_sum: number;
  crew_num: number;
  budget: number;
  records: PurchaseRecord[];

  constructor(private infoService: InfoService) {
    infoService.socket.on("sendRecordsForMonth", purchaseRecords => {
      this.records = purchaseRecords;
      console.log(purchaseRecords);
    });
  } 

  getInfo() {
    this.infoService.getRecordsForMonth(this.month).subscribe(records => this.records = records);
  }

  ngOnInit() {
    this.getInfo();
  }

}
