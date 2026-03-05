/* 
How does javascript executes

First of all global execution context is made where this points to the global object ,
 this for browser is windows and this for node is node

 then two phases happen:
 1. Memory Creation Phase:

 Suppose we have:
 const val1 =1;
 const val2 =2;
 function addNum(num1,num2){
     return val1 + val2
 }

 const result1 = addNum(2,4)
 const result2 = addNum(val1,val2)

 first memory is created for alll the variables: 
 val1 = undefined
 val2 = undefined
 addNum = functiondefinition
 result1 = undefined
 result2 = undefined

 2. Execution Phase

 the variables will be filled with the values and the 
 operations are executed 
 if there is afunction a new execution context is made and same two phase is followed:
1. Memory Creation Phase
2. Execution Phase

then in result 1 and result 2 has the value of the function (note that after one function is completed
it deletes it as well))
*/
