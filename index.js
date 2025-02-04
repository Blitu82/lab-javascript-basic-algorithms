// Iteration 1: Names and Input
const hacker1 = 'Luis';
const hacker2 = 'Luis';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, is has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker2.length === hacker1.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1
let finalName = '';
for (let i = 0; i < hacker1.length; i++) {
  finalName += hacker1[i].toUpperCase() + ' ';
}

console.log(finalName);

// 3.2
let reverseName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3
if (hacker2 > hacker1) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}
