function nestedArrayValues(val){
    for(let i = 0;i < val.length; i++){
        console.log('Nama: ',val[i][0]);
        console.log('Position: ',val[i][1]);
        // console.log('\n');
    } 
}

var arr = [
    ["Michael Jordan","Shooting Guard"],
    ["Kobe Bryant","Shooting Guard"],
    ["Dwyane wade","Shooting Guard"]
];

nestedArrayValues(arr);

