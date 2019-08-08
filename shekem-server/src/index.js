const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var purchaseRecords = {};
var stock = {};

const port = 4444;
console.log("Server went up.");

purchaseRecords['01.2019'] = [
    { date: '01.01.2019', itemName: 'קולה', paidVia: 'מזומן', finalSum: 4.25 }, 
    { date: '23.01.2019', itemName: 'קולה', paidVia: 'מזומן', finalSum: 4.25 }
];
purchaseRecords['02.2019'] = [
    { date: '22.02.2019', itemName: 'קולה', paidVia: 'מזומן', finalSum: 5 }
];

io.on("connection", socket => {
    console.log("A client connected.")
    socket.on("addRecord", record => {
        var month = record.date.slice(3);
        if (month in purchaseRecords) {
            purchaseRecords[month].push(record);
        } else {
            purchaseRecords[month] = [record];
        }
        io.emit("newRecord", record);
    });
    socket.on("getRecordsForMonth", month => {
        socket.emit("sendRecordsForMonth", purchaseRecords[month]);
        console.log("Sent over purchase records for " + month);
    });
    socket.on("addProduct", (product, quantity) => {
        stock[product] = quantity;
        io.emit("addedProduct", (product, quantity));
    });
    
});

http.listen(port);