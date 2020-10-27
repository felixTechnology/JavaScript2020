const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

/*while(randomNumber > 0.7){

    alert('I am from Ghana');
}*/

/*Q1*/
/*
let finished = false;
while(!finished){

 if (randomNumber > 0.7){
  finished = true;
 alert('Ghana is Blessed.')
 }
}

*/


/*Q2*/
/*let numbers2 = [2,4,6,8,10];

for (let i = 0; i < numbers2.length; i++){


 alert(`i =  ${numbers2}` );
}*/


/*Q3*/

let numbers3 = [2,4,6,8,10];

for (let i = 10; i >numbers3.length; i--){


 alert(`reducing factor of array is => =  ${numbers3}` );
}





/*let numbers3 = [2,4,6,8,10];

for (let i = 2; i <= 10; i + 2){


    alert(`i value is =  ${numbers3}` );
}*/

/*
let numbers4 = [2,4,6,8,10];

for (let i = 10; i > 0; i-2){


    alert(`i =  ${numbers4}` );
}




/*Q4*/
/*
while(randomNumber2 < 0.2){

 alert('I am from Ghana');
}*/
/***********************************************************************INSTRUCTOR SOLUTION BELOW************************************************************************************/

/*const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)*/

if (randomNumber >= 0.7) {
 alert('Greater or equal than 0.7.');
} else {
 alert('Not greater!');
}

const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
 console.log(numbers[i]);
}

for (const num of numbers) {
 console.log(num);
}

let counter = 0;
while (counter < numbers.length) {
 console.log(numbers[counter]);
 counter++;
}

// for loop => backwards

for (let i = numbers.length - 1; i >= 0; i--) {
 console.log(numbers[i]);
}

/*const randomNumber2 = Math.random();*/

console.log(randomNumber);
console.log(randomNumber2);
if (
    (randomNumber > 0.7 && randomNumber2 > 0.7) ||
    randomNumber <= 0.2 ||
    randomNumber2 <= 0.2
) {
 alert('Greater than 0.7 or smaller than 0.2.');
}
