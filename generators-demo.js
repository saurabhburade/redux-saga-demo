const axios = require("axios");

function* generatorFn1() {
  yield 1;
  yield 2;
  yield 3;
}
const genFn1Itr = generatorFn1();
console.log(genFn1Itr.next());
console.log(genFn1Itr.next());
console.log(genFn1Itr.next());
console.log(genFn1Itr.next());
