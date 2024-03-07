//Personal Message:Store a person'sname in a variable and print a message to them,like "Hello Asharib, would you like to learn some TypeScript today?"

let personName : string = "Ali";
console.log(`Hello ${personName},would you like to learn some TypeScript today?`);



//Name Cases: Store a person'sname in a variable, and then print that person'sname in lower,upper case,title case.

let Name: string = "Pashmeen";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase());



//Famous Quote: Find a quote from a famous person you admire.Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: "Albert Einstein once said,"A person who never made a mistake never tried anything new.""


console.log('Albert Einstein once said,"A person who never made a mistake never tried anything new."');


//Stripping Names:Store a person's name, and include some whitespace charactersat the beginning and end of the name.Use "\t"(tab) and "\n"(new line) at least once.Print the name once, so the whitespace around the name is displayed then print the name after stripping the white spaces.


let person_Name: string ="\t\n Izhaan \t\n";
let stripping= person_Name.trim()
console.log(person_Name);
console.log(stripping);


//Number Eight: Write Addition, Subtraction, Multiplication and Division operations that each result in the number 8. Enclose your operations in print statements.


let num1 = 5;
let num2 = 3;
console.log(num1 + num2);
let num3 = 10;
let num4 = 2;
console.log(num3 - num4);
let num5 = 4;
let num6 = 2;
console.log(num5 * num6);
let num7 = 16;
let num8 = 2;
console.log(num7 / num8);



//You should create four lines that look like this:console.log(5+3) Youroutput should simply be four lines with the number 8 appearing once on each line



let num9 = 4;
let num0 = 4;
console.log(num9 + num0);
let num11 = 5;
let num12 = 3;
console.log(num11 + num12);
let num13 = 8;
let num14 = 0;
console.log(num13 + num14);
let num15 = 10;
let num16 = 2;
console.log(num15 - num16);



// Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.



let favoriteNumber: number = 5;
console.log(`My favourite number is ${favoriteNumber}.`);