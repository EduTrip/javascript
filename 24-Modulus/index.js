// Operator Modulus adalah sebuah operasi yang menghasilkan sisa pembagian dari suatu bilangan (terhadap bilangan pembaginya).
// Di javascript, modulus dilambangkan dengan simbol persen (%)

function modulusNum()
{
    let a = 7%5;

    if(a === 0)
    {
        return 'habis';
    }
    else{
        return 'sisa '+ a;
    }
}

console.log(modulusNum());