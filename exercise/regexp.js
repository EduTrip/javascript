function panggilRegexp(value) {
    let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
 
    let result = str.match(value);

    console.log(result);
}
   
panggilRegexp(/c/ig);
panggilRegexp(/k/ig);
panggilRegexp(/l/ig);