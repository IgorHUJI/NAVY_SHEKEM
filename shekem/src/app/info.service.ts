import { Injectable } from '@angular/core';
import { PurchaseRecord } from 'src/app/purchase_record'; 
import { Observable, of } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable ({
  providedIn: 'root'
})
export class InfoService {
  socket;
  purchaseRecords: PurchaseRecord[]; 
  month: string;

  constructor() {
    this.socket = io('http://localhost:4444');
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
