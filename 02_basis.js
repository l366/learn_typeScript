// 1.1 声明一个变量，同时指定他的类型为number
var a;
a = 10;
a = 33;
// 1.2 a = 'hello'; //此行代码会报错 a的类型number
var b;
b = "hello";
//2.1申明完变量直接进行赋值
var c = false;
//2.2如果声明变量和赋值同时进行，TS自动对变量进行类型定义
var d = false;
d = true;
// d = 1;
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
