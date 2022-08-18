// 1.1使用字面量进行类型声明

let a: 10;
a = 10;
// 1.2使用多种类型
let b: "male" | "female";
b = "male";

let c: boolean | String;
c = true;
c = "hello";

// 1.3any 表示的是任意类型，关闭对该变量的TS类型检测
let d: any; //1.3.1声明变量:显式any
let d1; //1.3.2声明变量:隐式any
d = 10;
d = true;
d = "abc";
console.log(a);

// 1.4unknown 表示类型为未知
let s: unknown; //1.4.1unknown类型的变量不能赋值给其他类型的变量
s = 10;
s = "asd";
let e: String;
// e = s;    //error:不能将类型“unknown”分配给类型“String”

// unknown 变量实际上是一个安全类型的any
// unknown 类型的变量，不能直接赋值给其他变量
if (typeof s === "string") {
  e = s;
}

//1.5 类型断言,可以用来告诉解析器变量的实际类型
/*
 *   语法:
 *     变量as类型
 *     <类型>变量
 */
// 1.6 void 表示空，以函数为例，就表示没有返回值的函数
let fn = (): void => {};

// 1.7 never 表示永远不会返回结果，常用在返回报错的函数里面
let fn2 = (): never => {
  throw new Error("报错了"); //一旦遇到错误,函数就结束了，没有返回值，因此定义never是可行的
};

export default void 0; //导出为空
