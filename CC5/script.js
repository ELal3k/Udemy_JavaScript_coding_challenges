
let tip;
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill;
        return tip;
    }
    else {
        tip = 0.2 * bill;
        return tip;
    };
}

calcTip(125);
calcTip(555);
calcTip(44);

const tips = [calcTip(125), calcTip(555), calcTip(44)];

console.log(tips);

const total = [125 + calcTip(125), 555 + calcTip(555), 44 + calcTip(44)];
console.log(total);
