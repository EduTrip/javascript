function reverseWord(word){
    let arr = []
    // let temp = "";

    for(let i = word.length; i >= 0; i--){
        arr.push(word[i]);
        // temp += word[i];
    }
    return arr.join('');
    // return temp;


}

// function reverseWord(n){
//     return n.split(' ').reverse(' ').join(' ');
// }

console.log(reverseWord("1234"));
