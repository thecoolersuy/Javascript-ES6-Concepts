
//Using Class and constructor

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(password){
//         return `${this.password}abc`
//     }

//     capitalizeUsername(){
//        return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("suyal","oatkrunch@gmail.com" , "12345")

// console.log(userOne.encryptPassword())
// console.log(userOne.capitalizeUsername())


//Using function

function User (username, email,password){
    this.username = username
    this.email = email
    this.password = password
    
    
}

User.prototype.encryptPassword= function(){
    return(`${this.password}abc`)
}
User.prototype.capitalizeUsername = function(){
    return(`${this.username.toUpperCase()}`)
}

const userTwo = new User("suyal", "suyal@google.com", "12345")

console.log(userTwo.encryptPassword())
console.log(userTwo.capitalizeUsername())

