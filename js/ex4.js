/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 4");

const sum = (list) => {
    let result = 0
    for (let i = 0; i < list.length; i++) {
        result += list[i];
    }
    return result;
}

const min = (list) => {
    let result = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < result) {
            result = list[i]
        }
    }
    return result;
}

const max = (list) => {
    let result = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] > result) {
            result = list[i]
        }
    }
    return result;
}


const values = [3, 11, 7, 2, 9, 10];

console.log(`The arrays is ${values}`);
console.log(`The sum of everything in the array is : ${sum(values)}`);
console.log(`The minimal value in the array is : ${min(values)}`);
console.log(`The maximum value in the array is : ${max(values)}`);