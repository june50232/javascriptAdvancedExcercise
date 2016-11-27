var a = 'June';
var a = new String('June');

typeof a // string
a[0] //'J'  繼承自String

a.length = 0;
a.length // 4   原始型別不能改繼承下來的。