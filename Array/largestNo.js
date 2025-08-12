// find the largest number in the array
// question 1

// EXPLAIN APPROACH
// 1. we have to find the largest number in the array
// 2. we have to iterate through the array and compare the elements with the largest
// 3. if the element is greater than the largest, then we have to update the largest to the element
// 4. finally, we have to return the largest number

let arr=[4,9,0,2,8,7,1];
function largestNo(arr){
    // -Infinity is the smallest number in javascript
    let largest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}
console.log(largestNo(arr));
