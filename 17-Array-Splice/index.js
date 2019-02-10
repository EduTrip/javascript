function arrSplice(){
    let arr = [1,2,3,4,5]

    let arr2 = arr.splice(1,3);//menghapus index ke 1 - 3
    console.log(arr2);

    // arr.splice(2,0,'boo');

    arr.splice(1,2,6,7,10);//mengganti index 1 dan setelahnya menjadi 6,7,10


    arr.splice(3,2);

    return arr;
}
console.log(arrSplice());