const linkedlist = require("./linkedlist")

let list = new linkedlist

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); //( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
console.log(list.size()); // 6
console.log(list.gethead())
/*
node {
  value: 'dog',
  nextNode: node {
    value: 'cat',
    nextNode: node { value: 'parrot', nextNode: [node] }
  }
}*/
console.log(list.tail()); //node { value: 'turtle', nextNode: null }
console.log(list.at(3)); 
/*node {
    value: 'hamster',
    nextNode: node {
      value: 'snake',
      nextNode: node { value: 'turtle', nextNode: null }
    }
  } */
list.pop()
console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null
console.log(list.contains("cat")) // true
console.log(list.find("hamster")) // 3