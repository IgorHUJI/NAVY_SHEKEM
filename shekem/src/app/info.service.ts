import { Injectable } from '@angular/core';
import { PurchaseRecord } from 'src/app/purchase_record'; 
import { RECORDS } from 'src/app/mock_info';
import { Observable, of } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable ({
  providedIn: 'root'
})
export class InfoService {
  private socket;
  purchaseRecords: PurchaseRecord[]; 
  month: string;

  constructor() {
    this.socket = io('http://localhost:4444');
    this.socket.on("sendRecordsForMonth", purchaseRecords => {
      this.purchaseRecords = purchaseRecords;
    });
    this.socket.on("newRecord", record => {
      if (record.date.slice(3) === this.month) {
        this.purchaseRecords.push(record);
      }
    });
   }

  getRecordsForMonth(month: string): Observable<PurchaseRecord[]> {
    this.month = month;
    this.socket.emit("getRecordsForMonth", month);
    return of(this.purchaseRecords);
  }
}
