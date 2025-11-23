///Array of squares(MAP)
let nums=[10,3,7,20,13,2];
let square=nums.map(num=>num*num);
console.log(square)

/////Prime numbers(Filter)
function isprime(num){
    if(num<2)return false;
    for(let i=0;i<Math.sqrt(num);i++){
        if(num%2==0)return false;
    }
    return true
}

let primes=nums.filter(isprime)
console.log(primes);

/////sum of elements(reduce)
let sum=nums.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

/////descending order(sort)
res=nums.sort((a,b)=>b-a)
console.log(res)
