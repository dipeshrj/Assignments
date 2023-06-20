
// const obj = {
//   userDetails: {
//     "name": 'kaylin'
//   },
//   "location Details": "balaju, kathamndu"
// }
// console.log(obj.userDetails.name," ",obj["location Details"])

// const countobj ={
//   'count' : 10
// }
// countobj['count'] = countobj['count']+1;

// console.log(countobj)


// const details = [
//   {
//   name: "gopal",
//     userDetails: {
//       "name": 'kaylin'
//     }
//   }
// ]
// console.log(details[0].userDetails["name"])

// const array = [[2,4],[6,8]]
// console.log(array[0][0]+array[1][1])

// const array = [1,2,3]
// let sum=0;
// // for(i=0;i<array.length;i++)
// // {
// //   sum = sum + array[i]
// // }
// console.log(array.forEach(item=> sum=sum+item))
// console.log(sum)


// const arr=[3,5,7];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%5 ==0){
//         arr[i]=arr[i]+5
//     }
// }
// console.log(arr)

// const arr1=arr.map(item=>{
//     if(item%5===0)
//      item=item+5;
//      return item
    
// })
// console.log(arr1)



// const harr=[1,2,3,4]
// const harr2=harr.slice(0,harr.length)
// harr2.push(15)
// console.log(harr)
// console.log(harr2)

// cloning an array
// const harr3=[...harr]
// harr3.push(100)
// console.log(harr3)

// const obj1={
//     name:'Tom',
//     roll: 2,
//     age: 19
// }

// // cloning an object
// const obj2={...obj1}
// obj2.address= 'btm'
// console.log(obj2)

// // cloning an object
// const obj3=JSON.parse(JSON.stringify(obj1))
// console.log(obj3)
// console.log(obj1)

// // destructuring an object

// // delete obj2.roll
// const {roll,age,...allOthers}=obj2
// console.log(allOthers)


// let sum=0
// for(i=1;i<=31;i++){
//     sum=sum+i
// }
// console.log(sum)

// Calculate sum of numbers in an array which is divisible by 5

const arr=[3,5,6,7,8,10]
let sum=0
const barr=arr.map(item=>{
    if(item % 5 === 0){
        return item
    }
     else{return "hello"}
})
console.log(barr)

