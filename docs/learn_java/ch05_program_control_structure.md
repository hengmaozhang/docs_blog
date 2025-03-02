- [第5章 程序控制结构](#第5章-程序控制结构)
  - [程序流程控制介绍](#程序流程控制介绍)
  - [分支控制](#分支控制)
    - [if 分支](#if-分支)
    - [switch 分支结构](#switch-分支结构)
  - [循环控制](#循环控制)
    - [for 循环控制](#for-循环控制)
    - [while 循环控制](#while-循环控制)
    - [do..while 循环控制](#dowhile-循环控制)
  - [其他控制](#其他控制)
    - [跳转控制语句-break](#跳转控制语句-break)
    - [跳转控制语句-continue](#跳转控制语句-continue)
    - [跳转控制语句-return](#跳转控制语句-return)


# 第5章 程序控制结构

## 程序流程控制介绍

1) 顺序控制
2) 分支控制
3) 循环控制

## 分支控制

### if 分支

![picx-{B1CA188B-6D1C-4A1D-A5DE-8AC88E524058}](https://hengmaozhang.github.io/picx-images-hosting/20250301/picx-{B1CA188B-6D1C-4A1D-A5DE-8AC88E524058}.esngi6anh.jpg)

### switch 分支结构

```java
switch(表达式){
    case 常量1;
    语句块1;
    break;
    case 常量2;
    语句块2;
    break;
    ...
    case 常量n;
    语句块n;
    break;

    default:
    default 语句块;
    break;
}
```

1. 表达式数据类型，应和case后的常量类型一致，或者是可以自动转成可以相互比较的
   类型，比如输入的是字符,而常量是int

2. switch(表达式)中表达式的返回值必须是:(**byte,short,int,char,enum[枚举],String**)

![](https://raw.githubusercontent.com/timerring/scratchpad2023/main/2023/04/11-19-28-46-1681212525.png)

3. case子句中的值必须是常量,而不能是变量

4. default子句是可选的，当没有匹配的case时，执行default

5. break语句用来在执行完一个case分支后使程序跳出switch语句块;如果没有写break，程序会顺序执行到switch结尾，除非遇到break;

## 循环控制

### for 循环控制 ForDetail.java

```java
for (循环变量初始化;循环条件;循环变量迭代){
    循环操作(可以多条语句);
}
```

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250301/picx-image.1ap4vyjki0.jpg)

**使用细节**

1.  循环条件是返回一个布尔值的表达式
2.  for(;循环判断条件;) 中的初始化和变量迭代可以写到其它地方， 但是两边的分号不能省略。
3.  循环初始值可以有多条初始化语句， 但要求类型一样， 并且中间用逗号隔开， 循环变量迭代也可以有多条变量迭代语句， 中间用逗号隔开。

```java
// ForDetail.java

public class ForDetail { 

	//编写一个main方法
	public static void main(String[] args) {

		//for(;循环判断条件;) 
		//中的初始化和变量迭代可以写到其它地方，但是两边的分号不能省略
		
		// 使用for循环控制
		// int i = 1;//循环变量初始化
		// for( ; i <= 10 ; ) {
		// 	System.out.println("hello，韩顺平教育" + i);
		// 	i++;
		// }

		// System.out.println("i=" + i);//11 ok
		

		// int j = 1;
		// //补充
		// for(;;) { //表示一个无限循环,死循环
		// 	System.out.println("ok~" + (j++));
		// }

		//循环初始值可以有多条初始化语句，但要求类型一样，并且中间用逗号隔开，
		//循环变量迭代也可以有多条变量迭代语句，中间用逗号隔开
		//老师使用内存分析法，看看下面代码输出什么?
		int count = 3;
		for (int i = 0,j = 0;  i < count; i++, j += 2) {
			System.out.println("i=" + i + " j=" + j);
		}

	}
}
```

### while 循环控制

```java
while(循环条件){
    循环体(语句);
    循环变量迭代;
}
```

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250301/picx-image.4xuojhnzll.jpg)

### do..while 循环控制

```java
do{
    循环体(语句);
    循环变量迭代;
}while(循环条件);
```

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250301/picx-image.45tnd4r1t.jpg)

## 其他控制

### 跳转控制语句-break

break 语句用于终止某个语句块的执行，一般使用在switch 或者循环[for , while , do-while]中。

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250301/picx-image.1e8qtos25j.jpg)

**使用细节**

break语句出现在多层嵌套的语句块中时，可以通过标签指明要终止的是哪一层语句块。如果没有指定break,默认退出最近的循环体

- break 语句可以指定退出哪层
- label1 是标签，名字由程序员指定。
- break后指定到哪个label 就退出到哪里
- 在实际的开发中，老韩尽量不要使用标签,
- 如果没有指定 break,默认退出**最近**的循环体

![picx-{0FC60589-68C6-4D99-AA68-A1ABCFC7A984}](https://hengmaozhang.github.io/picx-images-hosting/20250301/picx-{0FC60589-68C6-4D99-AA68-A1ABCFC7A984}.7axb0paw5p.jpg)

例：实现登录验证，有3次机会，如果用户名为"丁真" ,密码"666"提示登录成功，否则提示还有几次机会，请使用for+break

```java
import java.util.Scanner;
public class BreakExercise02 { 

	//编写一个main方法
	public static void main(String[] args) {

		//实现登录验证，有3次机会，如果用户名为"丁真" ,密码"666"提示登录成功，
		//否则提示还有几次机会，请使用for+break完成
		//
		// 思路分析
		// 1. 创建Scanner对象接收用户输入  
		// 2. 定义 String name ; String passwd; 保存用户名和密码
		// 3. 最多循环3次[登录3次]，如果 满足条件就提前退出
		// 4. 定义一般变量 int chance 记录还有几次登录机会
		// 
		// 代码实现
		
		Scanner myScanner  = new Scanner(System.in);
		String name = "";
		String passwd = "";
		int chance = 3; //登录一次 ，就减少一次
		for( int i = 1; i <= 3; i++) {//3次登录机会
			System.out.println("请输入名字");
			name = myScanner.next();
			System.out.println("请输入密码");
			passwd = myScanner.next();
			//比较输入的名字和密码是否正确
			//补充说明字符串 的内容 比较 使用的 方法 equals
            // 字符串比较推荐这种写法，可以有效避免空指针。相比于（"name".equals(丁真)）
			if("丁真".equals(name) && "666".equals(passwd)) {
				System.out.println("恭喜你，登录成功~");
				break;
			}
			//登录的机会就减少一次
			chance--;
			System.out.println("你还有" + chance + "次登录机会");
		}
	}
}
```

### 跳转控制语句-continue

continue 语句用于结束本次循环，继续执行下一次循环。

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250301/picx-image.3nrrd6nafn.jpg)

continue 语句出现在多层嵌套的循环语句体中时，可以通过标签指明要跳过的是哪一层循环, 这个和前面的标签的使用的规则一样.

### 跳转控制语句-return

return 使用在方法，表示跳出所在的方法。
