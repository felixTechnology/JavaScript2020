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



function writeToLog(operationIdentifier,prevResult,operateNumber,newResult){

    const logEntry = { //adding key and values to the object

        operation: operationIdentifier, //This is a key and value. You can have Key-value or object-object.This is kind of an IDENTIFY. That tell
                          //If you this the log this should identify it as the operation for Addition
        prevResult: prevResult, // This is your result before the operation
        number: operateNumber, //This is the number we added to the previous number
        result: newResult    //This could be the total or current result of the operation
    };

    logEntries.push(logEntry);
    /*logEntries.push(enteredNumber);*/ //push function pushes new elements to the list of array elements;

   /* console.log(logEntry.operation);*///Accessing data on the object.
    //console.log(logEntries);//if you wan to access specific element in the array list you do this //console.log(logEntries[0])
    console.log(logEntries);

}


/*******************************************************************************/
function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (calculationType !=='ADD' && calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' && calculationType !=='DIVIDE' ||
         /*enteredNumber === 0*/ !enteredNumber
        ) //this means that when the user enters zero  return value and dont proceed to execute.
    {
        return; //this means if the conditions is not what we support below ,then return right away. Dont execute
    }


    /*if (calculationType || 'ADD' || calculationType || 'SUBTRACT' &&
        calculationType || 'MULTIPLY' && calculationType || 'DIVIDE')
    {*/
       /* const enteredNumber = getUserNumberInput();*/
        const initialResult = currentResult;
        let mathOperator;
        if(calculationType === 'ADD'){ //we perform calculation based on the calculation type we getting
            currentResult += enteredNumber;
            mathOperator = '+';
        }else if(calculationType === 'SUBTRACT'){
            currentResult -= enteredNumber;
            mathOperator = '-';
        }else if(calculationType === 'MULTIPLY'){
            currentResult *= enteredNumber;
            mathOperator = '*';

        }else{
            currentResult /= enteredNumber;
            mathOperator = '/';

        }

        createAndWriteOutput(mathOperator, initialResult, enteredNumber )


        writeToLog(calculationType,initialResult,enteredNumber,currentResult);
    //}
    /*const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){ //we perform calculation based on the calculation type we getting
        currentResult += enteredNumber;
        mathOperator = '+';
    }else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    }else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';

    }else{
        currentResult /= enteredNumber;
        mathOperator = '/';

    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber )


    writeToLog(calculationType,initialResult,enteredNumber,currentResult);*/
}

/*******************************************************************************/


    function split() {
        //When we pass in Add it will meet the IF STATEMENT as TRUE and will run the first condition block of the function called
        calculateResult('ADD'); //This was introduced in the IF STATEMENT AND THAT MADE ME COMMENT THE BELOW
    /*const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; // this is current result before it's changed
    /!*const enteredNumber = parseInt(userInput.value)*!/
    /!*const calcDescription = `${currentResult} + ${enteredNumber}`*!/
    currentResult += enteredNumber;
    /!*currentResult = currentResult + enteredNumber;*!/ //this is current result before we run it
    /!* currentResult = currentResult + parseInt(enteredNumber.value);*!/
    /!*outputResult(currentResult,calcDescription);*!/

    createAndWriteOutput('+', initialResult, enteredNumber )
    /!*const logEntry = { //adding key and values to the object

        operation: 'ADD', //This is a key and value. You can have Key-value or object-object.This is kind of an IDENTIFY. That tell
                          //If you this the log this should identify it as the operation for Addition
        prevResult: initialResult, // This is your result before the operation
        number: enteredNumber, //This is the number we added to the previous number
        result: currentResult   //This could be the total or current result of the operation
    };*!/
   /!* logEntries.push(logEntry);
    /!*logEntries.push(enteredNumber);*!/ //push function pushes new elements to the list of array elements;

    console.log(logEntry.operation);//Accessing data on the object.
    //console.log(logEntries);//if you wan to access specific element in the array list you do this //console.log(logEntries[0])
    console.log(logEntries);*!/

    createAndWriteOutput('+', initialResult, enteredNumber )


    writeToLog('ADD',initialResult,enteredNumber,currentResult);*/

}

//we intstructing the browser if the addBtn is clicked call the add function
addBtn.addEventListener('click', split)

/****************************************************SPLITTING CODE INTO FUNCTION************************************************************/

/****************************************************Connecting all buttons to Functions***********************************************************/
/*
* ensure all the buttons are connecting
* */

function subtract(){calculateResult('Subtract');

    calculateResult('SUBTRACT');
    /*const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; // this is current result before it's changed
    /!*const enteredNumber = parseInt(userInput.value)*!/
    /!*const calcDescription = `${currentResult} + ${enteredNumber}`*!/
    currentResult -= enteredNumber;
    /!*currentResult = currentResult - enteredNumber; *!///this is current result before we run it
    /!* currentResult = currentResult + parseInt(enteredNumber.value);*!/
    /!*outputResult(currentResult,calcDescription);*!/

    createAndWriteOutput('-', initialResult, enteredNumber )

    writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);*/
}
subtractBtn.addEventListener('click', subtract);

function multiply(){
    calculateResult('MULTIPLY');
    /* const enteredNumber = getUserNumberInput();
     const initialResult = currentResult; // this is current result before it's changed
     /!*const enteredNumber = parseInt(userInput.value)*!/
     /!*const calcDescription = `${currentResult} + ${enteredNumber}`*!/
     currentResult *= enteredNumber;
     /!* currentResult = currentResult * enteredNumber;*!/ //this is current result before we run it
     /!* currentResult = currentResult + parseInt(enteredNumber.value);*!/
     /!*outputResult(currentResult,calcDescription);*!/

     createAndWriteOutput('*', initialResult, enteredNumber )

     writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);*/

}

multiplyBtn.addEventListener('click', multiply)

function divide(){

    calculateResult('DIVIDE');
    /*    const enteredNumber = getUserNumberInput();
        const initialResult = currentResult; // this is current result before it's changed
        /!*const enteredNumber = parseInt(userInput.value)*!/
        /!*const calcDescription = `${currentResult} + ${enteredNumber}`*!/
        currentResult /= enteredNumber;
        /!*currentResult = currentResult / enteredNumber; *!///this is current result before we run it
        /!* currentResult = currentResult + parseInt(enteredNumber.value);*!/
        /!*outputResult(currentResult,calcDescription);*!/

        createAndWriteOutput('/', initialResult, enteredNumber );

        writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);*/
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

/*
* Adding a Reusable Function That uses Object
*
* 1. It will be nice generating same log entries for subtraction, multiplication and so on
* 2. We can grab that code object
* 3. And copy and paste in other functions but that will be duplicate of code.
* 4.Identify what is comMon in all the code (and we have what we call CREATE & WRITE OUTPUT)
* 5. Create a function for creating a Log.
* */

/*
*  Importing script correctly with Defer and async
*
* defer tells the browser to download your js script tag located in the html head,rightaway,
* 2. But it should not block passing the HTML so it will continuing parsing the html till everything is passed before running the JS
* 3.It only download the JS once the html finishes EXAMPLE: <script src="assets/scripts/app2.js" defer> </script>
*
* Sometime you have script which you will want to load/execute early because maybe they dont
* to execute early.They do not rely on the html.
* This is achieved using the (async) instead of defer. It tells the browser to load the script as early as possible.The browser is not block but continue parsing
* the html. The difference is the async start downloading. This is not the correct solution because the script start executing before loading the html.
*
*
* */

/*
* 1ST MODULE SUMMARY
* 1. Learnt about basic of JS
* 2. Learnt about variables and constants which you create with (let and (const),
* 3. Learnt about the differences between declaring a variable or constant with (let) or (const)
* 4. Initialising by assigning a value of with (=)
* 5. Learnt about operators like the (=+ to assign a value to a variable or the plus and minus, multiplication,division,etc
* 6. Learnt about functions which allow you to define code that can execute multiple time whenever you call the function
* 7. How to manage,parse data into function, write proper code,how to use the right syntax,how to work with number and strings
* 8.how to work with objects and how to work with arrays which are list of data
* 9.How to import of string properly to optimize your page loading
* 6.
* */


/*
*
* Debugging and Efficiently developing
* Mastering JS Development
*
* 1. How to write code efficiently by getting lots about tools available
*
* 2.Find Help
* 3.
*
*
*
* */

/*
* CONTROL STRUCTURES
* This means that when you are writing code, you don't always want to execute the same code
*  top-to-button.
* 2. Sometimes you have some condition that should be met for some code to be executed and
* 3. And execute some other code if the condition is not met or you need to repeat some code execution and
* 4  And instead of writing every cycle on your own,you can use some built-in features built into JS to run through
* 5. a code snippet multiple times until some condition is met or until some data is exhausted
* 6. We will use (conditional statement, if statement,conditional expressions<bollean values and operators)
* 7. Loops in JS
* 8.
*
* */

/*
* CONDITIONAL CODE EXECUTION
* 1. Assuming you have a function and you have two code snippets that could execute
* 2. Example you either add two numbers or you subtract two numbers. You do that in the same function
* 3. Of course you can write two separate functions but even then. you might want to call one of the
* the two functions based on some condition (This is called conditional statement)
* 4.You may have some program where you either want to run option A,so want to add two numbers or you
* want to subtract two numbers (Here you use IF STATEMENT)
* 5.IF-STATEMENT you specifiy a condition that must be met and a condition is in the end just a boolean value
*
*
* USING IF STATEMENT:
* 1.With the ADD,SUBT,MULTIPLY,DIVIDE in the BASIC of JS we learnt we have a lots of code duplications
* 2. We always start by getting the entered number #
* 3. Then we set the initial result that always exactly the same
* 4. Then we have our calculation which is always different
* 5. Then however we again just write the output or write to the log
* 6. Yes, we do pass different info in there but  actually the only info that is different is the operator we use (-)(+)(/)(*) or the
* description of the operator (ADD)(MULTIPLY)(DIVIDE)(SUBTRACT)
* 7. We put a new function EX:
*   Function calculateResult(calculationType)
*   {
*             const enteredNumber = getUserNumberInput();
               const initialResult = currentResult;
                let mathOperator;
                if(calculationType === 'ADD'){ //we perform calculation based on the calculation type we getting
                  currentResult += enteredNumber;
                  mathOperator = '+';

                 }else{
                     currentResult -= enteredNumber;
                     mathOperator = '-';
                  }

                //currentResult += enteredNumber;
                createAndWriteOutput('+', initialResult, enteredNumber )
                 writeToLog(calculationType,initialResult,enteredNumber,currentResult);

*
*   }
*
* Then bring in the code we have in the add function but here it will be written in more flexible way.
* Here this will expect a parameter
* - calculation Type and expect this to be a STRING that describes the type of calculation
* Now you can add the if-statement in it
* */