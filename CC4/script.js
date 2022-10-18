const dolphinsScore1 = Number(prompt("Input Dolphins game 1 score:"))
const dolphinsScore2 = Number(prompt("Input Dolphins game 2 score:"))
const dolphinsScore3 = Number(prompt("Input Dolphins game 3 score:"))
const koalasScore1 = Number(prompt("Input Koalas game 1 score:"))
const koalasScore2 = Number(prompt("Input Koalas game 2 score:"))
const koalasScore3 = Number(prompt("Input Koalas game 3 score:"))

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

console.log(`The average score of Dolphins team is ${scoreDolphins} points!`);
console.log(`The average score of Koalas team is ${scoreKoalas} points!`);

function checkWinner(dolphinsAvr, koalasAvr) {
    if (dolphinsAvr >= 2 * koalasAvr) {
        console.log(`Dolphins win! ${dolphinsAvr} vs ${koalasAvr}`)
    }
    else if (koalasAvr >= 2 * dolphinsAvr) {
        console.log(`Koalas win! ${koalasAvr} vs ${dolphinsAvr}`)
    }
    else { console.log("No one wins") }
};

checkWinner(scoreDolphins, scoreKoalas);