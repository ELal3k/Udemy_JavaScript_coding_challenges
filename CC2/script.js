
//Prompt dolphins scores
const dolphinsScore1 = Number(prompt("Dolphins first game:"));
const dolphinsScore2 = Number(prompt("Dolphins second game:"));
const dolphinsScore3 = Number(prompt("Dolphins third game:"));

//dolphins average
const dolphinsAvrg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;



//prompt koalas score
const koalasScore1 = Number(prompt("Koalas first game:"));
const koalasScore2 = Number(prompt("Koalas second game:"));
const koalasScore3 = Number(prompt("Koalas third game:"));

//koalas average
const koalasAvrg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

//First game results
console.log(`First game--->
 Dolphins:${dolphinsScore1}
 Koalas:${koalasScore1} `)
if (dolphinsScore1 > koalasScore1) {
    console.log("Dolphins win the first game!")
}
else if (dolphinsScore1 === koalasScore1) {
    console.log("First game is a draw!")
}
else { console.log("Koalas win the first game!") };


//second game results
console.log(`Second game--->
 Dolphins:${dolphinsScore2}
 Koalas:${koalasScore2} `)
if (dolphinsScore2 > koalasScore2) {
    console.log("Dolphins win the second game!")
}
else if (dolphinsScore2 === koalasScore2) {
    console.log("Second game is a draw!")
}
else { console.log("Koalas win the second game!") };



//third game results
console.log(`Third game--->
 Dolphins:${dolphinsScore3}
 Koalas:${koalasScore3} `)
if (dolphinsScore3 > koalasScore3) {
    console.log("Dolphins win the third game!")
}
else if (dolphinsScore3 === koalasScore3) {
    console.log("Third game is a draw!")
}
else { console.log("Koalas win the third game!") };


//Average scores
console.log(`The Dolphins average score is: ${dolphinsAvrg}`);
console.log(`The Koalas average score is: ${koalasAvrg}`);


//Compare average scores
if (koalasAvrg > dolphinsAvrg) {
    console.log("Koalas have a bigger average score!")
}
else if (koalasAvrg === dolphinsAvrg) {
    console.log("The two teams have an equal average score!")
}
else { console.log("Dolphins have a bigger average score!") };

//requirement for a minimum score of 100
let dolphinsScoreAbove1;
let dolphinsScoreAbove2;
let dolphinsScoreAbove3;
let koalasScoreAbove1;
let koalasScoreAbove2;
let koalasScoreAbove3;

if (dolphinsScore1 >= 100) {
    dolphinsScoreAbove1 = dolphinsScore1
}
else { dolphinsScoreAbove1 = 0 };

if (dolphinsScore2 >= 100) {
    dolphinsScoreAbove2 = dolphinsScore2
}
else { dolphinsScoreAbove2 = 0 };

if (dolphinsScore3 >= 100) {
    dolphinsScoreAbove3 = dolphinsScore3
}
else { dolphinsScoreAbove3 = 0 };


if (koalasScore1 >= 100) {
    koalasScoreAbove1 = koalasScore1
}
else { koalasScoreAbove1 = 0 };

if (koalasScore2 >= 100) {
    koalasScoreAbove2 = koalasScore2
}
else { koalasScoreAbove2 = 0 };

if (koalasScore3 >= 100) {
    koalasScoreAbove3 = koalasScore3
}
else { koalasScoreAbove3 = 0 };



//Compare scores with condition
if (dolphinsScoreAbove1 > koalasScoreAbove1) {
    console.log("Dolphins win the first game!")
}
else if (dolphinsScoreAbove1 === koalasScoreAbove1) {
    console.log("First game is a draw!")
}
else { console.log("Koalas win the first game!") }



if (dolphinsScoreAbove2 > koalasScoreAbove2) {
    console.log("Dolphins win the second game!")
}
else if (dolphinsScoreAbove2 === koalasScoreAbove2) {
    console.log("Second game is a draw!")
}
else { console.log("Koalas win the second game!") }



if (dolphinsScoreAbove3 > koalasScoreAbove3) {
    console.log("Dolphins win the third game!")
}
else if (dolphinsScoreAbove3 === koalasScoreAbove3) {
    console.log("Third game is a draw!")
}
else { console.log("Koalas win the third game!") }


