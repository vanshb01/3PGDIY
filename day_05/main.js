/*
Exercise: Level 2
Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13
In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

*/

console.log(countries);
console.log(webTechs);

if (countries.includes("ethiopia")) {
    console.log("ETHIOPIA")
} else {
    countries.push("ethipia");
}

if (webTechs.includes("sass")) {
    console.log("sass is a preprocessor")
} else {
    webTechs.push("sass");
}

countries.forEach(function (country) {
    let p = document.createElement("p");
    p.textContent = country;
    document.querySelector("#countries").appendChild(p);
})

webTechs.forEach(function (webTech) {
    let p = document.createElement("p");
    p.textContent = webTech;
    document.querySelector("#web-technologies").appendChild(p);
})

let middleCountry = document.createElement("p");
middleCountry.textContent = `the middle country is ${countries[countries.length / 2]}`

if (countries.length % 2 === 0) {
    let a = countries.length / 2;
    console.log(countries.slice(0, a));
    console.log(countries.slice(a + 1,countries.length -1))
} else {
    countries.push("korea");
    let b = countries.length / 2;
    console.log(countries.slice(0, b));
    console.log(countries.slice(b + 1, countries.length - 1))
}