// let obj = {};

// obj.name = "shubham";
// obj.age =  20;
// // key value enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj , 'name'));
// // writable = false , value ko chnage nahi kar sakte

let obj = {};
Object.defineProperty(obj , "name" , {
      value : "rohit",
      writable : true,
      enumerable:true,
      configurable:true,
})

Object.defineProperty(obj , "name"  ,{
     writable: false,
})

obj.name =  "shubham"

console.log(obj);