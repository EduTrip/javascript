function testDeret(n){
    // let arr = []
    let temp = '';
    for(let i = 1; i <= n;i++){
        if(i % 3 === 0 ){
            // arr.push('NIO');
            temp += 'NIO ';
        }
        else if(i % 5 === 0){
            // arr.push('MIC');
            temp += 'MIC ';
        }
        else{
            // arr.push(i);
            temp += i+ ' ';
        }

    }

    // return arr.join(' ');
    return temp;
}

console.log(testDeret(10));
// console.log(deret(20));
// console.log(deret(30));