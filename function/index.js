function pertambahan(x,y){
    z = x+y;
    console.log(z);
}

var tes = function(){
    console.log('tes');
}


//disarankan menggunakan const agar function tidak dapat diubah saat runtime
const coba = function () {
    console.log('coba');
}

//function es7
const test = ()=>{
    console.log('kapan saja')
}

let x = 2;
let y = 3;

pertambahan(2,3);
tes();
coba();
test()

