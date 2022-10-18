const dolphinsScore1 = Number(prompt("Input Dolphins game 1 score:"))
const dolphinsScore2 = Number(prompt("Input Dolphins game 2 score:"))
const dolphinsScore3 = Number(prompt("Input Dolphins game 3 score:"))
const koalasScore1 = Number(prompt("Input Koalas game 1 score:"))
const koalasScore2 = Number(prompt("Input Koalas game 2 score:"))
const koalasScore3 = Number(prompt("Input Koalas game 3 score:"))

const calcAverageKoalas = function (score1, score2, score3) {

    const koalasAvr = (score1 + score2 + score3) / 3;
    return koalasAvr;
}

console.log(`The average score of Koalas is ${calcAverageKoalas(koalasScore1, koalasScore2, koalasScore3)}`);

const calcAverageDolphins = function (score1, score2, score3) {

    const dolphinsAvr = (score1 + score2 + score3) / 3;
    return dolphinsAvr;
}

console.log(`The average score of Dolphins is ${calcAverageDolphins(dolphinsScore1, dolphinsScore2, dolphinsScore3)}`);

const checkWinner = function (koalasAvr, dolphinsAvr) {
    let winner;

    if (koalasAvr >= 2 * dolphinsAvr) {
        winner = "Koalas win!";

    }
    else if (dolphinsAvr >= 2 * koalasAvr) {
        winner = "Dolphins win!";

    }

    else { winner = "No one wins..." }

    return winner;
}

console.log(
    checkWinner(
        calcAverageKoalas(koalasScore1, koalasScore2, koalasScore3), calcAverageDolphins(dolphinsScore1, dolphinsScore2, dolphinsScore3)
    )
);
