// const arr=[10,20,30,40];

// const result = arr.reduce((acc , curr)=>{
//     acc  = acc + curr;
//      return acc;
// },5)

// console.log(result);

// let arr = ["apple" , "orange"  , "banana"  , "mango"  , "orange"];

// const res =  arr.reduce((acc , curr)=>{
//        acc = acc +  curr;
// },0)

// console.log(res)


// let obj = {
//     name :"shubham",
//     age : "20",
//     orange:1,
// }

// let curr = "orange";

// console.log(obj.hasOwnProperty(curr));
// {
//     obj[curr]++;
// }

// console.log(obj);



let arr = ["apple"  , "orange"  , "apple"  , "mango"] ;

const result =  arr.reduce((acc , curr)=>{
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] =1;


      return acc;
} , {})


console.log(result)



