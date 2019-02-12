function notRegex(val){
    // return val.match(/\S/g);
    // return val.match(/\W/g);
    return val.match(/\D+\S/g);
}

console.log(notRegex("halo tes 1 2 3 "));