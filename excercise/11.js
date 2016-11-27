var a = 1;
window['a'] = 2;
delete window.a ;
console.log(a);
// 2

b = 2;
delete b;
console.log(b);
// 可以刪除，b is not defined