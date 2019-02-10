    function splitWords(){
        let word = "Stop wasting your time";

        let number = 12345;

        let result  = word.split(" ");
        let resNumber = number.toString().split("");
        let digits = resNumber.map(Number);

        console.log(result);
        console.log("===========================");
        console.log(digits);
    }

    splitWords();