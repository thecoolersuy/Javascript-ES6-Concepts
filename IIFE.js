(function databaseConnection(){
    console.log("connected to database successfull")
})(); //To run the function immediately and not pollute it eith the global scope

(
    (name) => {
        console.log(`Welcome ${name} ,Your database is connected successfullly.`)
    }
)("SUYAL");

(
    dbConnect = () =>{
        console.log("DB connected successfully")
    }
)();

dbConnect();

(function createdNodemon(user){
    console.log(`Successfully created a nodemon server, Welcome ${user}`)
})("Suyal"); //IIFE 



