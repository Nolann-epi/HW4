/* Tutorial 4
   Example 6 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 6");

const isPalindrome = (word) => {
    let start = 0;
    let end = word.length - 1;
    let middle = end / 2;
    while (middle >= 0) {
        if (word[start] !== word[end]) {
            return false;
        }
        start++;
        end--;
        middle--;
    }
    return true;
}

const numberOfVowels = (word) => {
    let vowels_num = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    for (let char of word) {
        if (vowels.includes(char)) {
            vowels_num++;
        }
    }
    return vowels_num;
}

const word = prompt("Enter your word !");

if (isPalindrome(word)) {
    console.log(`${word} contains ${numberOfVowels(word)} vowels and is a palindrome`);
}
else {
    console.log(`${word} contains ${numberOfVowels(word)} vowels and is not a palindrome`);
}