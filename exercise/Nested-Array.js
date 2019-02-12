function nestedArrayValues(val){
    let tempArr = []
    for(let i = 0; i < val.length; i++){
        let tempSubArr = [];
        for(let j = 0; j < val.length; j++){
            tempSubArr.push(val[j][i]);
        }

        tempArr.push(tempSubArr);
    }
    return tempArr;

}

var arr = [
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
];

console.log(nestedArrayValues(arr));
