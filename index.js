var fib=[0,1];
var n=1;
while (n<15){
    fib.push(Number(fib[n]+fib[n-1]));
    Number(n++);
}
console.log(fib);
document.write(fib[prompt('Enter The Fibonacci position number')]);