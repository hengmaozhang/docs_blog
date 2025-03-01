[第3章 变量](#第3章-变量)

- [程序中+号的使用](#程序中号的使用)
- [数据类型](#数据类型)
- [整数类型](#整数类型)
  - [整型的类型](#整型的类型)
  - [整型的使用细节](#整型的使用细节)
  - [IntDetail.java](#IntDetail.java)
- [浮点类型](#浮点类型)
  - [浮点型的分类](#浮点型的分类)
  - [浮点型使用细节](#浮点型使用细节)
  - [FloatDetail.java](#FloatDetail.java)
- [Java API 文档](#java-api-文档)
- [字符类型(char)](#字符类型char)
  - [字符类型使用细节](#字符类型使用细节)
  - [CharDetail.java](#CharDetail.java)
  - [字符本质探讨](#字符本质探讨)
- [布尔类型：boolean](#布尔类型boolean)
- [基本数据类型转换](#基本数据类型转换)
  - [自动类型转换](#自动类型转换)
  - [自动类型转换注意和细节](#自动类型转换注意和细节)
  - [AutoConvertDetail.java](#AutoConvertDetail.java)
  - [强制类型转换](#强制类型转换)
  - [ForceConvertDetail.java](#ForceConvertDetail.java)
- [基本数据类型和String 类型的转换](#基本数据类型和string-类型的转换)
  - [介绍和使用](#介绍和使用)
  - [注意事项](#注意事项)
- [homework](#homework)

# 第3章 变量

## 变量使用注意事项  

1. 变量表示内存中的一个存储区域[不同的变量，类型不同，占用的空间大小不同，比如：int 4个字节，double就是8个字节，先有基本印象，后面说字节]

2. 该区域有自己的名称[变量名]和类型[数据类型]

3. 变量必须先声明，后使用，即有顺序

4. 该区域的数据/值可以在**同一类型**范围内不断变化

5. 变量在同一个作用域内**不能重名**

6. 变量=变量名+值+数据类型

## 程序中+号的使用

1.当左右两边都是数值型时，则做加法运算

2.当左右两边有一方为字符串，则做拼接运算

## 数据类型

![](https://hengmaozhang.github.io/picx-images-hosting/20250222/picx-image.6pnn4djbdx.jpg)

## 整数类型

### 整型的类型

| 类型           | 占用存储空间 | 范围                                     |
| -------------- | ------------ | ---------------------------------------- |
| byte [字节]    | 1字节        | -128 ~ 127                               |
| short [短整型] | 2字节        | -(2^15) ~ 2^15-1(-32768 ~ 32767)         |
| int [整型]     | 4字节        | -2^31 ~ 2^31-1(-2147483648 ~ 2147483647) |
| long [长整型]  | 8字节        | -2^63 ~ 2^63-1                           |

### 整型的使用细节

- Java各整数类型有固定的范围和字段长度，不受具体OS[操作系统]的影响，以保证java程序的可移植性。
- Java的整型常量(具体值)默认为int型，声明long型常量须后加`l`或`L`

### IntDetail.java

```java
// IntDetail.java
public class IntDetail { 

	// 编写一个main方法
	public static void main(String[] args) {

		// Java的整型常量（具体值）默认为 int 型，声明long型常量须后加‘l’或‘L’
		int n1 = 1;//4个字节
		// int n2 = 1L; 不对
		long n3 = 1L;//对

	}
}
```

## 浮点类型

### 浮点型的分类

| 类型         | 占用存储空间 | 范围                   |
| ------------ | ------------ | ---------------------- |
| 单精度float  | 4字节        | -3.403E38 ~ 3.403E38   |
| 双精度double | 8字节        | -1.798E308 ~ 1.798E308 |

- 关于浮点数在机器中存放形式的简单说明, 浮点数=符号位+指数位+尾数位
- 尾数部分可能丢失，造成精度损失(小数都是近似值)。

### 浮点型使用细节

1. 与整数类型类似，Java浮点类型也有固定的范围和字段长度，不受具体OS的影响。

2. Java的浮点型常量(具体值)默认为double型，声明float型常量，须后加‘f或‘F'

3. 浮点型常量有两种表示形式

   - 十进制数形式:如:5.12    512.0f    .512(必须有小数点，0可以省略)

   - 科学计数法形式: 如:5.12**e**2[5.12*****10的2次方]

     5.12E-2[5.12**/**10的2次方]

4. 通常情况下，应该使用double型，因为它比float型更精确。
   double num9 = 2.1234567851;
   float num10= 2.1234567851F;

5. 浮点数使用陷阱:2.7和8.1/3比较
   当我们对运算结果是小数的进行相等判断时，要小心应该是**以两个数的差值的绝对值，在某个精度范围类判断**。

### FloatDetail.java

```java
// FloatDetail.java
public class FloatDetail { 

    //编写一个main方法
    public static void main(String[] args) {

        //Java 的浮点型常量(具体值)默认为double型，声明float型常量，须后加‘f’或‘F'
        //float num1 = 1.1; //对不对?错误
        float num2 = 1.1F; //对的
        double num3 = 1.1; //对
        double num4 = 1.1f; //对

        //十进制数形式：如：5.12       512.0f        .512   (必须有小数点）
        double num5 = .123; //等价 0.123
        System.out.println(num5);
        //科学计数法形式:如：5.12e2  5.12E-2 
        System.out.println(5.12e2);//512.0
        System.out.println(5.12E-2);//0.0512

        //通常情况下，应该使用double型，因为它比float型更精确。
        //[举例说明]double num9 = 2.1234567851;float num10 =  2.1234567851F;
        double num9 =  2.1234567851;
        float num10 =  2.1234567851F;
        System.out.println(num9);
        System.out.println(num10);

        //浮点数使用陷阱: 2.7 和 8.1 / 3  比较
        double num11 = 2.7;
        double num12 = 2.7;    
        System.out.println(num11);//2.7
        System.out.println(num12);//接近2.7的一个小数，而不是2.7
        //得到一个重要的使用点: 当我们对运算结果是小数的进行相等判断时，要小心
        //应该是以两个数的差值的绝对值，在某个精度范围类判断
        if( num11 == num12) {
            System.out.println("num11 == num12 相等");
        }
        //正确的写法 , ctrl + / 注释快捷键, 再次输入就取消注释
        if(Math.abs(num11 - num12) < 0.000001 ) {
            System.out.println("差值非常小，到我的规定精度，认为相等...");
        }
        // 可以通过java API  来看 下一个视频介绍如何使用API
        System.out.println(Math.abs(num11 - num12));
        //细节:如果是直接查询得的的小数或者直接赋值，是可以判断相等
    }
}
```

## Java API 文档

API (Application Programming Interface,应用程序编程接口)是Java提供的基本编程接口(java提供的类还有相关的方法)。中文在线文档: https://www.matools.com

Java语言提供了大量的基础类，因此 Oracle公司也为这些基础类提供了相应的API文档,用于告诉开发者如何使用这些类,以及这些类里包含的方法。

Java类的组织形式

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250222/picx-image.5mnxtjtxom.jpg)

查询 ArrayList 类有哪些方法：

+ 包->类->方法

+ 直接索引 Math

## 字符类型(char)

字符类型可以表示单个字符,字符类型是char，char 是两个字节(可以存放汉字)，多个字符用字符串String

### 字符类型使用细节

1. 字符常量是用单引号('  ')括起来的单个字符


2. Java中还允许使用转义字符来将其后的字符转变为特殊字符型常量。

> 例如:char c3 = '\n';  表示换行符

3. 在java中,char的本质是一个整数，在输出时，是unicode码对应的字符

> 查看对应的unicode码 http://tool.chinaz.com/Tools/Unicode.aspx

4. char类型是可以进行运算的，相当于一个整数，因为它都对应有Unicode码.

### CharDetail.java

```java
// CharDetail.java
public static void main(String[] args) {

	// 在java中，char的本质是一个整数，在默认输出时，是unicode码对应的字符
	// 要输出对应的数字，可以(int)字符
	char c1 = 97;
	System.out.println(c1); // a

	char c2 = 'a'; // 输出'a' 对应的 数字
	System.out.println((int)c2);
	char c3 = '张';
	System.out.println((int)c3);// 24352
	char c4 = 24352;
	System.out.println(c4);// 张

	//char类型是可以进行运算的，相当于一个整数，因为它都对应有Unicode码.
	
	System.out.println('a' + 10);//107

	//课堂测试
	char c5 = 'b' + 1;//98+1==> 99
	System.out.println((int)c5); //99
	System.out.println(c5); //99->对应的字符->编码表ASCII(规定好的)=>c
}
```
### 字符本质探讨

1. 字符型存储到计算机中，需要将字符对应的码值(整数)找出来，比如'a'

+ 存储:`a'==>码值97 ==>二进制(110 0001) ==>存储

+ 读取:二进制(110 0001)=>97 ===> 'a'=>显示

2. 字符和码值的对应关系是通过字符编码表决定的(是规定好)

3. 介绍一下字符编码表

+ ASClI (ASCIl编码表一个字节表示，一个128个字符，实际上一个字节可以表示256个字符，只用128个，因为用不完)
+ Unicode ( Unicode 编码表固定大小的编码使用两个字节来表示字符，字母和汉字统一都是占用两个字节这样浪费空间 )
  
  + Unicode的好处: 一种编码，将世界上所有的符号都纳入其中。每一个符号都给予一个独一无二的编码，使用 Unicode 没有乱码的问题。
  + Unicode 的缺点: 一个英文字母和一个汉字都占用2个字节，这对于存储空间来说是浪费。
  + 2的16次方是65536,所以最多编码是65536个字符
  + 编码0-127的字符是与ASCII的编码一样.比如'a'在ASCII码是0x61（0x 是十六进制数字的标准前缀：0 表示这是一个数字，x 表示后面的内容是十六进制格式），在Unicode码是0x0061,都对应97.因此 Unicode码兼容ASCII码.
+ utf-8(编码表,大小可变的编码字母使用1个字节，汉字使用3个字节)
  
  + UTF-8是在互联网上使用最广的一种Unicode的实现方式(Unicode的改进)
  + UTF-8是一种变长的编码方式。它可以使用1-6个字节表示一个符号，根据不同的符号而变化字节长度。
  + 使用大小可变的编码字母占1个字节，汉字占3个字节
+ gbk(可以表示汉字，而且范围广，字母使用1个字节,汉字2个字节)
+ gb2312(可以表示汉字,gb2312 <gbk)
+ big5码(繁体中文,台湾,香港)

## 布尔类型：boolean

1. 布尔类型也叫boolean类型，booolean类型数据只允许取值true和false，无null 

2. boolean类型占1个字节
3. 不可以用0或非0表示false或true

## 基本数据类型转换

### 自动类型转换

当java程序在进行赋值或者运算时，精度小的类型自动转换为精度大的数据类型,这个就是自动类型转换。

![](https://raw.githubusercontent.com/timerring/scratchpad2023/main/2023/04/11-16-56-17-1681203376.png)

### 自动类型转换注意和细节

1. 有多种类型的数据**混合**运算时，系统首先自动将所有数据转换成**容量最大**的那种数据类型,然后再进行计算。

2. 当我们把精度(容量)大的数据类型赋值给精度(容量)小的数据类型时，就会报错，反之就会进行自动类型转换。

3. (byte, short)和char之间不会相互自动转换。**byte，short，char他们三者可以计算，在计算时首先转换为int类型，不管是单独运算还是混合运算**

4. boolean不参与转换

5. 自动提升原则: 表达式结果的类型 取决于 所有操作数中最大的类型

### AutoConvertDetail.java

```java
// AutoConvertDetail.java
// 自动类型转换细节
public class AutoConvertDetail { 

	//编写一个main方法
	public static void main(String[] args) {
		//细节1： 有多种类型的数据混合运算时，
		//系统首先自动将所有数据转换成容量最大的那种数据类型，然后再进行计算
		int n1 = 10; //ok
		//float d1 = n1 + 1.1;//错误 n1 + 1.1 => 结果类型是 double
		//double d1 = n1 + 1.1;//对 n1 + 1.1 => 结果类型是 double
		float d1 = n1 + 1.1F;//对 n1 + 1.1 => 结果类型是 float

		//细节2: 当我们把精度(容量)大的数据类型赋值给精度(容量)小的数据类型时，
		//就会报错，反之就会进行自动类型转换。
		//
		//int n2 = 1.1;//错误 double -> int 
		
		//细节3: (byte, short) 和 char之间不会相互自动转换
		//当把具体数赋给 byte 时，(1)先判断该数是否在byte范围内，如果是就可以
		byte b1 = 10; //对  , -128-127
		// int n2 = 1; //n2 是int 
		// byte b2 = n2; //错误，原因： 如果是变量赋值，会先判断类型
		// 
		// char c1 = b1; //错误， 原因 byte 不能自动转成 char
		//  
		
		//细节4: byte，short，char 他们三者可以计算，在计算时首先转换为int类型，不管是单独运算还是混合运算
		byte b2 = 1;
		byte b3 = 2;
		short s1 = 1;
		//short s2 = b2 + s1;//错, b2 + s1 => int
		int s2 = b2 + s1;//对, b2 + s1 => int

		//byte b4 = b2 + b3; //错误: b2 + b3 => int
		
		//boolean 不参与转换
		boolean pass = true;
		//int num100 = pass;// boolean 不参与类型的自动转换

		//自动提升原则： 表达式结果的类型 取决于 所有操作数中最大的类型
		//看一道题
		byte b4 = 1;
		short s3 = 100;
		int num200 = 1;
		float num300 = 1.1F;

		double num500 = b4 + s3 + num200 + num300; //float -> double
	}
}
```

### 强制类型转换

- 自动类型转换的逆过程，将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符( )，但可能造成精度降低或溢出,格外要注意。


- char类型可以保存int的常量值，但不能保存int变量，需要强转

### ForceConvertDetail.java

```java
// ForceConvertDetail.java
public class ForceConvertDetail { 
    //编写一个main方法
    public static void main(String[] args) {

        //演示强制类型转换
        //强转符号只针对于最近的操作数有效，往往会使用小括号提升优先级
        //int x = (int)10*3.5+6*1.5;//编译错误： double -> int 
        int x = (int)(10*3.5+6*1.5);// (int)44.0 -> 44 先计算小括号，再强转
        System.out.println(x);//44

        // char类型可以保存int的常量值，但不能保存int变量，需要强转
        char c1 = 100; //ok
        int m = 100; //ok
        //char c2 = m; //错误
        char c3 = (char)m; //ok
        System.out.println(c3);//100对应的字符, d字符
    }
}
```

## 基本数据类型和String 类型的转换

### 介绍和使用

在程序开发中，我们经常需要将基本数据类型转成String类型。或者将String类型转成基本数据类型。

+ 基本类型转String类型
  
  语法:将基本类型的值+""即可

+ String类型转基本数据类型
  
  语法:通过基本类型的包装类调用`.parseXX()`方法即可

```java
// StringToBasic.java
public class StringToBasic { 

	//编写一个main方法
	public static void main(String[] args) {
        //基本数据类型->String
        int n1 = 100;
		float f1 = 1.1F;
		double d1 = 4.5;
		boolean b1 = true;
		String s1 = n1 + "";
		String s2 = f1 + "";
		String s3 = d1 + "";
		String s4 = b1 + "";
		System.out.println(s1 + " " + s2 + " " + s3 + " " + s4);
        
		//String->对应的基本数据类型
		String s5 = "123";
		//会在 OOP 讲对象和方法的时候回详细
		//使用基本数据类型对应的包装类的相应方法，得到基本数据类型
		int num1 = Integer.parseInt(s5);
		double num2 = Double.parseDouble(s5);
		float num3 = Float.parseFloat(s5);
		long num4 = Long.parseLong(s5);
		byte num5 = Byte.parseByte(s5);
		boolean b = Boolean.parseBoolean("true");
		short num6 = Short.parseShort(s5);

		System.out.println("===================");
		System.out.println(num1);//123
		System.out.println(num2);//123.0
		System.out.println(num3);//123.0
		System.out.println(num4);//123
		System.out.println(num5);//123
		System.out.println(num6);//123
		System.out.println(b);//true
		
        //怎么把字符串转成字符char -> 含义是指 把字符串的第一个字符得到
		//s5.charAt(0) 得到 s5字符串的第一个字符 '1'
		System.out.println(s5.charAt(0));
	}
}
```

### 注意事项

- 在将String 类型转成基本数据类型时，要确保String类型能够转成有效的数据 ，比如我们可以把"123" , 转成一个整数，但是不能把"hello" 转成一个整数。
- 如果格式不正确，就会抛出异常，程序就会终止。

## homework

```java
// homework.java
public class homework {

	public static void main(String[] args) {
		/*
		 姓名	年龄	成绩	性别	爱好
     	 xx		xx	xx	xx	xx

		要求：
		1) 用变量将姓名、年龄、成绩、性别、爱好存储
		2) 使用+
		3) 添加适当的注释
		4) 添加转义字符, 使用一条语句输出
		*/

		String name = "zzz";
		int age = 19;
		int grade = 100;
		char sex = '男';
		String hobby = "篮球";

		System.out.println("姓名\t年龄\t成绩\t性别\t爱好\n" + name + 
			"\t" + age + "\t" + grade + "\t" + sex + "\t" + hobby); 
	}
}
```

