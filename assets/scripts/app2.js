const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //this can be an array with initial elements.But for this purpose of keep log we can leave it empty as this



//Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}


//Generate and write calculation log
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    /*  const calcDescription = `${cur rentResult} + ${enteredNumber}`*/

    //This is an output text i'm generating here
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    //from vendor file
    outputResult(currentResult,calcDescription);//currentResult can be called because it's a global variable which get chang. And calcDescription which is constant


}


function split() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; // this is current result before it's changed
    /*const enteredNumber = parseInt(userInput.value)*/
    /*const calcDescription = `${currentResult} + ${enteredNumber}`*/
    currentResult += enteredNumber;
    /*currentResult = currentResult + enteredNumber;*/ //this is current result before we run it
    /* currentResult = currentResult + parseInt(enteredNumber.value);*/
    /*outputResult(currentResult,calcDescription);*/

    createAndWriteOutput('+', initialResult, enteredNumber )
    const logEntry = { //adding key and values to the object

        operation: 'ADD', //This is a key and value. You can have Key-value or object-object.This is kind of an IDENTIFY. That tell
                          //If you this the log this should identify it as the operation for Addition
        prevResult: initialResult, // This is your result before the operation
        number: enteredNumber, //This is the number we added to the previous number
        result: currentResult   //This could be the total or current result of the operation
    };
    logEntries.push(logEntry);
    /*logEntries.push(enteredNumber);*/ //push function pushes new elements to the list of array elements;

    console.log(logEntry.operation);//Accessing data on the object.
    //console.log(logEntries);//if you wan to access specific element in the array list you do this //console.log(logEntries[0])
    console.log(logEntries);

}

//we intstructing the browser if the addBtn is clicked call the add function
addBtn.addEventListener('click', split)

/****************************************************SPLITTING CODE INTO FUNCTION************************************************************/

/****************************************************Connecting all buttons to Functions***********************************************************/
/*
* ensure all the buttons are connecting
* */

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; // this is current result before it's changed
    /*const enteredNumber = parseInt(userInput.value)*/
    /*const calcDescription = `${currentResult} + ${enteredNumber}`*/
    currentResult -= enteredNumber;
    /*currentResult = currentResult - enteredNumber; *///this is current result before we run it
    /* currentResult = currentResult + parseInt(enteredNumber.value);*/
    /*outputResult(currentResult,calcDescription);*/

    createAndWriteOutput('-', initialResult, enteredNumber )
}
subtractBtn.addEventListener('click', subtract);

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; // this is current result before it's changed
    /*const enteredNumber = parseInt(userInput.value)*/
    /*const calcDescription = `${currentResult} + ${enteredNumber}`*/
    currentResult *= enteredNumber;
    /* currentResult = currentResult * enteredNumber;*/ //this is current result before we run it
    /* currentResult = currentResult + parseInt(enteredNumber.value);*/
    /*outputResult(currentResult,calcDescription);*/

    createAndWriteOutput('*', initialResult, enteredNumber )

}

multiplyBtn.addEventListener('click', multiply)

function divide(){

    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; // this is current result before it's changed
    /*const enteredNumber = parseInt(userInput.value)*/
    /*const calcDescription = `${currentResult} + ${enteredNumber}`*/
    currentResult /= enteredNumber;
    /*currentResult = currentResult / enteredNumber; *///this is current result before we run it
    /* currentResult = currentResult + parseInt(enteredNumber.value);*/
    /*outputResult(currentResult,calcDescription);*/

    createAndWriteOutput('/', initialResult, enteredNumber )
}

divideBtn.addEventListener('click', divide)

/*
ARRAY
* 1. Assuming we want to log every operation we do with this operations (either add,sub,divide,multiply)
* 2. Assuming we want to store those activities into an internal log
* 3. which we theoretically could send to a server etc with a node.js we could write to a file for security reasons
*  4. we want to keep track of every click by keeping list of data and data
*  5. let logEntries; //this can be an array with initial elements.But for this purpose of keep log we can leave it empty as this
   6. Now if we want to add new entry but refer to logEntries.
   7. Always we need to set our variable to a new value . So we will set this array with a new value by overwriting declared variable.
   * 8.So, in the add function to refer to the logEntery and pass the enteredNumber in an array to the logEntries variable. EX: logEntries = [enteredNumber
   *
* */


/*
* OBJECT
* 1. It is used to add pieces of related data together
* 2. Assuming we don't want to add just the nummber that we added to our Log but more detail log info package
* 3. Because logging just the number doesn't tell us much
* 4. It will interesting to the result before we add the number,the operation itself,so we can add the items to the log on all the functions
* 5. And just attach the info, whether that was an addition or a subtraction operation
* 6. This is great scenerio of objects because we will have to mange multiple peices of data that are related
* 7. This pieces of data in turn will be managed as a list of these peices of data

* */

/*
* Accessing Object Data
* 1. Now we are adding our log enteries to the log entries array which is great
* 2. Let say for some reason, maybe another part of your code need some data from your log entry
* 3. You may not need the full object but you need the operation
* 4. You log it on the operation you want. This example will show you how to access data on objects and you this with a notation which is already
* 5. You use the name of the object, logEntry then you use dot notation.The dot tells JS on the object infront of the dot,
* 6.You want to access one of the properties as it is called.(EX: console.log(logEntry.Operation);
*
*
* */