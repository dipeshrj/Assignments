//ASSIGNMENT 1
// Q no.1 From the given array 
// const myMeals = ['carrot', 'pumpkin', 'cabbage'] 
// write a code that gives the following output.
//[ 'carrot', 'cabbage']
//Ans:->

// const myMeals= [ 'carrot', 'pumpkin', 'cabbage']
// myMeals.splice(1,1)
// console.log(myMeals)


//Q no.2 We have an object :  
// const footballTeam ={
// name : 'arsenal', 
// players: ['ozil', 'rvp']
// } 
// Write a code that gives the following output
// 'rvp'
//Ans:->

// const footballTeam ={
//     name : 'arsenal', 
//     players: ['ozil', 'rvp']
//     }
// console.log(footballTeam.players[1])

// Q Node. 3 We have an object as:
// const titleCount = {
//     1998: [4,5,6],
//     1976: [6,6,7]
// }
// Write a code that adds the first index value of 1998 to last index value of 1976
//Ans:->
// const titleCount = {
//     1998: [4,5,6],
//     1976: [6,6,7]
// }
// console.log(titleCount[1998][0]+titleCount[1976][2])






// Q4 What is the output?

// function outer(){
//     function inner(){
//         return [3,5,6]
//     }
//     return inner()[0]
// }
// console.log(outer())


// Q5 We have an object and a string as folows:

// const userDetails = {
//     name: 'hari'
// }
// const greetings= 'hello'

// Write a code that gives output:
// {
//     name: 'hello hari'
// }

// const userDetails = {
//     name: 'hari'
// }
// const greetings= 'hello'
// userDetails.name = greetings +" "+ userDetails.name
// console.log(userDetails)