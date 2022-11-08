/** 30 Points
 * @Question2
 *We want you to create a mail address from the values in the given array. 
 *First name, last name and registration number are listed sequentially (every 3 elements).
 *
 * 
 *Example:
 * ---------------------------------
    MEHMET DOGAN 5689
    CHARLES BUKOWSKI 1490
    CHARLES DICKNES 1200
    JHON DOE 1900   
 *
 * We want you to lowercase the first letter of the first name, the first two letters of the last name and the first 3 values of the registration number and add "@hicoders.ch" at the end.
 * 
 * Example :
 * ---------------------------------
    Mehmet -> M
    Dogan -> DO
    5689 -> 568
    mdo568@hicoders.ch
 * 
 *We want you to add this mail address to the array named @emails . (+25 Points)
 * 
 * Write in the comment line in detail what your code does. (+5 Points)
 * The output should look like this;
 * ---------------------------------
[
  'mdo568@hicoders.ch',
  'cbu149@hicoders.ch',
  'cdi120@hicoders.ch',
  'jdo190@hicoders.ch'
]
 * */


// let personInfo=["   MEHMET ","   DOGAN",5689,"CHARLES"," BUKOWSKI",1490,"    CHARLES","DICKNES",1200," JHON","   DOE",1900]
// let emails = personInfo.split(",");


const personInfo = "MEHMETDOGAN5687,CHARLESBUKOWSKI1497,CHARLESDICKNES1207,JHONDOE1900";
//new names or virables
let emails = personInfo.split(",");
//loop
for (let index = 0; index < emails.length; index++) {
    let newEmail = emails[index];

// changing and replacement section
    newEmail = newEmail.replace("JHON", "J"); 
    newEmail = newEmail.replace("DOE", "DO");
    newEmail = newEmail.replace("CHARLES", "C"); 
    newEmail = newEmail.replace("DICKNES", "DI"); 
    newEmail = newEmail.replace("CHARLES", "C"); 
    newEmail = newEmail.replace("BUKOWSKI", "BU"); 
    newEmail = newEmail.replace("DOGAN", "DO"); 
    newEmail = newEmail.replace("MEHMET", "M"); 
    newEmail = newEmail.replace("7", "@");    
    newEmail = newEmail + "hicoders.ch"
    newEmail = newEmail.toLowerCase();
    console.log(newEmail)
}

/* write your code here  */




/* write your code here */

/* Result */


// console.log(`List of mail addresses`);
// console.log(`-------------------------`);
// console.log(emails);
