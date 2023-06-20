// we have an array as follows
const userArr = [
['ram',3],
['shyam', 4],
['hari',1]
]
//Q5) calculate the length of this array. expected output is 
//3
// Ans:->

console.log(userArr.length)


// Q6) write a code that gives following as the expected output:
//ramshyamhari
// Ans:->

console.log(userArr[0][0]+userArr[1][0]+userArr[2][0])


// Q7) Calculate total sum of 3, 4 and 1 using loop, output should be
//8
// Ans:->
let sum=0
for(i=0;i<userArr.length;i++){
sum = sum + userArr[i][1]
}
console.log("Total:" + sum)


// Q8)calulate all the sum of odd numbers 

let sum1=0
for(i=0;i<userArr.length;i++){
    if((userArr[i][1] % 2)==1){
        sum1 = sum1 + userArr[i][1]
    }
}
console.log("Sum:" + sum1)

//hard difficultly level
// convert the above array into object.expected output
//{
//{'ram',3},
//{'shyam', 4},
//{'hari',1}
//}
// Ans:->
 
 const obj= Object.assign({},userArr)
 for(i=0;i<userArr.length;i++){
obj[i]= Object.assign({},userArr[i])
  }
console.log(obj)


//09) add 10 to exisiting userArr in first indexes, expected output is 
 //[
//['ram',13],
//['shyam', 14]
//['hari',10]
//]
//Ans:->

for(i=0;i<userArr.length;i++){
    userArr[i][1]=userArr[i][1]+10;
}
console.log(userArr)


//find a problem in below code, and rewrite fixed solutions
let a = 10
function test(){
  return a = a+100
}
console.log(test())
 