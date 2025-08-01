/*const obj ={
    firstname:"Micheal Nelson",
    mark:18,
}
class Person{
    constructor(firstname,mark){
        this.firstname= firstname;
        this.mark=mark;
    }
}
let obj2= new Person("sam",89)
console.log(obj2.firstname)
*/
const arr=[5,3,9,6,45,7,18]
//arr.forEach((x)=>{console.log(x)})

//let filteredArr=arr.filter((x)=>x%2==0)
//console.log(filteredArr)
//reduce
//let sum = arr.reduce((acc,val)=>acc+val)
//console.log(sum)

//slice
let copyArr=arr.slice(4,7)
console.log(copyArr)

//splice
arr.splice(2,5)
console.log(arr)