function add(a,b) {
    return a+b;
}

// add(1,2); 可以執行
// window.add function   add 在window下 產生add屬性 全域

var a = function() {
    return 1;
}
a();
//1

function test(p) {
    return p();
}

test(a); //1