function toCamelCase(arr) {

   return arr.split(/[-_]/).map((el, index) =>  index == 0 ? el : el[0].toUpperCase() + el.slice(1).toLowerCase()).join('')
}

console.log(toCamelCase("the-stealth-warrior"));