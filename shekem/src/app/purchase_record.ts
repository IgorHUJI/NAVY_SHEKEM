export class PurchaseRecord {
    date: string;
    itemName: string;
    paidVia: string;
    finalSum: number;

    constructor(date: string, itemName: string, paidVia: string, finalSum: number) {
        this.date = date;
        this.itemName = itemName;
        this.paidVia = paidVia;
        this.finalSum = finalSum;
    }
}