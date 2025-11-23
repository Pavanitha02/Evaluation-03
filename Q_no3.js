// var sumAll=[]
function sumAll(...nums){
var total=0;
for(let n of nums){
    total+=n;
}
return total;
}
console.log(sumAll(1,2,3,4));
