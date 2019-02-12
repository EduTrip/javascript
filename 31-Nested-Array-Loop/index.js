function nestedArrayValues(val){
    let arr = []
    for(let i = 0; i < val.length; i++){
        //index of arr[]
        let arr2 = [];
        for(let j = 0; j < val.length; j++){
            //sub-index of arr [[]]
            arr2.push(val[j][i]);
        }

        arr.push(arr2);
    }
    return arr;

}

var arr = [
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
];

console.log(nestedArrayValues(arr));
