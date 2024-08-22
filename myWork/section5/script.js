// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temps
// - How to compute max and min temps
// - What's a sensor error? What to do when it occurs?

// 2) Breaking up into sub-problems
// - How to ignore sensor errors
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// function calcTempAmplitude(temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const currentTemp = temps[i];
//         if (typeof currentTemp !== "number") continue;

//         if (currentTemp > max) max = currentTemp;
//         if (currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min);

//     return max - min;
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// function calcTempAmplitudeNew(t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const currentTemp = temps[i];
//         if (typeof currentTemp !== "number") continue;

//         if (currentTemp > max) max = currentTemp;
//         if (currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min);

//     return max - min;
// }

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// **********
// DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

// function measureKelvin() {
//     const measurement = {
//         type: "temperature",
//         unit: "celsius",
//         value: 10,
//     };

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }
// console.log(measureKelvin());

// // using a debugger
// function calcTempAmplitudeNewBug(t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);
//     let max = 0;
//     let min = 0;

//     for (let i = 0; i < temps.length; i++) {
//         const currentTemp = temps[i];
//         if (typeof currentTemp !== "number") continue;

//         if (currentTemp > max) max = currentTemp;
//         if (currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min);

//     return max - min;
// }

// const amplitudeBug = calcTempAmplitudeNewBug([3, 5, 1], [9, 4, 5]);
// // A) Identify Bug
// console.log(amplitudeBug);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr) {
    let strArr = [];

    for (let i = 0; i < arr.length; i++) {
        strArr.push(`... ${arr[i]}°C in ${i + 1} days `);
    }

    // const finalArr = strArr.join("");
    // console.log(String(strArr) + " ...");
    // console.log(finalArr);
    console.log(strArr.join("") + " ...");
}

printForecast([12, 5, -5, 0, 4]);
