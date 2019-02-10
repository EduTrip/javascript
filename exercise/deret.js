function deret(n){
    let temp = '';
    // let arr = [];
    for(let i = 1; i <= n; i++){
        if(i%3 === 0 && i%5 === 0){
            temp += "NIOMIC  ";
            // arr.push('NIOMIC');
        }
        else if(i%3 === 0){
            temp += "NIO ";
            // arr.push("NIO");
        }
        else if(i%5 === 0){
            temp += "MIC ";
            // arr.push("MIC");
        }
        else{
            temp += i + ' ';
            // arr.push(i);
        }
    }
    // return arr.join(' ');
    return temp;
}

console.log(deret(10));
console.log(deret(20));
console.log(deret(30));