var msg = 2;
let msg2 = 3;

if(true){
    //var merupakan variabel global
    var msg = 'd';

    //let merupakan variable dalam satu scope
    let msg2 = 'f';

    console.log(msg+''+msg2);

    // msg = 10212;
    // msg2 = 1234
}

console.log(msg+' '+msg2);