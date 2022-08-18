// 1.1 声明一个变量，同时指定他的类型为number
let a: number;

a = 10;
a = 33;
// 1.2 a = 'hello'; //此行代码会报错 a的类型number

let b: string;
b = "hello";

//2.1申明完变量直接进行赋值
let c: boolean = false;

//2.2如果声明变量和赋值同时进行，TS自动对变量进行类型定义
let d = false;
d = true;
// d = 1;

let sum = (a: number, b: number): number => {
  return a + b;
};
let result = sum(1, 2);
console.log();

export default void 0; //导出为空
