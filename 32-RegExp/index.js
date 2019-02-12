function regularExpression(n){
    let str = 'abcdefghij3klmnopqrstuvwxyz';

    return str.search(n);
    // return str.search(/a/);
}

console.log(regularExpression('a'));