// Put your code here


console.log("Let's roll some dice, baby!");
console.log("---------------------------");

    function Roll(min, max) {
        min = Math.ceil(1);
        max = Math.floor(6);
        return Math.floor(Math.random() * 6) + 1;
    }
 

for (i = 0; i < 10; i++){
   let die1 = Roll();
   let die2 = Roll();

   let message = `${die1} + ${die2} == ${die1 + die2}`
   if (die1 == die2)
   {
       message += " DOUBLES!";
   }
   console.log(message)
}
