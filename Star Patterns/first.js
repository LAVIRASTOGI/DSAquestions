//  * * * *
//  * * * *
//  * * * *
//  * * * *

for (let i = 0; i <= 3; i++) {
  let str = "";
  for (let j = 0; j <= 3; j++) {
    // same line
    str += "*";
  }
  // new line
  console.log(str);
}

// *
// * *
// * * *
// * * * *

for (let i = 0; i <= 3; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += "*";
  }
  console.log(row);
}
// 12345
// 1234
// 123
// 12
// 1

for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

//    *
//   **
//  ***
// ****
// *****

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 5; j > i + 1; j--) {
    row = row + " ";
  }
  for (let k = 0; k <= i; k++) {
    row = row + "*";
  }

  console.log(row);
}

// 1
// 10
// 101
// 1010
// 10101

for (let i = 0; i < 5; i++) {
  let row = "";
  let c1 = 1;
  for (let j = 0; j <= i; j++) {
    row = row + c1;
    c1 = c1 === 1 ? 0 : 1;
  }

  console.log(row);
}
