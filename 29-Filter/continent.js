function continentFilter(){
    let arr = [
        {name: "Japan", continent: "Asia"},
        {name: "Qatar", continent: "Asia"},
        {name: "Netherland", continent: "Europe"},
        {name: "Palestine", continent: "Asia"},
        {name: "Italy", continent: "Europe"},
    ];

    let result = arr.filter((item) => {
        return item.continent === "Asia";
    })

    console.log(result);
}

continentFilter();