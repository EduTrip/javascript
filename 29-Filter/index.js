// Filter hampir mirip dengan MAP namun memiliki fungsi yang berbeda, 
// yaitu untuk membuat array baru berdasarkan hasil penyaringan nilai dari setiap elemen array yang diberi method tersebut.
function filterNum(){
    let obj = [
        {name: "Michael Jordan", position: "Shooting Guard", Club: "Chicago Bulls"},
        {name: "Magic Johnson", position: "Point Guard", Club: "Los Angeles Lakers"},
        {name: "Jason Kidd", position: "Point Guard", Club: "Brooklyn Nets"},
        {name: "Stephen Curry", position: "Point Guard", Club: "Golden State Warriors"},
        {name: "Reggie Miller", position: "Shooting Guard", Club: "Indiana Pacers"},
        {name: "Dwyane Wade", position: "Shooting Guard", Club: "Chicago Bulls"} 
    ];

    let arrFilter = obj.filter((item) => {
        return item.position === "Shooting Guard" && item.Club === "Chicago Bulls";
    });

    return arrFilter;
}

console.log(filterNum());