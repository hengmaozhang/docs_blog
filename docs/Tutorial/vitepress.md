# vitepress搭建并部署网站

## 前言

首先，明确一点，**不要轻易用最新的版本**！！！很多开源项目文档写的真的太简练了，个人觉得不太适合小白，给个QA区也好啊。最后我们在遇到问题的时候解决方案一般有三条：

1. 去网上搜索，看别人写的博客
2. 问gpt
3. 问别人（效率最低，特别是对于不会提问的同学）

对开源项目来说，还有两条

1. 去github的issues区看别人是否遇到过这种问题
2. 提issue

为什么说不要用最新版本，首先版本发布的最新，很多问题网上根本没有解决方案，特别是对于比较小众的开源项目。问GPT的话它的知识库都没更新到最新，也没法解决。至于github的issue区也只能碰运气。

到最后遇到问题你只能提issue，这个时候就得看负责维护这个项目团队的积极性了，vitepress团队还是很奈斯的，我今天两点提了个issue8分钟就回复了，也得益于美国跟咱这边有时差。

![image-20240108185018057](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108185018057.png)

## 创建项目

话不多说，接下来开始我们的搭建步骤。对于开源项目，肯定是直接看官网和一些最佳实践了。

vitepress官网地址：https://vitepress.dev/（有简体中文可选择）

模仿的最佳实践（B站一个UP主的）：https://docs.zhengxinonly.com/

本文档参考另一个：https://docs.bugdesigner.cn/   

讲解B站视频：https://www.bilibili.com/video/BV1XW4y1w7bc/?spm_id_from=333.1387.favlist.content.click

### **安装vitepress**

**前置准备**

- [Node.js](https://nodejs.org/) 18 及以上版本。
- 通过命令行界面 （CLI） 访问 VitePress 的终端。
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的编辑器。
  - 推荐 [VSCode](https://code.visualstudio.com/) 及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。
  - 我偏向使用typora

首先新建文件夹，打开cmd窗口

```sh
npm add -D vitepress
```

### **初始化Vitepress**

```sh
npx vitepress init
```

这是我的配置，简单介绍一下

- 第一个是在当前根目录下创建vitepress项目
- 站点标题和描述。后续可以在配置中改
- 主题，建议选择第二个，个人觉得比较好看
- 是否使用ts，我们个人学习就没必要ts了，主要还是我懒
- 是否添加脚本到package.json，这个还是需要的，启动命令，打包命令这些都得用

```sh
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme + Customization
│
◇  Use TypeScript for config and theme files?
│  No
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run pnpm run docs:dev and start writing.
```

初始化成功后，使用vscode或webstorm打开文件夹，会看到这样一个目录。接下来简单介绍一下每个文件的含义

- .vitepress，最核心的目录，
- theme目录。自定义主题配置，css样式等
- config.mjs。最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里
- node_modules。安装的依赖
- api-examples.md和markdown-examples.md。官方给的两个示例
- index.md。主页相关
- package.json和pnpm-lock.yml。包管理工具需要用的

生成的文件结构应该是这样的：`./docs`

```sh
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

**启动项目**

```sh
npm run docs:dev
```

打开，看到这个，说明初始化成功

![image-20240108191252240](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108191252240.png)

## 自定义配置

### 美化主页

对于主页，我们自定义的内容有哪些？如下图，8个地方可以自定义。接下来就一一叙述这8个地方怎么自定义的。

![image-20240108191730006](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108191730006.png)

忘记了还有个页脚：

![image-20240110033048297](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240110033048297.png)

9这个是直接配置footer，在`config.mjs defineConfig themeConfig`下面配置就可以了

![image-20240110033147092](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240110033147092.png)

2-6是在index.md文件中自定义的。简单介绍一下对应关系

`name<==>2`		`text<==>3`		`tagline<==>4`		`actions<==>5`		`features<==>6`

需要说明的是，对于5这两个按钮，是可以跳转的，**link指定路径**，比如/api-example就是在项目根目录下找api-example.md这个文件	

<img src="https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108192410028.png" alt="image-20240108192410028" style="zoom:50%;" />

修改后的页面如下：

![image-20240108192848790](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108192848790.png)

1、7、8这三个配置是在config.mjs中配置的

其中，title对应1，nav对应7，socialLinks对应8。description是SEO要用的，我们不用关注。

<img src="https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108194059919.png" alt="image-20240108194059919" style="zoom:50%;" />

最后的结果是这样。

![image-20240108194335668](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108194335668.png)

### 主页扩展

我们可能还想要对页面进行进一步美化，添加一些图标。可以去这个网站找图片https://www.iconfont.cn/

将找到的图片放在根目录下的public目录下。

<img src="https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108195132751.png" alt="image-20240108195132751" style="zoom:50%;" />

最后美化的效果如图：

![image-20240108195220278](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108195220278.png)

**TODO：**

- logo的配置是在config.mjs添加。（注意是themeConfig不是config）

```
logo: "logo.svg", // 配置logo位置，public目录
```

- vitepress原生支持国外的sociallink，如果是国内需要自行复制svg代码。如图：

![image-20240108195501321](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108195501321.png)

- 添加搜索栏，config.mjs中的themeConfig（支持国际化需要进一步配置 ）

![image-20240108215134634](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108215134634.png)

### 美化文章页

默认进来官方给的示例是三边栏的

左边是sidebar的配置，右边是显示的文章目录（默认显示一二级）。

![image-20240108195711534](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108195711534.png)



下面叙述这个是怎么配置的。sidebar可以是数组，也可以是对象。还是修改config.mjs

![image-20240108200043005](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108200043005.png)

最后的结果是这样

![image-20240108200249558](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108200249558.png)

右侧导航栏默认索引的是md文件的一二级标题，可能需要定义索引的标题级别和`On this page`这个说明。这个时候需要在config.mjs中配置下面这两个选项，`outlineTitle`用于替代On this page。`outline`定义展示的标题级别，这里定义2-6级

![image-20240108200555674](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108200555674.png)

最后美化后的文章目录是这样

![image-20240108201005185](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108201005185.png)

设置侧边栏默认折叠，`collapsed: true`

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250225/picx-image.5xarrmu115.jpg)

**自动生成侧边栏**

我们使用这种配置时常常是一个目录有很多md文件，这些md文件所在的目录对应导航栏的一个选项。侧边栏的配置需要自己手写一个个路由映射到相应的文件上，那么有没有一个自动生成侧边栏的工具呢？根据一个目录下面的所有md文件自动生成路由，可以使用下面这个脚本

```js
import path from "node:path";
import fs from "node:fs";

// 文件根目录
const DIR_PATH = path.resolve();
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = [
  "index.md",
  ".vitepress",
  "node_modules",
  ".idea",
  "assets",
];

// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory();

// 取差值
const intersections = (arr1, arr2) =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// 把方法导出直接使用
function getList(params, path1, pathname) {
  // 存放结果
  const res = [];
  // 开始遍历params
  for (let file in params) {
    // 拼接目录
    const dir = path.join(path1, params[file]);
    // 判断是否是文件夹
    const isDir = isDirectory(dir);
    if (isDir) {
      // 如果是文件夹,读取之后作为下一次递归参数
      const files = fs.readdirSync(dir);
      res.push({
        text: params[file],
        collapsible: true,
        items: getList(files, dir, `${pathname}/${params[file]}`),
      });
    } else {
      // 获取名字
      const name = path.basename(params[file]);
      // 排除非 md 文件
      const suffix = path.extname(params[file]);
      if (suffix !== ".md") {
        continue;
      }
      res.push({
        text: name,
        link: `${pathname}/${name}`,
      });
    }
  }
  // 对name做一下处理，把后缀删除
  res.map((item) => {
    item.text = item.text.replace(/\.md$/, "");
  });
  return res;
}

export const set_sidebar = (pathname) => {
  // 获取pathname的路径
  const dirPath = path.join(DIR_PATH, pathname);
  // 读取pathname下的所有文件或者文件夹
  const files = fs.readdirSync(dirPath);
  // 过滤掉
  const items = intersections(files, WHITE_LIST);
  // getList 函数后面会讲到
  return getList(items, dirPath, pathname);
};
```

使用时，需要导入函数名，

```js
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径
```

直接使用。第一个/front-end/react常常是**nav的link**，这个set_sidebar传递的参数是相对于根路径的文件夹路径，返回的是每个文件夹中文件的名称和链接

```js
sidebar: { "/front-end/react": set_sidebar("front-end/react") },
```



### 文章页扩展

当然，这样对一些项目的文档是非常合适的。但是如果我们需要记笔记的话有些繁琐，并且三边栏总感觉可以查阅的东西变少了。因此可以使用刚才说的自定义样式。将三边栏改成两边栏

在config.mjs中的themeConfig配置对象中配置 

```js
sidebar: false, // 关闭侧边栏
aside: "left", // 设置右侧侧边栏在左侧显示
```

在.vitepress theme style.css中配置下面的css

```css
/* 自定义侧边栏在最左边，右边撑满宽度 */
.VPDoc .container {
  margin: 0 !important;
}
@media (min-width: 960px) {
  .VPDoc:not(.has-sidebar) .content {
    max-width: 1552px !important;
  }
}
.VPDoc.has-aside .content-container {
  max-width: 1488px !important;
}
@media (min-width: 960px) {
  .VPDoc:not(.has-sidebar) .container {
    display: flex;
    justify-content: center;
    max-width: 1562px !important;
  }
}
.aside-container {
  position: fixed;
  top: 0;
  padding-top: calc(
    var(--vp-nav-height) + var(--vp-layout-top-height, 0px) +
      var(--vp-doc-top-height, 0px) + 10px
  ) !important;
  width: 224px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
}

/* 自定义h2的间距 */
.vp-doc h2 {
  margin: 0px 0 16px;
  padding-top: 24px;
  border: none;
}
```

就可以将三栏样式改成双栏了（当然，上面的自定义css是我的偏好，根据实际情况可以修改），效果图如下



![image-20240108204620601](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108204620601.png)

### 美化地址栏icon

我们可能还需要修改浏览器地址栏的左边图标

![image-20240110161809355](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240110161809355.png)

在`config.mjs defineConfig`下面直接配置即可

```js
head: [["link", { rel: "icon", href: "/logo.svg" }]],
```

❗如果需要配置路径`base`，这个`href`也需要添加base路径作为前缀

### 设置搜索框

在`config.mjs defineConfig themeConfig`下面直接配置即可

```python
   // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
```



## 使用Github Pages部署

### 部署步骤

Github Pages专门用来托管静态内容，由于不需要服务器且基于git，支持CI/CD，成为很多静态网站比如博客、文档网站的很好的选择。下面介绍流程

1. 在github上创建仓库，如果没有Github账号，需要先注册一个。

![](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108205813594.png)

需要在config.mjs里面配置base，名称为github仓库名称，注意不要忘记改之前的icon

```js
base: "/docs-demo/"	
```

2. 初始化git仓库

```bash
git init
```

3. 添加gitignore文件

```
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

4. 添加本地所有文件到git仓库

```bash
git add .
```

5. 创建第一次提交

```bash
git commit -m "first commit"
```

6. 添加远程仓库地址到本地

```bash
git remote add origin https://github.com/AZCodingAccount/Demo.git
```

7. 推送项目到github     `-u`：下次push至默认master

```bash
git push -u origin master
```

8. 选择github actions

![image-20240108210624305](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108210624305.png)

9. 设置工作流

![image-20240108210710694](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108210710694.png)

10. 重命名并设置deploy脚本

脚本文件：参考的vitepress官方文档：https://vitepress.dev/guide/deploy#github-pages

❗node版本和npm版本需要一致

❗对于npm的部署可以参考这个博客[GitHub Action一键部署个人博客 | Ahao (helloahao096.github.io)](https://helloahao096.github.io/helloahao/posts/GitHub Action一键部署个人博客.html)

❗需要注意项目的根目录（.vitepress所在的目录）

❗可先阅读代码后面的**踩坑总结**

```yml
# .github > workflows > deploy.yml
name: Deploy

on:
   push:
      branches:
         - master

jobs:
   deploy:
      runs-on: ubuntu-latest
      steps:
         - uses: actions/checkout@v3
           with:
              fetch-depth: 0
         - uses: actions/setup-node@v3
           with:
              node-version: 18 
              # 注意这里要至少18，版本过低会与之不匹配
              cache: npm
         - run: npm install --frozen-lockfile

         - name: Build
           run: npm run docs:build

         - name: Deploy
            # 将构建产物 commit 到一个分支上，用于发布静态站点资源
            # https://github.com/peaceiris/actions-gh-pages
            # 不要将peaceiris改为自己的仓库名，我单纯的以为这个需要改成自己的仓库名，部署上去就build失败了，需引用该仓库的配置
           uses: peaceiris/actions-gh-pages@v3
           with:
              # Github 会在 workflow 中自动生成 GIHUBT_TOKEN，用于认证 workflow 的运行
              github_token: ${{ secrets.GITHUB_TOKEN }}
              # 静态资源目录设置
              publish_dir: docs/.vitepress/dist
              # 默认发布到 gh-pages 分支上，可以指定特定的发布分支（不能选拉取代码的分支）
              publish_branch: gh-pages
              full_commit_message: ${{ github.event.head_commit.message }}
```

**踩坑总结：**

1. `package-lock.json`记得上传到代码仓库，不然github action无法构建项目
   平时做项目的时候，只会关注`package.json`，下意识的以为`package-lock.json`是不需要的，但是github action需要这个文件构建项目
   ![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250225/picx-image.58hi7mekb4.jpg)
2. 转到存储库Setting>>>Actions>>>General 在"工作流权限(Workflow permissions)"中，选择Read and write permissions
   ![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250225/picx-image.73u308syd7.jpg)
3. 网上搜到的什么deploy.sh根本不好用，我尝试过配置shell脚本，完全不好用，github action直接一步到位，参考本博客即可

![image-20240108210850443](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108210850443.png)

11. 点击确定，耐心等待15秒左右，就可以了，接下来查看我们的域名：

![image-20240108211049140](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108211049140.png)



12. 重新编译更新网站操作

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250225/picx-image.7axavokdw0.jpg)

![picx-image](https://hengmaozhang.github.io/picx-images-hosting/20250225/picx-image.64dzn2xe3l.jpg)

❗踩坑点：为啥下面的没有CSS样式呢？原因是因为没有.nojekyll这个文件，不然一些css会被忽略。添加一下再push就好了

![image-20240108211022770](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108211022770.png)

最后，就部署完毕了

![image-20240108214941003](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108214941003.png)

### 配置自定义域名

来自我的最佳实践，直接配置子域名，别配置4条A记录，没必要让所有都指向这个，一个域名能配置好几个网站。另外域名服务商只允许添加5条记录，多了就得加钱了。

在自己的域名服务商那里添加一条CNAME记录，直接指向自己的github分配的域名就好了，另外需要把这个base给注释掉（不然css文件和页面都找不到），等待分配完成。

![image-20240108232734898](https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240108232734898.png)



## 补充

如果你想要配置mermaid支持(这是一个可以使用md语法绘制流程图，饼状图的md扩展),需要按照下面的步骤操作。
安装

```bash
npm i vitepress-plugin-mermaid mermaid -D
```

如果使用pnpm，还需要下面的配置改变pnpm的默认行为兼容插件

```bash
pnpm install --shamefully-hoist
# 或者在根目录新建.npmrc文件，配置
shamefully-hoist=true
```

更改`.vitepress/config.mjs`配置项

1: 导入

```js
import { withMermaid } from "vitepress-plugin-mermaid";
```



2: defineConfig—>withMermaid

<img src="https://my-picture-bed1-1321100201.cos.ap-beijing.myqcloud.com/mypictures/image-20240209000231506.png" alt="image-20240209000231506" style="zoom:33%;" />

3:根配置项下添加

```js
 mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
 mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
```

可以访问[插件官网](https://emersonbottero.github.io/vitepress-plugin-mermaid/guide/getting-started.html)和[mermaid官网](https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options)获取更多配置信息
