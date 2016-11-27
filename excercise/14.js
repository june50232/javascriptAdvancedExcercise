var a = { 'a1':1, 'a2':2 };
var b = [];

b.push(a);
b[0]['a1'] = 2;

// a['a1']  //2
