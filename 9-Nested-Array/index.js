function nestedArray(){
    let arr = [["tes","saja"],
               [1,2,3,4],
               [
                ["coba","dulu"],
                [5,7,20,1]
               ]];
    console.log(arr[0]);
    // console.log(arr[2]);
    
    console.log(arr[2][0][1]);
}

nestedArray();