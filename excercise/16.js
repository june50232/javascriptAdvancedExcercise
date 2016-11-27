var a = { 'a1': 1, 'a2': 2 };
function test(p) {
    p.a1 = 2;
}
test(a);

// a.a1 //2
// 先執行第五行後，才跑function。所以先想p指向誰（a）。再想p.a1