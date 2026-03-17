class User {
    constructor(username){
      this.username = username
    }

    createAccount(){
        console.log("new accopunt has been created")
    }
}

class Teacher extends User{
    constructor(username,subject,timeTable){
       super(username)
       this.subject =subject
       this.timeTable = timeTable
    }


    changeSubject(){
        console.log(`Subject has been changed ${this.subject}`)
    }
}

const student = new User("Suyal")
const teacher1 = new Teacher("Sumitra" ,"Nepali", "12:30")

console.log(teacher1.changeSubject())
// console.log(student.changeSubject())

console.log(student instanceof User)