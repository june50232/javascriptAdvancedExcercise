var a = 100;
var b = $100;

Number // function
Number(b) // NAN : not a number // typeof NAN : number

parseInt(b) 
parseFloat(b) // 解析到小數點

parseInt('100,000'); // 100 無法解析逗號

parseInt(b); // NAN

a.toFixed(2); // a 可以使用 繼承自他的型別Ｎumber 的屬性 toFixed
