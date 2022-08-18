# TS 的使用小Tips

## 设置ts文件的命名冲突

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



## 设置ts文件自动编译

+ 在需要自动编译的文件下创建  tsconfig.json 文件

~~~json
{
 //即使里面什么都没有，也可以
}
~~~

+ 然后在控制台输入tsc -w  就能实现自动编译了

![image-20220818211850485](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4669/202208182118535.png)

![image-20220818211935156](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4669/202208182119215.png)

