function regex(val){
    // return val.match(/\w/g)
    // return val.match(/\d/g);
    return val.match(/\w+\s/g);
}

console.log(regex("2 Balon 4 pisang"));