function oddNum(){
    let arr = [];
    
    for(let i = 1;i <=50;i++){
        if(i%5 === 0) {
            arr.push(i);
        }
    }

    return arr.join(' ');
}

console.log(oddNum());

let i = 12/5;
console.log(i);