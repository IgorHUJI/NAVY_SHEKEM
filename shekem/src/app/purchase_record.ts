export class PurchaseRecord {
    date: string;
    itemName: string;
    payedVia: string;
    finalSum: number;

    constructor(date: string, itemName: string, payedVia: string, finalSum: number) {
        this.date = date;
        this.itemName = itemName;
        this.payedVia = payedVia;
        this.finalSum = finalSum;
    }
}