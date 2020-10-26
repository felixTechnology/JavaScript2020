
//alert("This works...");
//Purpose is to be able to do a calculator by entering a Number and (add,sub,mult,divide) to the last number enter
//Calculator that works with two numbers

//We need Variable and Constants

/*1. One thing about calculator is about Result, so we 1st create variable (let result)
* 2. Sometimes you can declare a variable without starting value (Example: let currentResult;)
*  */

//We assigning initial value 0 to aid in our calculation
//let currentResult = 0;


//Mathematical operation that will output the result in a html div.
/*1. Referring the currentResult both at the LEFT and right side of the operator.
* 2. Adding 10 to the value inside the currentValue(which is 0) and passing the NEW VALUE into the variable on the left. meaning the current result (0) will be overwritten by (0+10)
* 3. Note that outputResult function has been done in the vendor.js and called in app.js
*  Note though we added a number for this calculation, it doesn't mean we only use numbers in JS
*   OutputResult, it calls a function from vendor.js which triggers some codes defined in the vendor.js and passes two argument into the function
* */
/*currentResult = currentResult + 10 * 3;*/


/**************************************************************************************/

/*
let currentResult = 0;
currentResult = (currentResult + 10) * 3/2 -1; //(0+10) x3 /2 -1 => 10 x3 /2 -1 => 30/2 -1 => 15 -1 = 14
outputResult(currentResult, ''); //the single quote is provided because the function expects two arguments but because we do not want to display two values we instruct the compiler to leave that space empty
*/

/**************************************************************************************/


/**************************************************************************************/

//Now to pass a value to the second argument let see
//JavaScript won't execute what is in quote because it is a static text.


/*let currentResults = 0;
currentResults = (currentResults + 10) * 3 / 2 -1; //(0+10) x3 /2 -1 => 10 x3 /2 -1 => 30/2 -1 => 15 -1 = 14
let calculationDescription = '(0 + 10) * 3/2 -1';
outputResult(currentResults, calculationDescription);*/

/**************************************************************************************/



/**********************************************Concat****************************************/

/*
1. This if we do not want JS to read the currentResult as string. We use concatenate
let calculationDescription = '(' + currentResult + '10) * 3/2 -1';*/

/*
let currentResult = 0;
currentResultz = (currentResult + 10) * 3/2 -1; //(0+10) x3 /2 -1 => 10 x3 /2 -1 => 30/2 -1 => 15 -1 = 14
let calculationDescription = '(' + currentResult + ' + 10) * 3/2 -1';
outputResult(currentResult, calculationDescription);
*/

/****************************************************Concat**********************************/


/****************************************************Constant**********************************/

/*
const defaultResult = 0;
let currentResult = defaultResult;

 currentResult = (currentResult + 10) * 3/2 -1; //The code will not break here because we trying to pass a value into a  variable declared as let

let calculationDescription = '(' + defaultResult + ' + 10) * 3/2 -1';
outputResult(currentResult, calculationDescription);
*/

/****************************************************Constant**********************************/

/****************************************************back ticks String**********************************/

/*const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3/2 -1; //The code will not break here because we trying to pass a value into a  variable declared as let

let calculationDescription = `(  defaultResult   + 10) * 3/2 -1`;
outputResult(currentResult, calculationDescription);*/

/****************************************************back ticks String**********************************/

/****************************************************Using the ${} : This only works with back-stroke..It is also call javaScript template literal**********************************/
/*
* With template literals it allow you to write multi lines which has line breaks in them
*
* */
/*const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3/2 -1; //The code will not break here because we trying to pass a value into a  variable declared as let

let calculationDescription = `(  ${defaultResult}   + 10) * 3/2 -1`;
outputResult(currentResult, calculationDescription);*/

/****************************************************Using the ${} : This only works with back-stroke..It is also call javaScript template literal**********************************/

/****************************************************Splitting across multiple Lines**********************************/
const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3/2 -1; //The code will not break here because we trying to pass a value into a  variable declared as let

let calculationDescription = `(  ${defaultResult}   + 10) * 3/2 -1`;

let errorMessage = 'An error '+
                   'occurred';   //adding line break

let errorMessages = 'An error \n'+
    'occurred';   //adding line break when code contains both numbers and special characters.

let errorMessagesz = 'An error \''+
    'occurred';   //adding back slash when you want to print single quote

let errorMessagesze = "An error '" +
                        "occurred";   //adding back slash when you want to print single quote

let errorMessageszes = "An error \\"+
                         "occurred";   //printing single back slash as string
outputResult(currentResult, errorMessage);



/****************************************************Splitting across multiple Lines**********************************/
