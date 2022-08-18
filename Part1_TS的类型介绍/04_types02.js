// 1.object 表示一个对象
var a;
a = {};
a = function () { };
//2.{}用来指定对象中包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后加上一个问号'?'  ，表示属性是可选的
var b;
b = { name: "123" };
// 3.[propName: string]: any表示任意类型的属性
var c;
c = { name: "123", age: 18, gender: "男" };
// 4.设置函数结构的类型声明
/*
 *   语法：(形参:类型,形参:类型,...) => 返回值
 */
var d;
d = function (n1, n2) { return n1 + n2; };
// 5.定义array 数组类型
/*      1.类型[]
 *     string[]表示 字符串数组
 *     number[]表示 数字数组
 *      2.Array<类型>
 *     Array<number>表示数字数组
 */
var strArray;
strArray = ["a", "b", "c"];
var numArray;
numArray = [1, 2, 3, 4];
var numArray2;
numArray2 = [123, 123, 1231, 23];
// 6.元组，元组就是固定长度的数组
/*
 *   语法: [类型,类型,类型,类型]
 */
var h;
h = ["123", "123"];
var h1;
h1 = [1, true];
// 7.枚举 enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = { name: "琉璃厂", gender: Gender.Male };
console.log(i.gender === Gender.Male);
