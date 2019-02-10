function arrConcat(){
    let food = ["Burger","Pie"];

    let drink = ["Tea","Coffee"];

    let fruit = ["Pear","Strawberry"];

    let foodAndDrink = food.concat(drink);

    let menu = foodAndDrink.concat(fruit);

    return menu;
}


console.log(arrConcat());