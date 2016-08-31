var fib=[0,1];
var n=1;
var a=Number(prompt('Enter The Fibonacci position number'));
while (n<a){
    fib.push(Number(fib[n]+fib[n-1]));
    Number(n++);
}
console.log(fib);
document.write(fib[a]);