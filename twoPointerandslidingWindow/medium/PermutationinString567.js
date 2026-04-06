// this is brute force as for long string like this one so permuation are  nfactorial n!
// here it will exceed time limit so necxt soln

// var checkInclusion = function (s1, s2) {
//   let permuattionStringObj = permutaionString(s1);
//   for (let i = 0; i <= s2.length - s1.length; i++) {
//     let strVal = s2.slice(i, s1.length + i);
//     if (permuattionStringObj[strVal]) {
//       return true;
//     }
//   }

//   return false;
// };

// function permutaionString(s1) {
//   let newMap = {};

//   function extractString(str, remainingStr) {
//     if (remainingStr.length === 0) {
//       newMap[str] = 1;
//       return;
//     }

//     for (let i = 0; i < remainingStr.length; i++) {
//       let str1 = str + remainingStr[i];
//       let str2 = remainingStr.slice(0, i) + remainingStr.slice(i + 1);
//       extractString(str1, str2);
//     }
//   }

//   extractString("", s1);
//   return newMap;
// }

// console.log(checkInclusion("dinitrophenylhydrazine", "acetylphenylhydrazine"));

// intead do with help of 2 arrays make one array for s1 
// one for s2 add the ascii character and check

var checkInclusion = function (s1, s2) {
  let hashP = new Array(26).fill(0);
  let hashw = new Array(26).fill(0);
  let lengthPermutation = s1.length;

  for (let i = 0; i < lengthPermutation; i++) {
    ++hashP[s1.charCodeAt(i) - 97];
    ++hashw[s2.charCodeAt(i) - 97];
  }

  let i = 0;
  let j = lengthPermutation - 1;

  while (j < s2.length) {
    if (isHashSame(hashP, hashw)) {
      return true;
    } else {
      --hashw[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashw[s2.charCodeAt(j) - 97];
    }
  }

  return false;
};

function isHashSame(hashP, hashw) {
  for (let i = 0; i <= 26; i++) {
    if (hashP[i] !== hashw[i]) {
      return false;
    }
  }

  return true;
}

checkInclusion("ab", "eidbaooo");
