function NyFunc() {
    var i = 1;                   // function run完這個變數不會消失，因為閉包裡的i++把它卡住了。
    return (
        getCount : function() {
            return 1++;
        }
    )
}

var a = MyFunc();
a.getCount() // 1
a.getConut() // 2


// 區域變數是function執行完就會不見，除了閉包，
// ＭyFunc function的design pattern就是閉包
// 用閉包是因為 閉包提供一種封裝，將區域變數存取起來，而外面的人取用不到，也不會污染區域變數。