
//alert("This works...");
//Purpose is to be able to do a calculator by entering a Number and (add,sub,mult,divide) to the last number enter
//Calculator that works with two numbers

//We need Variable and Constants

/*1. One thing about calculator is about Result, so we 1st create variable (let result)
* 2. Sometimes you can declare a variable without starting value (Example: let currentResult;)
*  */

//We assigning initial value 0 to aid in our calculation
let currentResult = 0;

//Mathematical operation that will output the result in a html div.
/*1. Referring the currentResult both at the LEFT and right side of the operator.
* 2. Adding 10 to the value inside the currentValue(which is 0) and passing the NEW VALUE into the variable on the left. meaning the current result (0) will be overwritten by (0+10)
* 3. Note that outputResult function has been done in the vendor.js and called in app.js
*  Note though we added a number for this calculation, it doesn't mean we only use numbers in JS
*   OutputResult, it calls a function from vendor.js which triggers some codes defined in the vendor.js and passes two argument into the function
* */
/*currentResult = currentResult + 10 * 3;*/
currentResult = (currentResult + 10) * 3;
outputResult(currentResult, '');