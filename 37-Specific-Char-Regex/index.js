function specificChar(val, x){
    return val.match(x);
}

console.log(specificChar("Good Kid Good kid Maad City",/good/gi));
console.log(specificChar("Good Kid Good kid Maad City",/[go]/gi));
console.log(specificChar("Good Kid Good kid Maad City",/[^go]/gi));
console.log(specificChar("Good Kid Good kid Maad City",/[a-d]/gi));
console.log(specificChar("Good Kid Good kid Maad City",/\W*(kid)\W*/gi));