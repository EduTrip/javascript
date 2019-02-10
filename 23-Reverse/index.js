function reverseWord()
{
    let arr = [1,2,3,4,5];
    let join = arr.join(' ');

    let arr2 = arr.reverse();

    let join2 = arr2.join(' ')

    console.log(arr.reverse());
    console.log(join);
    console.log(join2);
}

reverseWord();