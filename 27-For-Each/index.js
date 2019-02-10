function forEachLoop(){
    let k = ['hanya','sebuah','array'];
    k.forEach((data, index) => {
        console.log(data);
        console.log(index);
    });

    console.log('Jumlah Data = '+ k.length)
}

forEachLoop();