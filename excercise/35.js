function test() {
    for(i=1; 1 <= 10; i++){
        console.log(i);
    }
}

for(i=1; 1<=10; 1++){
    test();   
}
// i會跑10遍，因為第一層for先跑，i沒有var 所以是window.i, i 已經變10, 第二個for已經跑不動了（<=10）



function test() {
    for(i=1; 1 <= 10; i++){
        console.log(i);
    }
}

for(var i=1; 1<=10; 1++){
    test();   
}
// i會跑10遍，因為第一層for先跑，i沒有var 所以是window.i, i 已經變10, 第二個for已經跑不動了（<=10）


function test() {
    for(var i=1; 1 <= 10; i++){
        console.log(i);
    }
}

for(var i=1; 1<=10; 1++){
    test();   
}
// i會跑100遍
