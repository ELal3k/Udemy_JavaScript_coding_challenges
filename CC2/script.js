
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

if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
    console.log("Dolphins win the first game!")
}

else if (koalasScore1 > dolphinsScore1 && koalasScore1 >= 100) {
    console.log("Koalas win the first game!")
}

else if (koalasScore1 === dolphinsScore1 && koalasScore1 >= 100) {
    console.log("First game is a draw!")
}

else {
    console.log("No one wins the first game")
};





if (dolphinsScore2 > koalasScore2 && dolphinsScore2 >= 100) {
    console.log("Dolphins win the second game!")
}

else if (koalasScore2 > dolphinsScore2 && koalasScore2 >= 100) {
    console.log("Koalas win the second game!")
}

else if (koalasScore2 === dolphinsScore2 && koalasScore2 >= 100) {
    console.log("Second game is a draw!")
}

else {
    console.log("No one wins the second game")
};





if (dolphinsScore3 > koalasScore3 && dolphinsScore3 >= 100) {
    console.log("Dolphins win the third game!")
}

else if (koalasScore3 > dolphinsScore3 && koalasScore3 >= 100) {
    console.log("Koalas win the third game!")
}

else if (koalasScore3 === dolphinsScore3 && koalasScore3 >= 100) {
    console.log("Third game is a draw!")
}

else {
    console.log("No one wins the third game")
};