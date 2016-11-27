function MyFunc() {
    var obj = {
        'GetA': function() {       // 數字開頭不行會error  中文 emoji可以
                    return 1}, 
        'GetB': function() { 
                    return 2}
    }; 
    
    return obj;
}; 

var o = MyFunc(); 

o.GetA();
//1

o.GetB();
//2
