
// for (let i = 2 ; i < process.argv.length ; i++) {
//     var  sum = Number(0) ;
//   sum += process.argv[i];
// console.log(sum) 
// }



let sum = 0 ;
for (let i = 2 ; i < process.argv.length ; i++) {
   
    sum += Number(process.argv[i]);

}
console.log(sum) 


