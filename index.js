var fib=[Number(prompt('enter first number')),Number(prompt('enter second number'))];
var n=1;
while (n<15){
    fib.push(Number(fib[n]+fib[n-1]));
    Number(n++);
}
document.write(fib);