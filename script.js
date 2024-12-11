let obj = {
    name  : "shubham" ,
    age : "18"  ,
    job:  "driver",
    gender : "male"
}

// for in loop in wajhe se loop pe iterate kar sakta hu
// for(let key in obj)
// {
//       console.log(key , obj[key]);
// }

// console.log(Object.keys(obj));

let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id="shubham";
console.log(obj2);


