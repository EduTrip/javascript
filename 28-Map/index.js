function mapValue(){
    let arr = ['hanya','sebuah','array'];
    let arr2 = arr.map((data, index ) => {
        // console.log(index); 
        // console.log("value = "+data);
        // console.log('=================')
        // console.log('words = '+arr);
        return 'words = '+ data;
    });

    console.log(arr2);
}
mapValue();
