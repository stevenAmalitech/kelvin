//assiging 0 to the variable kelvin
const kelvin = 0;
//getting the celsius value from kelvin
let celsius = kelvin - 273;
//calculating fahrenheit value
let fahrenheit = celsius * (9 / 5) + 32;
//getting the lowest integer from the fahrenheit value
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
