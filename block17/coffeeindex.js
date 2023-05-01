const coffeeMenu = require ("./coffee_data.js")

//print array of all drinks on menu
const allDrinks = coffeeMenu.map((item) => item.name)
console.log(allDrinks)

//print array of drinks under $5
const underFive = coffeeMenu.filter((item) => item.price <=5)
console.log(underFive)
    

// print array of drinks that are priced at an even number
const evenPrice = coffeeMenu.filter((item) => item.price / 2 === 0)
    console.log(evenPrice)
    // if(coffeeMenu.price / 2 === 0){
        
    // }else {
    //     console.log("0") 
    // }
    

   

    
//print total if ordering every drink
// const drinksTotal = coffeeMenu.price / 9

// const totalCost = coffeeMenu.reduce((item) => (drinksTotal)) 
// console.log(drinksTotal)


//print an array with all seasonal drinks
const seasonalDrinks = coffeeMenu.filter((item) => item.seasonal) 
console.log(seasonalDrinks)

// print seasonal drinks with the word "with imported bean