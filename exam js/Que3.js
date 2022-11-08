/** +40 Points
 * @Question3
 *
 *  We ask you to generate a random password from the 4 sequences given to you.  @number @alphabetB @alphabetS @symbols
 * 
 *  Randomly select characters from each array and create an 8-character password.
 *  Below are 4 different arrays.
 *  Firstly, select one of these arrays randomly. Then randomly select an item from the selected array. And in this way, create the first character of the password.
 *  Repeat the same process for the remaining 7 characters. (+25 Points)
 *
 *  
 *  You cannot use the same character in consecutive order. (+10 Points)
 *  Abb12=zh   => is not allowed 'bb'
 *  d&F+i-+d   => is allowed
 * 
 *  No other restrictions
 *  
 * Write in the comment line in detail what your code does. (+5 Points)
 * ---------------------------------
 * */  
//here we have 4 arrays and from each of them we choose 2 diffrent letters,numbers and symbols   
 const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const alphabetU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetL= ["a","b","c","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols= ["/","(",")","=","*","-","%","&","!","+",":","½"];
let passwordLength = 8;
let password = []
//here this code randomly choose a number from the numbers
let letter = alphabetU[Math.floor(Math.random()*alphabetU.length)];
let Letter = alphabetU[Math.floor(Math.random()*alphabetU.length)];
//here this code randomly choose a letter from the uppercase alphabet
let number = numbers[Math.floor(Math.random()*numbers.length)];
let Number = numbers[Math.floor(Math.random()*numbers.length)];
//here this code randomly choose a letter from the lowercase alphabet
let Aletter = alphabetL[Math.floor(Math.random()*alphabetL.length)];
let aletter = alphabetL[Math.floor(Math.random()*alphabetL.length)];
//here this code randomly choose a symbol from the symbols
let sybmol = symbols[Math.floor(Math.random()*symbols.length)];
let Sybmol = symbols[Math.floor(Math.random()*symbols.length)];

password.push(number,letter,Aletter,sybmol,Letter,Number,aletter,Sybmol),

console.log(password);



  /* write your code here  */


  
  /* write your code here */
 

/* Result  Use the random functıon 'Math.random()' to choose the array below. Then select the character from that array.  */


// console.log(`Generated password`);
// console.log(`-------------------------`);
// console.log(password);