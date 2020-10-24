
/****************************************************Function***************************************************************/
const defaultResult = 0;
let currentResult = defaultResult;

/*Function is a Code on Demand
* 1. It is a language in construct which just have in js but also in other programme
*  2. It is used by other languages
*  3. with function we can define code that should run later and take such a function and attach it to the buttons in the html form
*      to ensure that only when a button is pressed, the code run
*   4. this allows us to write code which doesn't run immediately but which allows us to provide some#
*       interaction to our website
*     5. To only run some code when something happens , for example:
*     6. you are not limited to only running a functions when a button is pressed
*      7. You can run function based on variety of events or manually call them in your code whenever you need to do that
*        8. whenever you have expression with curly braces you dont add semi colon
*      9.How to define Function, How to declare variable, how to write readable code
*      Good syntax:
*       function greetUser(){alert(`Hi there`);}
*      BAD SYNTAX:
*        function greetUser(){
*         alert(`Hi there`)
*          ;}
*
* */


/*function add(num1, num2){

     const result = num1 + num2;

    alert('The result is ' + result);
    /!*alert(num1 + num2);*!/
}

add(6,10);*/


/*function adds(fig1, fig2){

    const results = fig1 + fig2;

   return results;
}

const additionalResult = adds(6,10);

outputResult(additionalResult,'');*/

/******Global Variable******/
/*
function adds(fig1, fig2){

    const results = fig1 + fig2;

    return results;
}

const additionalResult = adds(6,10);
let calculationDescriptions = `(${additionalResult} + 10 ) + 3/2-1`;

/!*outputResult(additionalResult,'');*!/
outputResult(additionalResult,calculationDescriptions);
*/
/******Global Variable******/

/******Executing Functions Indirectly******/

/*
*  1. Goal is to make sure if we click on the (+) BUTTON WE TAKE whatever the user enters in the input field
*  2. We use that in the add function and generate new result which we will output
*  3. For that we need to add an event Listener to this button
*  4. We will make a reference in the vue.js .
*  5. We make reference to the addBtn which is a pointer at the plus button
*  6. In the app.js we can use tha to replace a code with the addBtn and add a dot
*  7. and add addEventListener(), this is an inbuilt built into the browser which is tied to this button
*  8. The eventListeners takes two paramaters, 1st parameter take string.We use string because the first parameter wont do any dynamic thing
*  9. The 2nd parameter should be a function.Because that will tell the browser that which JS code function should executed If the button is clicked
*  10. We point the function by just writing the name of the function. The 2nd parameter will instruct the browser to call that function
*  10. the (.value) will give you what the user entered
* */

/*function adds() {

    currentResult = currentResult + userInput.value;
    outputResult(currentResult,'');


}

//we intstructing the browser if the addBtn is clicked call the add function
addBtn.addEventListener('click', adds)*/
/*const additionalResult = adds(6,10);
let calculationDescriptions = `(${additionalResult} + 10 ) + 3/2-1`;*/

/*outputResult(additionalResult,'');*/


/******Executing Functions Indirectly******/


//There we can use the return value which we have passed into a variable constant and use it anywhere we want
//Example




/*
*  1. sometimes you have a Function which you want to use to outsource some code
*  2. Maybe code which you need to run multiple times and therefore normally you would have to copy and paste it around which is not a great idea.
* 3. And maybe as a Programmer you don't want to repeat yourself, so you want to write a code and then rather execute it multiple time by referring to the function
*  4. So you could have a FUNCTION which is simply to outsource some functionality
* 5. In this case as our example a function that adds two pieces of information (numbers) together
* 6. So in that case you might not want to alert or do something inside the function, so in case you might not want to alert or do something inside of the function, you maybe just want
*     return the result
* 7.That is something you can do with the return KEYWORD which is built into JS
* 8. Returning value always runs anytime we run the code
* */
/****************************************************Function************************************************************/

/****************************************************Converting DataType************************************************************/

/*
* 1. An input element receives values in string format (even when you enter primitive integers)
* 2. The input element from HTML doesn't make any assumption on what value is coming from it.
*
* */

function convert() {

    //Here JS is combining Number variable to A string variable from input element
    //Now let consider how to tell JS we have a Number & A Number therefore a calculation has to be done
    //We use either a. parseInt OR b.parseFloat TO
    //We can also use + + in place of parseInt or parseFloat Example:  currentResult = currentResult + + userInput.value; (but not advisable)
    //If you want to add A number to STRING you do (.toString) Example: currentResult = currentResult.toString() + + userInput.value;
   /* currentResult = currentResult + userInput.value;*/
    currentResult = currentResult + + userInput.value;
    outputResult(currentResult,'');


}

//we intstructing the browser if the addBtn is clicked call the add function
addBtn.addEventListener('click', convert)
/****************************************************Converting DataType************************************************************/




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
/*const defaultResult = 0;
let currentResult = defaultResult;*/

/*currentResult = (currentResult + 10) * 3/2 -1; *///The code will not break here because we trying to pass a value into a  variable declared as let

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
/*outputResult(currentResult, errorMessage);*/



/****************************************************Splitting across multiple Lines**********************************/



