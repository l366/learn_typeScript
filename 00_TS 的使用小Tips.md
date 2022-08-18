# TS 的使用小Tips

+ 如果不把文件当作模块使用的话typescript会认为所有文件里的代码都是在一个作用域里的，所以即使在不同文件也不能申明同名变量

+ 解决办法：

  1. 把文件当作一个模块,在每个文件至少有一个导出，比如在末尾加上一下代码

     ```arduino
     export default void 0
     ```

  2. 使用namespace防止命名冲突，比如把每个文件里的代码包在一个namespace里
     a.ts

     ```angelscript
     namespace A {
       let a = 1
     }
     ```

     b.ts

     ```angelscript
     namespace B {
       let a = 1
     }
     ```