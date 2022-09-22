/* Tutorial 4
   Example 5 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 5");

let words = []

let word = ""

while (word !== "stop") {
    word = prompt("Enter your word ! (If you put \"stop\" it ends..)");
    if (word !== "stop") {
        words.push(word);
    }
}

if (words.length !== 0) { 
    console.log("You entered the following words:");
    words.forEach(word => {
        console.log(`${word}`);
    });
}
else {
    console.log("No words to display, Stop was the first word entered..");
}