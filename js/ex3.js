/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 3");

const r = Number(prompt("Enter the circle radius:"));

let circle = {
    radius: r,
    circumference() {
        return (this.radius * 2 * Math.PI).toFixed(2)
    },
    area() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    }
}



console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);