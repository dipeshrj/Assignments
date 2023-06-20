const name1 = 'ram thapa'
//Q1) calculate the length of letters in this string excluding spaces
//expected output is 8
// Ans:->

const regex = /\s/g
const len = name1.replace(regex,'').length
console.log("Length: "+len)



// Q2) write a code that gives following as the expected output:
//['r','a','m',' ','t','h','a','p','a']
const arr = name1.split('')
console.log(arr)


// Q3) Write a code that capitalizes name. expected output is 
// 'RAM THAPA'
// Ans:->

console.log(name1.toUpperCase())

//hard problems
const arr1 = [3,3,1,2,6,3]
// Q4) calculate the sum of only odd numbers.expected output is
// 10
// Ans:->
sum=0
for(i=0;i<arr1.length;i++){
if(arr1[i]%2==1){
sum= sum+arr1[i]
}
}
console.log(sum)

// Q5) calculate the sum of unique numbers in arr
// 12 
// Ans:->
// const arr1 = [3,3,1,2,6,3]
sum1=0
for(i=0;i<arr1.length-1;i++){
    for(j=i+1;j<arr1.length;j++){
        if(arr1[i]==arr1[j])
        { break;}
       else if(j=arr1.length) {
            sum1= sum1+arr1[i]
            }
    }
}
console.log(sum1)





// function findSum(arr) {
    
//     let sum = 0;
     
  
//     for (let i=0; i<arr.length; i++) {
//     let j=i+1;
//     while(j<arr.length){
    
//     if(arr[j]==arr[i]){break;}
//     j++;
//     }
    
//     if(j==arr.length){sum+=arr[i];}
//     }
     
//     return sum;
//     }
     
//     let arr = [1, 2, 3, 1, 1, 4, 5, 6];
//     console.log(findSum(arr));