// const strStr = function (haystack, needle) {
//   let haystackIndex = 0;

//   while (haystackIndex < haystack.length) {
//     let str = haystack.slice(haystackIndex, haystackIndex + needle.length);
//     if (str === needle) {
//       return haystackIndex;
//     } else {
//       haystackIndex++;
//     }
//   }
//   return -1;

// };

// console.log(strStr("mississippi", "issip"));

// console.log(strStr("leetcode", "leet"));

// function customSort(arr) {
//   let numberArr = arr.filter((ele) => /\d/.test(ele));
//   let letterArr = arr.filter((ele) => /[a-zA-z]/.test(ele));

//   //write your implementation here
//   let arr = [...letterArr.sort(), numberArr.sort((a, b) => a - b)];
//   return arr;
// }

// const input = ["g", "s", 5, 2, "c", "e", 6, 16, "A"];
// customSort(input);

// function countVowels(str) {
//   let a = str.split("").filter((ele) => /[a,e,i,o,u]/.test(ele));
//   return a.length;
// }

// //For the purpose of user debugging.
// countVowels("JavaScript");

// function generateFibonacci(n) {
//   let arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   console.log(arr);
//   return arr;
// }

// generateFibonacci(5);

// function sum(...args) {
//   // Your implementation
//   let arr = [...args];
//   let a1 = arr.reduce((acc, curr) => Number(acc + curr), 0);
//   return arr;
// }

// sum();

// Array.prototype.myReduce = function (callback, initialValue) {
//   // Your implementation
//   // let curr;
//   let arr = this;
//   let acc;
//   let starIndex;

//   if (initialValue !== undefined) {
//     acc = initialValue;
//     starIndex = 0;
//   } else {
//     acc = arr[0];
//     starIndex = 1;
//   }

//   for (let i = starIndex; i < arr.length; i++) {
//     acc = callback(acc, arr[i], i, arr);
//   }

//   return acc;
// };

// Array.prototype.myForEach = function (callback) {
//   let arr = this;
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// };

// Array.prototype.myForEach = function (callback) {
//   let arr = this;
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// };

// let arr = [1, 2];
// arr.myForEach((ele, index, arr) => {
//   console.log(ele);
// });

// Array.prototype.myMap = function (callback) {
//   let arr = this;
//   let a1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     a1[i] = callback(arr[i], i, arr);
//   }
//   return a1;
// };

// let arr1 = [1, 2];
// console.log(arr.myMap((ele) => ele + 1));

// function sum(a, b, c) {
//   return a + b + c;
// }
// function curry(fn) {
//   return function curried(...args) {
//     if (fn.length == args.length) {
//       return fn(...args);
//     } else {
//       return function (...nextArgs) {
//         return curried(...nextArgs, ...args);
//       };
//     }
//   };
// }

// //For the purpose of user debugging.
// //pass appropriate input in below function call
// const f1 = curry(sum);
// console.log(f1(1, 2)(3));
// console.log(f1(1)(4)(3));

// function reverse(str) {
//   let newStr = str.split("");
//   let l = 0;
//   let r = newStr.length - 1;
//   while (l <= r) {
//     let temp = newStr[l];
//     newStr[l] = newStr[r];
//     newStr[r] = temp;
//     l++;
//     r--;
//   }

//   return newStr.join("");
// }
// function reverseWords(sentence) {
//   // Your implementation
//   let arr = sentence.split(" ");
//   let newStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     newStr = newStr ? newStr + " " + reverse(arr[i]) : reverse(arr[i]);
//   }
//   return newStr;
// }

// function reverseWords(sentence) {
//   // Your implementation
//   // Your implementation

//   // preserve space
//   let arr = sentence.split(/(\s+)/);
//   let newStr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       newStr[i] = arr[i].split("").reverse().join("");
//     }
//   }
//   console.log(newStr);
//   return newStr.join("");
// }

// function xy(arr, k) {
//   let i = 1;
//   while (i <= k) {
//     let val = arr.pop();
//     arr.unshift(val);
//     i++;
//   }
//   console.log(arr);
// }

// xy([1, 2, 3, 4, 5], 2);

let arr = [
  { id: 1, val: 20 },
  { id: 2, val: 25 },
  { id: 3, val: 2 },
  { id: 1, val: 4 },
  { id: 2, val: 6 },
];

function op(arr) {
  let newObj = arr.reduce((acc, curr) => {
    if (!acc[curr.id]) {
      return {
        ...acc,
        [curr.id]: {
          id: curr.id,
          val: curr.val,
        },
      };
    } else {
      return {
        ...acc,
        [curr.id]: {
          id: curr.id,
          val: acc[curr.id].val + curr.val,
        },
      };
    }
  }, {});

  console.log(Object.values(newObj));
}

op(arr);


