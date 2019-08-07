import { Injectable } from '@angular/core';
import { PurchaseRecord } from 'src/app/purchase_record'; 
import { RECORDS } from 'src/app/mock_info';
import { Observable, of } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})
export class InfoService {
  constructor() { }

  getRecords(): Observable<PurchaseRecord[]> {
    return of(RECORDS);
  }
}
