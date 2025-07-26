/*
 Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
For example, given:
const nums = [2, 7, 11, 15];
const target = 9;
The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
Requirements:
•	Implement the solution in JavaScript.
•	The solution should have a time complexity better than O(n^2).
•	Include proper error handling for edge cases.

*/ 

// normal approach(brute force)

const sumOfIndices = (arr, target)=> {
  for (let i = 0; i < arr.length; i++) {// this is outer loop which will run once for first element
    for (let j = i + 1; j < arr.length; j++) {// this inner loop will run for each element in outer loop
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
//   console.log('No Valid indices found')
}
console.log(sumOfIndices([2, 7, 11, 15],17))
// time complexity 
// let size of array is n so outer loop will take n iteration and for each element in outer loop the inner loop will runs for n-i times , so time complexity = n*n-i=> n^2-NodeIterator, so we can say its taking n^2 complexity .

/*
What we can do is if we maintain a other dataset(object) and in loop we will find  target - the current element and if not found in that data set then then we will store Key:value(key => number, value=> index) pair of current element, and in case when we find the resultant key exists in our object then we will return the value of that particular key, and current value of i.
*/

const revisedSumOfIndices = (arr,target)=>{
let dataSet = {};// empty object initialization
for(let i = 0; i<arr.length;i++){
    const current = arr[i];
    const result = target-current;
    if(dataSet.hasOwnProperty(result)){
        return[dataSet[result],i]
    }
    dataSet[current] = i // updating object in case the value is not found
    // console.log(dataSet)
}
//  console.log('No valid indices found');
}

console.log(revisedSumOfIndices([2, 7, 11, 15],9))
// this solution is taking only one for loop so it will have time complexity of O(n), and in worst case it has to store n-1 elements, so it will take extra O(n) space also.
