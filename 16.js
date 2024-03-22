//
function prime(n) {
  if (n == 1 || n == 2) {
    document.write("prime " + n + " <br>");
  } else {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    if (count == 2) {
      document.write("prime " + n + " <br>");
    } else {
      document.write("not prime " + n + " <br> ");
    }
  }
}

prime(232);
document.write("<br>*********************************<br>");

for (let i = 1; i <= 100; i++) {
  prime(i);
}

let a = 10;
let b = 20;

console.log("A = " + a + " B = " + b);
// b = a;
// a = b;

// with variable 
// let temp = a;
// a = b ;
// b= temp;

//without variable or arithmetic operator
// a = a+b;
// b = a-b;
// a = a-b;

// [a,b] = [b,a]

console.log("A = " + a + " B = " + b);
