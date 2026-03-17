function setUsername(username){
    this.username = username;
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}


const userOne = new createUser("suyal" ,"suyal@gmail.com" , "12345")
console.log(userOne)