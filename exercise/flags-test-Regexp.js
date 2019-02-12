function testRegex(val){
    let result = /(css)|(html)/i.test(val)
    if(result === true){
        console.log(val);
    }
    else{
        console.log("Belajar");
    }
    
}

testRegex("Belajar html");
testRegex("Belajar javascript");
testRegex("Belajar css");
testRegex("Belajar php");