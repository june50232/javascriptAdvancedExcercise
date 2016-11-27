function MyFunc() {
    var obj = {
        'GetA': 1, 
        'GetB': 2
    };
    
    return obj;  // 不能 return  var obj = {...};   // 會return undefined 因為var
}; 

var o = MyFunc(); 

o.GetA;
//1

o.GetB();
//2
