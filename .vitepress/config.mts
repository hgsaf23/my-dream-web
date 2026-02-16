import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站语言设置，这会让搜索引擎更好地识别
  lang: 'zh-CN',
  title: "赛博永生",
  description: "一个热爱计算机学生的自白：讲讲我自己遇到的八十一难，也带大家看见编程的美",

  themeConfig: {
    // 1. 顶部导航栏配置
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '🛡️ 避坑指南', link: '/intro' }, // 这里的 /intro 对应你根目录下的 intro.md
      { 
        text: '🧩 知识版图', 
        items: [
          { text: 'Web全栈', link: '/roadmap/web' },
          { text: 'AI 智能体', link: '/roadmap/ai' },
          { text: '嵌入式开发', link: '/roadmap/embedded' }
        ] 
      },
      { text: '🚀 关于我', link: '/about' }
    ],

    // 2. 侧边栏配置（左侧文章目录）
    sidebar: [
      {
        text: '🏁 序章：为什么做这个',
        items: [
          { text: '我的故事', link: '/intro' },
          { text: '编程的美学', link: '/beauty-of-coding' }
        ]
      },
      {
        text: '📑 避坑手册',
        items: [
          { text: '大一新生避坑指南', link: '/guide/freshman' },
          { text: '如何辨别垃圾付费课程', link: '/guide/anti-scam' }
        ]
      }
    ],

    // 3. 社交链接：建议改成你自己的 GitHub
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ],

    // 4. 辅助功能汉化
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      label: '本页目录'
    },
    lastUpdatedText: '最后更新时间'
  }
})