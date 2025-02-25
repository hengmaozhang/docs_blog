import { defineConfig } from 'vitepress'
import { set_sidebar } from "D:\\docs_blog\\docs\\.vitepress\\utils\\auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs_blog/",
  title: "我的文档项目",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: '目录',
    outline: [1,6],
    logo: 'public\\logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', items:[
          {text: '首页', link: '/'},
          {text: '关于', link: '/about'}
        ]
      },
      {
        text: 'learn_java',
        items: [
          { text: 'ch02_java_overview', link: '/learn_java/ch02_java_overview' },
          { text: 'ch03_variable', link: '/learn_java/ch03_variable' },
          { text: 'ch04_operator', link: '/learn_java/ch04_operator'},
        ]
      },
    ],

    sidebar: [
      {
        collapsed: true, // 设置侧边栏默认折叠
        text: 'learn_java',
        items: [
          { text: 'ch02_java_overview', link: '/learn_java/ch02_java_overview' },
          { text: 'ch03_variable', link: '/learn_java/ch03_variable' },
          { text: 'ch04_operator', link: '/learn_java/ch04_operator'},
          
        ]
      },
      {
        text: 'Git',
        collapsed: true, // 设置侧边栏默认折叠
        items: [
          { text: '常见问题', link: '/Git/常见问题' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

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

    // 底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
