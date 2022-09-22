/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 2");

const converter = (value) => {
    return Math.trunc(((value - 32) * 5/9));
}

const Farenheit = prompt("Enter your Fahrenheit value")

if (!isNaN(Farenheit)) {

    console.log(`${Farenheit}°F is equal to ${converter(Farenheit)}°C`);

    if (converter(Farenheit) > 20) {
        console.log(`${Farenheit}°F ? Converted is ${converter(Farenheit)}°C..That's hot !`)
    }
    else {
        console.log(`${Farenheit}°F ? Converted is ${converter(Farenheit)}°C..That's not really hot !`)
    }


    if (converter(Farenheit) < 10) {
        console.log(`${Farenheit}°F ? It's atleast  ${converter(Farenheit)}°C..That's cold !`)
    }
    else {
        console.log(`${Farenheit}°F ? It's atleast  ${converter(Farenheit)}°C..That's not really cold !`)
    }
}
else {
    console.log("You should enter a numerical value..")
}