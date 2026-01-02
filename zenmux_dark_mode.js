// ==UserScript==
// @name         Zenmux.ai Dark Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  为zenmux.ai添加暗色主题
// @author       kyle_A_10000
// @match        https://zenmux.ai/*
// @grant        GM_addStyle
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zenmux.ai
// ==/UserScript==

(function() {
    'use strict';

    // 添加暗色主题CSS
    GM_addStyle(`
        /* 基础暗色主题 */
        body, html {
            background-color: #121212 !important;
            color: #e0e0e0 !important;
        }

        /* 通用背景色 */
        div, section, article, main, header, footer, aside, nav {
            background-color: #1e1e1e !important;
            color: #e0e0e0 !important;
        }

        /* 卡片和容器 */
        .card, .container, .box, .panel, .widget,
        [class*="card"], [class*="container"], [class*="box"],
        [class*="panel"], [class*="widget"] {
            background-color: #252525 !important;
            border-color: #444 !important;
        }

        /* 文本颜色 */
        h1, h2, h3, h4, h5, h6, p, span, li, td, th, label {
            color: #e0e0e0 !important;
        }

        /* 链接颜色 */
        a {
            color: #64b5f6 !important;
        }
        a:hover {
            color: #90caf9 !important;
        }

        /* 输入框和表单 */
        input, textarea, select, button {
            background-color: #2d2d2d !important;
            color: #e0e0e0 !important;
            border-color: #555 !important;
        }

        /* 按钮 */
        button, .btn, [type="button"], [type="submit"] {
            background-color: #1976d2 !important;
            color: white !important;
            border: none !important;
        }
        button:hover, .btn:hover {
            background-color: #1565c0 !important;
        }

        /* 表格 */
        table, thead, tbody, tr, td, th {
            background-color: #252525 !important;
            border-color: #444 !important;
        }

        /* 代码块 */
        pre, code {
            background-color: #1a1a1a !important;
            color: #f8f8f2 !important;
        }

        /* 导航栏和菜单 */
        nav, .navbar, .menu, .header {
            background-color: #1a1a1a !important;
            border-bottom: 1px solid #444 !important;
        }

        /* 页脚 */
        footer {
            background-color: #1a1a1a !important;
            border-top: 1px solid #444 !important;
        }

        /* 阴影和边框 */
        .shadow, [class*="shadow"], [class*="border"] {
            box-shadow: 0 2px 4px rgba(0,0,0,0.5) !important;
            border-color: #444 !important;
        }

        /* 滚动条 */
        ::-webkit-scrollbar {
            width: 12px;
            height: 12px;
        }
        ::-webkit-scrollbar-track {
            background: #1e1e1e;
        }
        ::-webkit-scrollbar-thumb {
            background: #555;
            border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #777;
        }

        /* 覆盖白色背景图片 */
        [style*="background-image"], [style*="background-color"] {
            background-color: transparent !important;
        }

        /* 特殊处理透明元素 */
        .bg-white, [class*="bg-white"] {
            background-color: #1e1e1e !important;
        }
        .text-black, [class*="text-black"] {
            color: #e0e0e0 !important;
        }
        .bg-light, [class*="bg-light"] {
            background-color: #252525 !important;
        }
        .bg-gray, [class*="bg-gray"] {
            background-color: #2d2d2d !important;
        }

        /* 图标和SVG */
        svg, path, circle, rect {
            fill: #e0e0e0 !important;
            stroke: #e0e0e0 !important;
        }

        /* 模态框和弹出层 */
        .modal, .dialog, .popup, .dropdown {
            background-color: #252525 !important;
            border-color: #444 !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5) !important;
        }

        /* 分隔线 */
        hr {
            border-color: #444 !important;
        }

        /* 禁用状态 */
        :disabled, [disabled] {
            opacity: 0.5 !important;
            background-color: #333 !important;
        }

        /* 鼠标悬停效果 */
        .hover\\:bg-gray-100:hover, [class*="hover:"]:hover {
            background-color: #2d2d2d !important;
        }
    `);

    // 监听DOM变化，动态应用样式
    const observer = new MutationObserver(() => {
        // 对动态加载的元素应用样式
        document.querySelectorAll('div, section, article').forEach(el => {
            if (!el.style.backgroundColor || el.style.backgroundColor === 'white' || el.style.backgroundColor === '#ffffff') {
                el.style.backgroundColor = '#1e1e1e';
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 页面加载完成后执行一次
    window.addEventListener('load', () => {
        // 强制重新计算样式
        document.body.style.display = 'none';
        document.body.offsetHeight; // 触发重绘
        document.body.style.display = '';
    });

    console.log('Zenmux.ai 暗色主题已启用');
})();
