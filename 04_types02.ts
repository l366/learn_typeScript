// 1.object 表示一个对象

let a: object;
a = {};
a = () => {};

//2.{}用来指定对象中包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后加上一个问号'?'  ，表示属性是可选的
let b: { name: string; age?: number };
b = { name: "123" };

// 3.[propName: string]: any表示任意类型的属性
let c: { name: string; [propName: string]: any };
c = { name: "123", age: 18, gender: "男" };

// 4.设置函数结构的类型声明
/*
 *   语法：(形参:类型,形参:类型,...) => 返回值
 */
let d: (a: number, b: number) => number;
d = (n1, n2) => n1 + n2;

// 5.定义array 数组类型
/*      1.类型[]
 *     string[]表示 字符串数组
 *     number[]表示 数字数组
 *      2.Array<类型>
 *     Array<number>表示数字数组
 */
let strArray: string[];
strArray = ["a", "b", "c"];

let numArray: number[];
numArray = [1, 2, 3, 4];
let numArray2: Array<number>;
numArray2 = [123, 123, 1231, 23];

// 6.元组，元组就是固定长度的数组
/*
 *   语法: [类型,类型,类型,类型]
 */
let h: [string, string];
h = ["123", "123"];
let h1: [number, boolean];
h1 = [1, true];

// 7.枚举 enum
enum Gender {
  Male,
  Female,
}
let i: { name: string; gender: Gender };
i = { name: "琉璃厂", gender: Gender.Male };
console.log(i.gender === Gender.Male);

// 8.  &表示同时
let j: { name: string } & { age: number };
j = { name: "琉璃厂", age: 123 };

// 9.类型的别名
type myType = 1 | 2 | 3 | 4;
let k: myType;
let l: myType;
let m: myType;
m = 1;
export default void 0;
