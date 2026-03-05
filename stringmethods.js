// const email = "suyalsahukhala787@gmail.com"
// const fullName = "Suyal"
// const Location = "Bhaktapur"
// const age = 20
// console.log(`the email of the user is ${email} and the age of the user is ${age}`)

// const voterName = new String('Suyal Sahukhal')

// const uppercase = voterName.toUpperCase()
// const ageToString = age.toString()
// console.log(email.length)
// console.log(uppercase)
// console.log( typeof ageToString)

// const newValue = fullName.slice(-5,3)
// console.log(newValue)

// const number = 100

// const numberObject = new Number(200.23)

// const numberMethod = numberObject.toPrecision(4)

// console.log(typeof number)
// console.log(typeof numberObject)
// console.log(numberMethod)

// const min = 10
// const max = 20

// console.log(Math.floor((Math.random()*(max-min +1))+min))

// const bookedDate = new Date("2026-01-10")
// let expiryDate = new Date("2026-08-25")

// let myCurrentTimestamp = Date.now()

// if(myCurrentTimestamp > expiryDate){
//     console.log(`Sorry your appintment is expired`)
// }else{
//     console.log("Welcome")
// }

// console.log(myCurrentTimestamp)
// console.log(bookedDate)

// console.log(expiryDate.toLocaleString('default',
//     {
//         day : "numeric",
//         weekday:"long",
       
//     }
// ))

// const myArr = [0,1,2,3,4]

// console.log(myArr.slice(0,2))
// console.log(myArr)

// // console.log(myArr.splice(0,2))
// console.log(myArr)

// console.log(myArr.indexOf(2))

let myArr = [ 'suyal', 'suman', 'sujal']
let myArr2 = ['sahu', 'sali', 'suji']
let myArr3 = [2,3,4]

let jointArray = [...myArr,...myArr2, ...myArr3]
console.log(jointArray)

console.log(Array.isArray(myArr))