//spread means expanding array, objects anything so we can combine in later

const myArr = [0,1,2,3]
const otherArr = [4,5,6]

const joined = ["infinity",...myArr , ...otherArr]
console.log(joined)

const myObj = { name: "suyal", age: "12"}
const otherObj = {age :"20"}

const objJoined = {...myObj , ...otherObj}
console.log(objJoined)