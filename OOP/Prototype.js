//Prototype Concepts
//Prototype finds the elements eventho it has to go to parent or even grandparent, and the 
// parent and grandparent of ArrayBuffer, string , is Object then it is null
//Array,function,Objects,String  ->  Objects -->null  

const astring = "Suyal"
const voterList = ["suman", "balaju", "sujan"]
const User= {
    name: "Suyal", 
    age: "12",
    district: "bhaktapur"
}
Array.prototype.canVote = function(){
    console.log("The user can vote")
}
Object.prototype.canVote = function(){
    console.log("The user can vote")
}


// console.log(User.canVote())
console.log(astring.canVote())
// console.log(voterList.canVote())

