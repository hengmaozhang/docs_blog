### runtime error 

runtime error （运行时错误）就是程序运行到一半，程序就崩溃了。

比如：

①除以零

②数组越界：int a[3]; a[10000000]=10;

③指针越界：int * p; p=(int *)malloc(5 * sizeof(int)); *(p+1000000)=10;

④使用已经释放的空间：int * p; p=(int *)malloc(5 * sizeof(int));free(p); *p=10;

⑤数组开得太大，超出了栈的范围，造成栈溢出：int a[100000000];一般来说，在

oj上做题都把数组设成全局变量，减少5出现的可能。

有的时候再出现这样的错误还会给提示：

```c++
Runtime Error(ARRAY_BOUNDS_EXCEEDED) // array bounds exceed    数组越界
 
Runtime Error(DIVIDE_BY_ZERO) //divisor is nil                 除零
 
Runtime Error(ACCESS_VIOLATION) //illegal memory access        非法内存读取
 
Runtime Error(STACK_OVERFLOW) //stack overflow                 系统栈过载 
```

### 闰年

**普通年份**：如果年份能被4整除但不能被100整除，则是闰年。例如，2004年是闰年，而1900年不是闰年。

**世纪年份**：如果年份是整百数，它必须能被400整除才是闰年。例如，2000年是闰年，但2100年不是闰年。

### vector

```c++
#include <algorithm>
if (find(v.begin(), v.end(), key) != v.end()) {
	cout << "元素存在" << std::endl;
    
sort(arr.begin(),arr.end(),cmp);
```

`upper_bound` 和 `lower_bound` 是 C++ 标准库中的两个二分查找算法函数，主要用于在有序序列中查找元素。它们都定义在 `<algorithm>` 头文件中。

#### `lower_bound`

**功能***
`lower_bound` 返回指向序列中**第一个不小于**给定值的元素的迭代器。

**原型**
```cpp
template< class ForwardIt, class T >
ForwardIt lower_bound( ForwardIt first, ForwardIt last, const T& value );

template< class ForwardIt, class T, class Compare >
ForwardIt lower_bound( ForwardIt first, ForwardIt last, const T& value, Compare comp );
```

**参数**
- `first`, `last` - 要搜索的范围
- `value` - 要比较的值
- `comp` - 自定义比较函数（可选）

**返回值**
- 如果找到，返回指向第一个不小于 `value` 的元素的迭代器
- 如果没有这样的元素，返回 `last`


#### `upper_bound`

##### 功能
`upper_bound` 返回指向序列中**第一个大于**给定值的元素的迭代器。

##### 原型
```cpp
template< class ForwardIt, class T >
ForwardIt upper_bound( ForwardIt first, ForwardIt last, const T& value );

template< class ForwardIt, class T, class Compare >
ForwardIt upper_bound( ForwardIt first, ForwardIt last, const T& value, Compare comp );
```

##### 参数
同 `lower_bound`

##### 返回值
- 如果找到，返回指向第一个大于 `value` 的元素的迭代器
- 如果没有这样的元素，返回 `last`

#### 两者区别

| 特性        | lower_bound           | upper_bound  |
|-------------|-----------------------|--------------|
| 比较条件    | 第一个**不小于**value | 第一个**大于**value |
| 对于重复元素| 指向第一个出现的位置  | 指向最后一个出现位置的下一个位置 |

#### 实际应用

1. **查找元素是否存在**：
   ```cpp
   bool exists = std::binary_search(v.begin(), v.end(), value);
   ```

2. **查找等于value的范围**（对于重复元素）：
   ```cpp
   auto lower = std::lower_bound(v.begin(), v.end(), value);
   auto upper = std::upper_bound(v.begin(), v.end(), value);
   // [lower, upper) 就是所有等于value的元素范围
   ```

3. **插入元素保持有序**：
   ```cpp
   auto it = std::upper_bound(v.begin(), v.end(), value);
   v.insert(it, value);  // 插入后序列仍然有序
   ```

这两个函数的时间复杂度都是 O(log n)，因为它们基于二分查找算法实现。

### 数据大小问题

```C++
typedef long long LL;
```

给定长度分别为 n, m, k 的三个数组 a， b， c，对于i ≤ n, j ≤ m, t ≤ k，求$ a_i × b_j mod c_t $的最大值。n, m, k ≤ 200， $a_i, b_j, c_t ≤ 10^9$

分析：首先考虑数据范围支持使用 $O(nmk) $的枚举来解决问题。考虑 ai × bj 的最大值可能达到 $10^{18}$，所以要用 64 位整数，即C++ 中的 long long。  

虽然a,b,c未超过INT_MAX，但也要设为long long类型

```c++
long long* a=new long long[n];
long long* b=new long long[m];
long long* c=new long long[k];
long long max=0;
for(int i=0;i<n;i++){
    for(int j=0;j<m;j++){
        for(int l=0;l<k;l++){
            long long product=a[i]*b[j];
            long long temp = product%c[l];
            max=temp>max ? temp:max;
        }
    }
}
```

### 滑动窗口

```java
public void slideWindowTemplate(String nums){
    int l = 0, r = 0;        //[初始化窗口]
    //codes...               [其他初始化信息,定义一些维护数据的数据结构]
    while(r < nums.length){ //右边框移动
        r++;                 //[增大窗口]
        //codes.....         [更新窗口中的数据] 
        while(l < r && check(xxx) == false){   //[窗口不满足某种性质]
              l++;             //[缩小窗口]
            //codes...       [维护窗口中的数据]
        }
    }
}
```

### cstring

#### 改变连续一段字符的值——memset

```C++
void * memset ( void * ptr, int value, size_t num );
```

`ptr`指向要修改的内存块的起始地址，`value`是要修改成什么值，`num`是修改多少个。

#### 可以用于任何类型数组之间的赋值——memcpy

```C++
void *memcpy(void *str1, const void *str2, size_t n)
```

##### 参数

- **str1** -- 指向用于存储复制内容的目标数组，类型强制转换为 void* 指针。
- **str2** -- 指向要复制的数据源，类型强制转换为 void* 指针。
- **n** -- 要被复制的**字节数**。

### 二分查找 多尝试

#### 左闭右闭

```C++
int search(int nums[], int size, int target) 
//nums是数组，size是数组的大小，target是需要查找的值
{
    int left = 0;
    int right = size - 1;	
    while (left <= right) {	
        int middle = (right + left) / 2;
        if (nums[middle] > target) right = middle - 1;	
        else if (nums[middle] < target) left = middle + 1;	
    }
    return left;
}

```

#### 左闭右开

```C++
int search(int nums[], int size, int target)
{
	int left = 0;
	int right = size; 
	while (left < right) {	
		int middle = left + ((right - left) / 2);
		if (condition) right = middle; 
		else left = middle + 1;
	} 
	return left; //修改为
}
```

### 判断n是否为素数 

```C++
bool is_prime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```

### 数学

#### 欧拉定理

https://zhuanlan.zhihu.com/p/131536831

### STL无序容器之unordered_set、unordered_map、unordered_multiset、unordered_multimap详解

https://blog.csdn.net/tilblackout/article/details/134172656
