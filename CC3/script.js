const billValue = Number((prompt('Insert bill value')));
const tip = billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue

console.log(`The bill was ${billValue} ,the tip was ${tip} and the total value ${billValue + tip}`)