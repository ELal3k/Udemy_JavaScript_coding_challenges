"use strict";
// const mark = {
//     fullname: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2)
//     }
// }
// mark.calcBMI();
// console.log(mark.bmi)

const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,


    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)

        return this.bmi
    }
};
mark.calcBMI();
console.log(mark.bmi);

const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
};
john.calcBMI();
console.log(john.bmi);

if (john.bmi > mark.bmi) {
    console.log(`John's BMI(${john.bmi}) is higher than Mark's(${mark.bmi})!`)
}
else { console.log(`Mark's BMI (${mark.bmi}) is higher than John's(${john.bmi})!`) };