bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];
calctip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill
    }
    else {
        tip = 0.2 * bill
    };
    return tip;
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calctip(bills[i]);
    totals[i] = bills[i] + tips[i];
    console.log(`The ${i + 1} bill is ${bills[i]} and the total price is ${totals[i]}`);
}

console.log(tips);
console.log(totals);
