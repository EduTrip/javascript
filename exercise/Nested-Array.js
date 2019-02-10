function nestedArray(val){
    for(let i = 0;i < val.length; i++){
        console.log(val[i][i]);
    }
}

var arr = [ 
    [1,2,3,4],
    ['a','b','c','d'],
    ['!','$','@','%']
]

nestedArray(arr);

