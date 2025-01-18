function outerFunction() {
  let outerVar = 'i am outside';
  function innerFunction() {
    console.log(outerVar);
  }
  innerFunction();
}
outerFunction();
