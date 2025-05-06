### 1001 统计数字个数

**注意点：** **cin.ignore()**

`cin >> n` 语句时，程序会从标准输入读取一个整数 `n`，然而，输入流中在读取整数后会留下一个换行符 `\n`。这个换行符会停留在输入缓冲区里，若不进行处理，后续的 `std::getline(std::cin, line);` 语句在读取第一行输入时，会把这个遗留的换行符当作一行空输入，从而跳过第一行实际要输入的内容。

`cin.ignore()` 的作用就是忽略输入缓冲区中的一个字符，也就是把这个多余的换行符从输入缓冲区移除，这样后续的 `std::getline` 函数就能正确读取输入的每一行内容了。

```c++
#include <iostream>
#include <string>
using namespace std;
int main(){
    int n;
    cin >> n;
    cin.ignore(); 
    while(n--){
        string str;
        int count = 0;
        getline(cin,str);
        for(int i=0;i<str.size();i++){
            if(str[i]-'0'>=0 && str[i]-'0'<=9)
                count++;
        }
        cout << count << endl;
    }
    return 0;
}
```

### 1002 找第k小的数

思路：利用快速排序的思路，每次只需递归一侧的排序

左侧个数等于k-1，返回基准
左侧个数小于k-1，返回左侧快排
左侧个数大于k-1，返回右侧快排

```c++
#include <iostream>
using namespace std;
int mink(int* a, int left, int right, int k){
    if(left<right){
        int i=left;
        int j=right+1;
        int pivot=a[left];
        do{
            do i++; while(a[i]<pivot);
            do j--; while (a[j]>pivot);
            if(i<j) swap(a[i],a[j]);
        } while(i<j);
        swap(a[left],a[j]);
        if(j-left==k-1) 
            return a[j];
        else if(j-left > k-1)
            return mink(a,left,j-1,k);
        else 
            return mink(a,j+1,right,k+left-j-1);
    }
    return a[left]; // 到这一步的情况为left==right 返回a[left]即可
}

int main(){
    int m;
    cin >> m;
    while(m--){
        int n;
        cin >> n;
        int *arr = new int[n];
        for(int i=0;i<n;i++)
            cin >> arr[i];
        cout << mink(arr,0,n-1,2) << endl;
    }
    return 0;
}
```

### 1003 冒泡排序

```c++
#include <iostream>
using namespace std;
void bubble_sort(int* a,int n){
    for(int i=0;i<n-1;i++)
        for(int j=0;j<n-i-1;j++)
            if(a[j]>a[j+1])
                swap(a[j],a[j+1]);
}
int main(){
    int m;
    cin >> m;
    while(m--){
        int n;
        cin >> n;
        int* arr = new int[n];
        for(int i=0;i<n;i++)
            cin >> arr[i];
        bubble_sort(arr,n);
        for(int i=0;i<n;i++)
            cout << arr[i] << " ";
        cout << endl;
        delete[] arr;
    }
    return 0;
}
```

### 1006 最大乘积

#### 思路：

动态规划

str[]: 从下标1开始存储数字
dp[i,j]: str[1,j]中插入i个乘号的乘积最大值

状态转移方程: $dp[i,j]=max_{l=i}^{j-1}\{dp[i-1,l]\times str[l+1,j]\}$

调用: dp[k,n+1]
终止: dp[0,j]=str[]

### 1013 逆序对
#### 思路
对左边和右边分别找逆序对，并排列

1 5 2 1 3
 
1 5   -> 1 5
2 1 3 -> 1 2 3
利用lower_bound找到第一个大于等于key的

1 5
 1 3
 