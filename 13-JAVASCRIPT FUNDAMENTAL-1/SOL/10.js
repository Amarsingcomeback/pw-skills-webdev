let arr = [1,2,-3,5,-9,-8,-7,7]
let arrsort = arr.sort();
// console.log(arrsort);
for(let i = 0; i<arrsort.length; i++){
   if(arrsort[i] > 0){
    console.log(arrsort[i]);
   }
}