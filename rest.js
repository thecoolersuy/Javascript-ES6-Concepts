//rest means collecting the spreaded pieces

function addNum(...numbers){
    return  numbers.reduce( (a,b) =>{
          return a+b;
    },0)
}

const result = addNum(1,2,3,4,5)


console.log(result)