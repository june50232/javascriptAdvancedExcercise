//原始屬性是沒有屬性的

var a = 1;

a.name = 'will'
a.name // undefined  //不能擴增屬性

a.name = '123';
a.name //undefined // 因為字串 字串是原始型別，不能擴充屬性

var a = /a/;
a.name = 'June';
a.name // 'June'

a[0] = 1;

