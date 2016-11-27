var a = 1;
typeof a// 'number'

Number.prototype

Number.prototype.name = 'June';

var a = 100;
a.name // 'June'
a.name = 'Alex';   // 改不了，a是原始型別，不可能這樣寫進去
a.name // 'June'


delete a.name  // true

a.name // 'June' // 寫在父物件，繼承來的。