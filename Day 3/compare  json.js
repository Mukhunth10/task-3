var obj1 ={name: "person", age: 5};
//var obj2 ={age: 5, name: "person 1"};
var obj2 ={age: 5, name: "person"};

//var obj2 ={age: 5, name: "person 1"};
let a = JSON.stringify(obj1);
let b = JSON.stringify(obj2);
console.log(a === b);