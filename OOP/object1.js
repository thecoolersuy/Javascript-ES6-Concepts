const User = {
    username: "Suyal",
    email:"suyalsahukhala787@gmail.com",
    password: "123456",

    displayUserInformation : function(){
          console.log(this.username)
    }
}

console.log(User.email)
console.log(User.displayUserInformation())


function Business(username, email, password){
    this.username = username;
    this.email = email;
    this.password  =password;
      
    return this
}


const userOne = new Business("suyal", "suyal@gmail.com" , "123")
const userTwo = new Business("sahnil", "suydcsd@gmail.com" , "5443")

console.log(userOne)
console.log(userTwo)



