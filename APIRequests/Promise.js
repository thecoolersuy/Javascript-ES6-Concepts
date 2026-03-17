// const promise1 = new Promise( function(resolve, reject){
//     //do a async task like calling database, cryptography

//     setTimeout( function(){
//         console.log("Async task is complete")
//         resolve()
//     }, 1000)
    
// }
// )

// promise1.then(function(){
//     console.log("Promised Fullfilled")
// })




// const promiseOne = new Promise( (resolve, reject) =>{
//      setTimeout( function(){
//         console.log("Async function done")
//         resolve()
//      }, 2000 )
// } )

// promiseOne.then( function(){
//     console.log("Promise fulfilled")
// }
// )


// const promiseTwo = new Promise( function(resolve,reject) {
//     setTimeout( function(){
//         resolve({user:"suyal", email:"suyal@gmail.com"})
//     })
// } )

// promiseTwo.then( function(item){
//     console.log(item)
// }

// )


// const promisefive = new Promise( (resolve, reject) =>{
//      setTimeout( ()=>{
//         let error = false;
//         if(error == false){
//             resolve({username: "suyal" , age:"12"})
//         }else{
//             reject("Error:  Something went wrong")
//         }
//      }, 2000 )
// })

// promisefive.then( 
//     function(user){
//       console.log(user)
//       return(user.username)
//     }
// ).then(
//     function(username){
//         console.log(username)
//     }
// ).catch(
//     function(error){
//        console.log(error)
//     }
// )

// const promisesix = new Promise( function(resolve,reject){
//     setTimeout( function(){
//         let error =true;
//         if(error == false){
//             resolve({username:"suyal" , age :"12"})
//         }else{
//             reject("Error: something went wrong")
//         }
       
//     },1000 )
// } )

// async function sayName(){
//     try{
//       const response = await promisesix
//       console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }

// sayName()

async function addAllUsers(){
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const process = await response.json()
      console.log(process)
    }catch(error){
        console.log(error)
    }
}

addAllUsers()

//using then catch method

// fetch("https://jsonplaceholder.typicode.com/users")
// .then( function(response){
//     return response.json()
// })
// .then( function(res){
//     console.log(res)
// })
// .catch( function(error){
//     console.log(error)
// } )
