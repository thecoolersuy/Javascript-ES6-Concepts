const description = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(description)

const User = {
    username: "Suyal" ,
    rollno: "12" , 
    class : "37 A"

}

console.log(Object.getOwnPropertyDescriptor(User, "username"))



Object.defineProperty(User,'username' , {
    writable : false,
    enumerable:false,
    configurable : false
} )

console.log(
console.log(Object.getOwnPropertyDescriptor(User, "username")))