/*
* 1.  Building a little Moster Killer Application
* 2.  We have the health of a Monster
* 3. We have the health of a Player
* 4. We have a bonus Life, in case our health drops to zero will be able to recover,one time only
* 5. We have four(4) buttons which can press to attack the monster ,to launch a strong attack against the moster
* 6. To heal ourselves and also to output some log info about the past rounds.
* 7.Also to output some log information about the past rounds.
*
* NB: We have to consider some IF-STATEMENTS we need to use for the buttons,
*   whether to launch a Normal or Strong Attack
*    b. we also need to check after each round whether we won or not.
*    c. whether the health of the monster and the player is below zero and we therefore need to quit the
*    the game or stop the game.
*    d.There will be other if checks as well because we will also add a functionality where when we load this page, we actually asked
*     the player how much health monster and player should have,
*     -health points,501000, and we will need to check whether the value the user entered is valid value and so on.
*     -So there will be a couple of places where we need IF-CHECKS 4
*     - AND THEREFORE a couple of places where we can practice the things we learned.
*
*
* */

/*
* Adding an Attack Function
* 1. We will begin by making sure the attach button does something,that we actually shrink these health bars.
* 2. We need to configure how much health is available and later ask the User of this WEB-PAGE for a starting value
*    For now we will Hard code it.
*
*  3. We will start by declaring a LET with a chosen name,later the User will be able to choose that himself.Now it will be hard coded
*  - will set it to 100 health point
*  4.Also set an attack value,it also a constant because this won''t change throughout the program LifeCycle
*  - The attack value is set to 10 (You can express that with different value,it is up to you)
*     It is basically how hard we hit the monster.
*   5.In the Vendor.js file we have little randomization logic built in so that the attack value
*      I set up here will actually be treated as a maximum value and we will generate value.
*       between 0 and that value to have a little bit of randomness in the game.
*     -Now also one little thing which we will change here, attack value is a constant which will never change
*     Note: The attack value is set as constant and can be left like that but for such a global game value which we really hardcode
*     in there so which we don't derive from a USER input which thereafter never changes but which we as developer setup
*    a global value which you just hardcode into your code.
*    -  It is quite common to use all uppercase characters and separate words with underscore
*       to make it clear that this is a global value
*    6. CChosenMaxLife is not declared as global value because later allow USER of the webpage to set this value
*
*    Now:
*     7. we can call a function which is exposed by Vendor.js, the adjust health bars function
*     which takes the maimum life and which then just sets the maximum life in our USER interface
*    so in the HTML Code in the end for these progress bars
*    - we call ADJUST HEALTH BARS adjustHealthBars and simply forward the chosenMaxLife, adjustHealthBars(chosenMaxLife);
*      This get updated on the screen whenever we load this game
*    NOTE
*    For purpose of test,
*    - after introducing the adjustHealthBars(chosenMaxLife);
*    -If you inspect the browser (chrome) you will see the set max value in the progress tag. If you set it to (50)4
*      max="50"
*    <progress id="monster-health" max="100" value="100">100%</progress>
*
*     8.Now we want to connect this attack button to a function which we execute which then lowers this health
*     - In the vendor.js file, we expose this attack button, that is a constant which we can use.
*      Like: const attackBtn = document.getElementById('attack-btn');
*      NOTE: These constants are not written in all caps because these don't hold hardcoded string or number
*      values but instead references to parts of our HTML CODE, so parts of our web page and there, this is not such a global hardcoded value but it's a bit more
*      dynamic even it's of course won't change whilst the app is running
*      So, we can refer to the attack button
*
*      The CONSTANT in the vendor file is basically a reference to this button and we can use this here
*      to the also add
*      - event listener and the Event Listener should listen to the click event and then fire function
*      - which will be added and named attackHandler (the naming can be decided by your as a developer)
*      - I will point my attackHandler in my eventListener
*       - In this function I will launch an attack towards that attack towards that monster
*       -Now to launch that attack , we can look at the vendor.js file we have dealMonsterDamage(damage) function
*         What this does is, it calculates a random amount of damage based on the damage we feed in as a parameter
*         - then it adjusts the monster health bar, so the health bar we see on the page here and it returns
*            the damage it calculated,
*       - so that we can also use it in the app.js file.
*
*      9. call the dealMonsterDamage() in the attackHandler() function
*         - pass the ATTACK_VALUE in into the dealMonsterDamage(ATTACK_VALUE)
*         - Store in a damage constant, a constant because this value will not change for this function execution
*           So I will store it in a Local constant which is available inside of this function thereafter
*          - We can use the stored damage to adjust our monster health.
*          -For that we add new new variable called currentMonsterHealth, which will be set to equal (chosenMaxLife)
*            note: it will render the variable a bit redundant
*            -it will be important we let the USER set this. For now we use a dummy data
*
*      10. Now that the current monster health should be reduced by the damages which was delat down there.
*          - we can use the minus equal operator and set this to damage (currentMonsterHealth -=damage)
*            This means that current moster health is set equal to current monster minus damage
*           - with this we should be able to attack the monster with a normal attack
*           - you will see the monster health bar shrinks by different amounts
*
*        NOTE: At this point 7 as shown in the numbering below: we have no win condition though, so it will make no sense to add this and therefore of course
*              we will need an IF-STATEMENT
*
*        NOW: FIRST IF-STATEMENT
*        -----------------------
*        1. We want to find out if after an attack, we won.
*        2. In the attackHandler we can add IF-STATEMENT with the IF-KEYWORD & check if the current monster health
*        3. After, we deduct the damage from it, it that is smaller or smaller or equal to zero
*        4. Because we need to also check for equality because the monster is that not only if its health is below
*            zero, but also it's equal to zro. If that is the case,then we know that we  won.
*             -In this case you can throw and alert() and say you have Won
*             -the alert will only execute if the condition is met
*         Note: Out alert message is output before the health bar updates simply due to the way JS is made to work
*         - it blocks the UI update until we dismiss this dialog here,but the general logic works
*           and if we dismiss it,we also see the health go down
*           NOTE: tHIS IS our 1st IF CHECK
*
*        SECOND STEP:
*        1. I will be boring if we can attack the Monster but the monster cannot fight back.
*        2. What we need to do is just to adjust the logic to let the monster fight back.
*        3. After we hit the Monster ,the monster should immediately hit back at us
*        4. In the vendor.js we have the (dealPlayerDamage) function which works just like the (dealMonsterDamage)
*        - it takes some damage
*        - then calculates a random damage which is actually dealt, adjusts the player health bar in the UI
*        -and RETURNS he dealt damage
*        5. In apps.js we just need to define the maximum damage.
*        DECLARE a constant and add the monster attack value. Hardcode it.
*        -it will let the monster to hitback with maximum damage of 14, which is more than we hit the monster for,
*        - This means we will need a lot of luck in order to win because these are maximum damages
*        -
*
*        Keep in mind that the attack handler is executed for every click on the button,
*        so we run the if-statement
*
* */

  //3.

  const ATTACK_VALUE = 10;
  const STRONG_ATTACK_VALUE = 17;
  const MONSTER_ATTACK_VALUE = 14;
  const HEAL_VALUE =20;

  const MODE_ATTACK = 'ATTACK'; //MODE_ATTACK = 0;
  const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; //MODE_STRONG_ATTACK = 1

  const  LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
  const  LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
  const  LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
  const  LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
  const  LOG_EVENT_GAME_OVER = 'GAME_OVER';

 /* const enteredValue = prompt('Maximum Life for you and the monster.', '100');
let chosenMaxLife = parseInt(enteredValue); //1.*/
let battleLog = [];
let lastLoggedEntry;
/************************************Video 107*********************************/
function getMaxLifeValues() {
    const enteredValue = prompt('Maximum Life for you and the monster.', '100');
    /*let chosenMaxLife = parseInt(enteredValue); //1.*/
    const parsedValue = parseInt(enteredValue); //1.

    /*if (isNaN(chosenMaxLife)|| chosenMaxLife <=0)*/
    if (isNaN(parsedValue)|| parsedValue <=0){
        //chosenMaxLife = 100;
        throw {message: 'Invalid user input, not a number'}

    }
    return parsedValue;
}

let chosenMaxLife;
try {

    let chosenMaxLife = getMaxLifeValues();
}catch (error) {
    console.log(error);
    chosenMaxLife =100;
    alert('You have entered something wrong,default value of 100 was used');

}finally {
    
}
/*
let chosenMaxLife = getMaxLifeValues();*/
/************************************Video 107*********************************/


/*if (isNaN(chosenMaxLife)|| chosenMaxLife <=0){
   chosenMaxLife = 100;

}*/

  /*let chosenMaxLife = 100; //1.*/
  /*let chosenMaxLife =1;*/

  let currentMonsterHealth = chosenMaxLife;//6
  let currentPlayerHealth = chosenMaxLife;//7
   let hasBonusLife = true;



    adjustHealthBars(chosenMaxLife); //3.0

   function writeToLog(ev,val,monsterHealth,playerHealth){
      //let logEntry;
       let logEntry = {
           event: ev,
           value: val,
           finalMonsterHealth: monsterHealth,
           finalPlayerHealth: playerHealth

       };

       //By default this look for equality
       switch (ev) {

           case LOG_EVENT_PLAYER_ATTACK:
               logEntry.target = 'MONSTER';

               break;

           case LOG_EVENT_PLAYER_STRONG_ATTACK:
               logEntry = {
                   event: ev,
                   value: val,
                   target: 'MONSTER',
                   finalMonsterHealth: monsterHealth,
                   finalPlayerHealth: playerHealth
               };

               break

           case LOG_EVENT_MONSTER_ATTACK:

               logEntry = {
                   event: ev,
                   value: val,
                   target: 'PLAYER',
                   finalMonsterHealth: monsterHealth,
                   finalPlayerHealth: playerHealth
               };

               break;

           case LOG_EVENT_PLAYER_HEAL:
               logEntry = {
                   event: ev,
                   value: val,
                   target: 'PLAYER',
                   finalMonsterHealth: monsterHealth,
                   finalPlayerHealth: playerHealth
               };
               break;

           case LOG_EVENT_GAME_OVER:

               logEntry = {
                   event: ev,
                   value: val,
                   finalMonsterHealth: monsterHealth,
                   finalPlayerHealth: playerHealth
               };
               break;

           default: logEntry = {};

       }
       /*if (ev === LOG_EVENT_PLAYER_ATTACK){
           logEntry.target = 'MONSTER';
           /!*logEntry = {
               event: ev,
               value: val,
               target: 'MONSTER',
               finalMonsterHealth: monsterHealth,
               finalPlayerHealth: playerHealth
           };*!/
          // battleLog.push(logEntry);
       }else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
           logEntry = {
               event: ev,
               value: val,
               target: 'MONSTER',
               finalMonsterHealth: monsterHealth,
               finalPlayerHealth: playerHealth
           };
          // battleLog.push(logEntry);
       }else if (ev === LOG_EVENT_MONSTER_ATTACK){
           logEntry = {
               event: ev,
               value: val,
               target: 'PLAYER',
               finalMonsterHealth: monsterHealth,
               finalPlayerHealth: playerHealth
           };
           //battleLog.push(logEntry);
       }else if (ev === LOG_EVENT_PLAYER_HEAL){

           logEntry = {
               event: ev,
               value: val,
               target: 'PLAYER',
               finalMonsterHealth: monsterHealth,
               finalPlayerHealth: playerHealth
           };
           //battleLog.push(logEntry);

       } else if (ev === LOG_EVENT_GAME_OVER){

           logEntry = {
               event: ev,
               value: val,
               finalMonsterHealth: monsterHealth,
               finalPlayerHealth: playerHealth
           };
           //battleLog.push(logEntry);

       }*/
       battleLog.push(logEntry);

   }

    function reset(){
     currentMonsterHealth = chosenMaxLife;
     currentPlayerHealth= chosenMaxLife;
     resetGame(chosenMaxLife);

    }

    function endRound(){
        const initialPlayerHealth = currentPlayerHealth;
        const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);//9
        currentPlayerHealth -= playerDamage;//10

        writeToLog(LOG_EVENT_MONSTER_ATTACK,playerDamage, currentMonsterHealth,currentPlayerHealth);

         if (currentPlayerHealth <=0 && hasBonusLife){
             hasBonusLife = false;
             removeBonusLife();
             currentPlayerHealth = initialPlayerHealth;
             setPlayerHealth(initialPlayerHealth);
             alert("You would be dead but the bonus Life saved you...!!!");

         }
        //11
        if(currentMonsterHealth <=0 && currentPlayerHealth > 0){ //we checking if the monster helth is smaller or equal to zero or if the monster won.
            //yOU MIGHT THINK we have to add else block but NO. Because if we haven't won, if the monster health is not below zero,then we lost
            alert('You won!');
            //reset();
            writeToLog(LOG_EVENT_GAME_OVER,'PLAYER WON', currentMonsterHealth,currentPlayerHealth);


        }else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){ //here it indicate it USER ddidnt win then the MONSTER DID in this condition

            alert('You have Lost'); //Player loses if Monster Health is above 0.
            //reset();
            writeToLog(LOG_EVENT_GAME_OVER,'MONSTER WON', currentMonsterHealth,currentPlayerHealth);

        }

            //when we do this it will be wrong because the attack handler executes for every click
            // So the else will only execute whenever neither of the two conditions is met and that most of the times be the case
        //else is not wrong but for this scenerio it's wrong .Rather let's check ELSE IF
        else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0 ){
            alert('You have a draw');
            //reset();

            writeToLog(LOG_EVENT_GAME_OVER,'A DRAW', currentMonsterHealth,currentPlayerHealth);

        }
        if (currentMonsterHealth <= 0 || currentPlayerHealth <=0)
           {
               reset();
             }
    }

    //3rd function
    function attackMonster(mode){
          /*let maxDamage;*/
          /*let logEvent;*/
          const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
          //am using ternanery operation here in place of the IF-STATEMENT:
          //checking if MODE is equal to MODE_TTACK, If TRUE separated by question mark Otherwise separated by colon
        const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE: STRONG_ATTACK_VALUE;
      /*if (mode === 'ATTACK'){*/
      /*  if (mode === MODE_ATTACK){
       maxDamage = ATTACK_VALUE;
       logEvent = LOG_EVENT_PLAYER_ATTACK;
      } /!*else if (mode === 'STRONG_ATTACK')*!/
        else if (mode === MODE_STRONG_ATTACK)
        {

        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
      }
*/

      const damage = dealMonsterDamage(maxDamage); //6
      currentMonsterHealth -= damage;  //8
        writeToLog(logEvent,damage, currentMonsterHealth,currentPlayerHealth);


        endRound();
      /*const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);//9
      currentPlayerHealth -= playerDamage;//10

      //11
      if(currentMonsterHealth <=0 && currentPlayerHealth > 0){ //we checking if the monster helth is smaller or equal to zero or if the monster won.
        //yOU MIGHT THINK we have to add else block but NO. Because if we haven't won, if the monster health is not below zero,then we lost
        alert('You won!');

      }else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){ //here it indicate it USER ddidnt win then the MONSTER DID in this condition

        alert('You have Lost'); //Player loses if Monster Health is above 0.
      }

          //when we do this it will be wrong because the attack handler executes for every click
          // So the else will only execute whenever neither of the two conditions is met and that most of the times be the case
      //else is not wrong but for this scenerio it's wrong .Rather let's check ELSE IF
      else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0 ){
        alert('You have a draw');
      }
*/


    }

    function attackHandler(){ //05

      attackMonster('ATTACK')

     /* const damage = dealMonsterDamage(ATTACK_VALUE); //6
        currentMonsterHealth -= damage;  //8
        const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);//9
         currentPlayerHealth -= playerDamage;//10

        //11
      if(currentMonsterHealth <=0 && currentPlayerHealth > 0){ //we checking if the monster helth is smaller or equal to zero or if the monster won.
                                      //yOU MIGHT THINK we have to add else block but NO. Because if we haven't won, if the monster health is not below zero,then we lost
         alert('You won!');

        }else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){ //here it indicate it USER ddidnt win then the MONSTER DID in this condition

          alert('You have Lost'); //Player loses if Monster Health is above 0.
        }

            //when we do this it will be wrong because the attack handler executes for every click
           // So the else will only execute whenever neither of the two conditions is met and that most of the times be the case
           //else is not wrong but for this scenerio it's wrong .Rather let's check ELSE IF
        else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0 ){
          alert('You have a draw');
        }
*/
    }


    //This is cause strong attack on the Monster
     function strongAttackHandler(){
      attackMonster('STRONG_ATTACK');

       /*const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
       currentMonsterHealth -= damage;
       const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
       currentPlayerHealth -= playerDamage;

       //11
       if(currentMonsterHealth <=0 && currentPlayerHealth > 0){
         alert('You won!');

       }else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){
         alert('You have Lost'); //Player loses if Monster Health is above 0.
       }
       else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0 ){
         alert('You have a draw');
       }*/


     }

     function  healPlayerHandler(){

        let healValue ;

        if (currentPlayerHealth>= chosenMaxLife -HEAL_VALUE){
            alert("You cant heal to more than your max initial health ");
            healValue = chosenMaxLife - currentPlayerHealth;

        }else
        {
            healValue = HEAL_VALUE;
        }
      increasePlayerHealth(HEAL_VALUE);
      currentPlayerHealth += HEAL_VALUE;
         writeToLog(LOG_EVENT_PLAYER_HEAL,healValue, currentMonsterHealth,currentPlayerHealth);

         endRound();
     }

     function  printLogHandler(){
        // for (let  i =0; i < 3; i = i = i + 1);
      for (let  i =0; i < 3; i++){
           console.log('-----------------');
       }

      /*   for (let i=10; i > 0; i--){
             console.log(`i =  ${i}` );

             //or console.log(i);
         }*/

        /* for (let i = 0; i < battleLog.length; i++){
             console.log(battleLog[i]);
         }*/

          /* let i = 0;
         for (const logInfo of battleLog){

             console.log(logInfo);
             console.log(i)
             i++;
         }*/

        /* let j=0;
         while (j < 3){
             console.log('---------------');
             j++;
         }*/
/*******************************************************/
         /*let k=0;
         do {
              console.log('outer ',k);
              /!*******video 105*********!/
                  for (let l =0; l < 5; l++){
                      //2nd example
                      if (l===3){//this means when it get to 3 break dont print 3 and beyond
                          break;
                      }//2nd example
                      console.log('inner',l)
                  }
             /!*********video 105*******!/
              k++;
         }while (k < 3)  //This will print 3 and not continue because the condition will first print before incrementing
*/


         /**********************************************/
         let k=0;
         outWhile: do{
             console.log('outer ',k);
             /*******video 105*********/
            innerFor: for (let l =0; l < 5; l++){
                 //2nd example
                 if (l===3){//this means when it get to 3 break dont print 3 and beyond
                     //break outWhile;
                     continue outWhile;

                 }//2nd example
                 console.log('inner',l)
             }
             /*********video 105*******/
             k++;
         }while (k < 3)  //This will print 3 and not continue because the condition will first print before incrementing

         /********************************************/

        /* let m = 3;
         while(m < 3){
             console.log(m);
             j++; //this won't print anything because the condition is not met
         }*/
  /*******************************************************/

        /* let j=0;
         while (j < 3) {
             console.log(j);
             j++;
         }*/
/*******************************************************/

     /*    let randomNumbers = [];
         let finished = false;
         while(!finished){
             const rndNumbers = Math.random();
             if (rndNumbers > 0.5){
                 finished = true;
                 console.log(randomNumbers);
             }
         }*/
/*******************************************************/


         let i = 0;
         for (const logInfo of battleLog){
                if (!lastLoggedEntry && lastLoggedEntry !==0 || lastLoggedEntry < i){
                    console.log(`#${i}`);

                    for (const key in logInfo){
                        /*console.log(key);
                         console.log(logInfo[key]);*/
                        console.log(`${key}=>${logInfo[key]}`);
                    }
                    lastLoggedEntry = i;
                    break;
                }

             i++;
         }
            //console.log(battleLog);
     }
   attackBtn.addEventListener('click', attackHandler); //4
   strongAttackBtn.addEventListener('click',strongAttackHandler);
   healBtn.addEventListener('click',healPlayerHandler);
   logBtn.addEventListener('click', printLogHandler);

   /*
   *  Adding STRONG ATTACK
   * 1. Add event listener
   * 2. create a Function that will add more attack to the Monster
   *
   * */


