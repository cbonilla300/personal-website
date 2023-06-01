//created my object with my keys,values
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "target",
    firstVisit: false 
}

//modified email value
customer.email = ["Jak3Smith1992@email.com"]
console.log(customer.email)

//modified phone value
customer.phone = [3195551234]
console.log(customer.phone)

//modified zipCode
customer.zipCode = ["63132"]
console.log((customer.zipCode))

//modified favoriteFlavor
customer.favoriteFlavors = ["coffe", "strawberry", "matcha"]
console.log(customer.favoriteFlavors)

console.log(customer)

//deleted zipCode
delete customer["zipCode"]
console.log(customer)

//deleted favoriteStore
delete customer["favoriteStore"]
console.log(customer)

//added topping keys and its values
customer.topping = ["chocolate sprinkles", "wafer straws", "gummy bears"]
console.log(customer)

//added futureFlavors and mango value
customer.futureFlavors = ["mango"]
console.log(customer)

//added todaysPurchaseCost key and its value
customer.todaysPurchaseCost = 5.32
console.log(customer)


//printed keys in an array
for (const property in customer)
console.log(property)