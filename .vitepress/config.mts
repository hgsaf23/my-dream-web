import { defineConfig } from 'vitepress'

export default defineConfig({
  // 基础路径
  base: '/my-dream-web/',
  
  // 核心防御：强制无视所有死链（包括路径错误）
  ignoreDeadLinks: true, 

  lang: 'zh-CN',
  title: "赛博永生",
  description: "一个热爱计算机学生的自白",

  themeConfig: {
    // 导航栏
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '🛡️ 避坑指南', link: '/intro' }, 
      { 
        text: '🧩 知识版图', 
        items: [
          { text: 'Web全栈', link: '/pending' },
          { text: 'AI 智能体', link: '/pending' },
          { text: '嵌入式开发', link: '/pending' }
        ] 
      },
      { text: '🚀 关于我', link: '/about' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '🏁 序章：为什么做这个',
        items: [
          { text: '学习总结', link: '/learning-summary' },
          { text: '编程的美学', link: '/beauty-of-coding' }
        ]
      },
      {
        text: '📑 避坑手册',
        items: [
          { text: '大一新生避坑指南', link: '/guide/freshman' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hgsaf23' }
    ]
  }
})