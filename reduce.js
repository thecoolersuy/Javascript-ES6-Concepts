// const myArr = [1,2,3]

// const newTotal = myArr.reduce( (acc, curVal) =>{
//   return acc+curVal
// },0)

// console.log(newTotal)

const BaaKaas = [
    {
        item: "Apple",
        quantity : 10,
        price: 100
    },
    {
        item: "Banana",
        quantity : 20,
        price: 100
    },
    {
        item: "Avocado",
        quantity : 30,
        price: 200
    },
]

const BaaKaasTotalPrice = BaaKaas.reduce( (acc,currentVal) =>{ 
    return acc+currentVal.price
},10 )

const BaaKaasTotalQuantity = BaaKaas.reduce( (acc, item) =>{
    return acc+item.quantity
},0)

console.log(`Your total price would be with 10 rs charge ${BaaKaasTotalPrice}`)
console.log(`Your total quantity ${BaaKaasTotalQuantity}`)