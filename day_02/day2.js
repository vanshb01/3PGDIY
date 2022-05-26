// vansh bansal 


/*
Exercise: Level 1
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method

Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method

'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times
*/


let challenge="30 Days Of JavaScript"; //1
console.log(challenge);//2
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,1));
console.log(challenge.slice(3));
console.log(challenge.substring(30,23));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
let fb="Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";
console.log(fb.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let str = "You cannot end a sentence with because because because is a conjunction";
console.log(str.indexOf("because"))
console.log(str.search("because"));
console.log(str.trim());
console.log(str.startsWith("3"));
console.log(str.endsWith("t"));
console.log(str.match("a"));
console.log(str.match("a"));

console.log(challenge.match("a"));
let str1="30 Days Of";
let str2="JavaScript";
console.log(str1.concat(str2));
console.log(challenge.repeat(2));


/*
Exercise: Level 2
Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

I hope this course is not full of jargon. Check if jargon is in the sentence.

Generate a random number between 0 and 100 inclusively.

Generate a random number between 50 and 100 inclusively.

Generate a random number between 0 and 255 inclusively.

Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/
console.log("There is no exercise better for the heart than reaching down and lifting people up.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
console.log(Math.floor((Math.random() * 100) + 0));
console.log(Math.floor((Math.random() * 51) + 50));
console.log(Math.floor((Math.random() * 256) + 0));
let strr="You cannot end a sentence with because because because is a conjunction";
console.log(strr.substring(31,54));
let sentencee="I hope this course is not full of jargon.";
console.log(sentencee.match("jargon"));










/*
Exercises: Level 3
'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/


let words = "Love is the best thing in this world.Some found their love and some are still looking for their love";
console.log(words.search("love"));
let words2 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let salaries = words2.match(/\d+/g);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
console.log(sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));

let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome
)
