function evenNum(){
    let arr = [];
    for(let i=0;i <= 30;i++){
        if(i%2 === 0 ){
            arr.push('angka = '+i);
            // console.log('angka ' + [i])
        }
    }
    return arr.join(' ');
}
console.log(evenNum());

// function testFor(){
//     let arr =['hanya','sebuah','array'];
//     let arr2 = []
//     for(let i = 0;i < arr.length; i++){
//         arr2.push('words '+ [i])
//     }
//     console.log(arr2);
// }

// testFor();