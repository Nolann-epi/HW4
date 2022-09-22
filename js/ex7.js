/* Tutorial 4
   Example 2 JavaScript code
*/

console.log("Nolann Holvoet's Output from Tutorial 4 Example 2");

const random_num = Math.floor(Math.random() * 101);
let guess = -1;
let attempts = 0;

while (guess != random_num) {
    guess = prompt("Try to guess the number");
    attempts++;
    if (guess < random_num) {
        console.log(`${guess} is too low ! Guess again !`);
    }
    else if (guess > random_num) {
        console.log(`${guess} is too high ! Guess again !`);
    }
    else {
        console.log(`${guess} is correct!  It took you ${attempts} attempts to guess the correct number.`);
    }
}