class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email}@gmail.com`
    }

    set email(value){
        this._email =value
    }

    get password(){
        return `${this._password}encryptedndnnsd`
    }

    set password(value){
        this._password = value
    }
}

const userOne = new User("suyalsahukhal", "123")
console.log(userOne.email)
console.log(userOne.password)