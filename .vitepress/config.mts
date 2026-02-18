import { defineConfig } from 'vitepress'

export default defineConfig({
  // 1. 基础配置
  base: '/my-dream-web/',
  lang: 'zh-CN',
  title: "赛博永生",
  description: "一个热爱计算机学生的自白",
  ignoreDeadLinks: true, 

  // 2. 注入全局 CSS：精准定位 GitHub 图标并添加气泡
  head: [
    ['style', {}, `
      /* 定位社交链接容器 */
      .VPNavBarSocialLinks {
        margin-right: 20px !important; /* 给气泡留出一点空间 */
      }

      /* 针对 Github 链接添加气泡 */
      .VPSocialLink[href*="github.com/hgsaf23"] {
        position: relative !important;
        overflow: visible !important;
      }

      /* 生成气泡框 */
      .VPSocialLink[href*="github.com/hgsaf23"]::after {
        content: "此为本人账号";
        position: absolute;
        bottom: -35px; /* 在图标下方显示 */
        left: 50%;
        transform: translateX(-50%);
        background: #bd34fe; /* 保持你的紫色主题 */
        color: white;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 11px; /* 小图标配小字，精致点 */
        font-weight: bold;
        white-space: nowrap;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 100;
        pointer-events: none; /* 防止遮挡点击 */
        animation: mini-float 3s ease-in-out infinite;
      }

      /* 气泡的小尖角 */
      .VPSocialLink[href*="github.com/hgsaf23"]::before {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-bottom-color: #bd34fe;
        z-index: 99;
        animation: mini-float 3s ease-in-out infinite;
      }

      /* 微型浮动动画 */
      @keyframes mini-float {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(4px); }
      }

      /* 只有鼠标悬停时更亮，平时稍微透明一点，不干扰阅读 */
      .VPSocialLink[href*="github.com/hgsaf23"]::after,
      .VPSocialLink[href*="github.com/hgsaf23"]::before {
        opacity: 0.9;
      }
    `]
  ],

  themeConfig: {
    // 3. 顶部导航栏配置
    nav: [
      { text: '🏠 首页', link: '/' },
      { 
        text: '🧩 知识版图', 
        items: [
          { text: '浅谈 C 语言',