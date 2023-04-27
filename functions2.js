const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};
const sarah = {
    prescription: "diphenhydramine",
     pricePerRefill: 50,
     refills: 1,
    subscription: true,
    coupon: false,
   }
   const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


const couponValue = 10;
const subscriptionValue = 0.25;
const sumOfRefill = (pricePerRefill, refills, coupon) =>{
    if (coupon || subscriptionValue) {
        return pricePerRefill * refills - couponValue;
    }else {
       return pricePerRefill * refills
    }
    
}

console.log("your grand total is ",sumOfRefill(timmy.pricePerRefill, timmy.refills, timmy.coupon))



console.log("your grand total is ",sumOfRefill(sarah.pricePerRefill, sarah.refills, sarah.coupon))

console.log("your grand total is ",sumOfRefill(rocky.pricePerRefill, rocky.refills, rocky.coupon))


