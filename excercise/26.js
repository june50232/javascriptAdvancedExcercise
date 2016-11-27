var a = [];
var b = a;
a === b; // true  只有一個物件

b = {};
a == b; //false