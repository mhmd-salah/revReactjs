
function outerFunction() {
  let outerVar = "i am outside";
  function innerFunction(){
    let innerVar = "i am inside";
    console.log(outerVar)
  }
  innerFunction()
}
outerFunction()
