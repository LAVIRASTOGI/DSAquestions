function factorial(facNumber) {
  if (facNumber === 1) {
    return 1;
  }
  return facNumber * factorial(facNumber - 1);
}
console.log(factorial(5));
