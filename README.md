# Zenmux.ai 暗色主题油猴脚本

一个为 zenmux.ai 网站添加暗色主题的油猴脚本，提供更舒适的夜间浏览体验。

## 功能特点

- 🌙 将 zenmux.ai 的整个界面转换为暗色主题
- 🎨 精心设计的配色方案，保护眼睛
- 🔄 自动适配动态加载的内容
- ⚡ 轻量级，不影响页面性能
- 🛡️ 使用安全的 CSS 注入方式

## 安装步骤

### 1. 安装油猴扩展

首先需要为浏览器安装用户脚本管理器：

| 浏览器 | 推荐扩展 | 下载链接 |
|--------|----------|----------|
| Chrome/Edge | Tampermonkey | [Chrome 网上应用店](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) |
| Firefox | Greasemonkey | [Firefox 附加组件](https://addons.mozilla.org/firefox/addon/greasemonkey/) |
| Safari | Userscripts | [Mac App Store](https://apps.apple.com/app/userscripts/id1463298887) |

### 2. 安装脚本

点击下方链接安装脚本：
[安装脚本](https://raw.githubusercontent.com/Rex2516S/zenmux.ai-dark-mode/main/zenmux_dark_mode.js)

或者手动安装：
1. 点击油猴扩展图标
2. 选择"创建新脚本"
3. 删除默认代码
4. 复制并粘贴脚本代码
5. 按 Ctrl+S 保存

## 使用说明

安装完成后，访问 zenmux.ai 网站时脚本会自动运行，将页面转换为暗色主题。

### 启用/禁用

- **启用脚本**：在油猴管理面板中确保脚本开关为开启状态
- **禁用脚本**：关闭脚本开关或从油猴图标菜单中取消勾选
- **临时禁用**：在浏览器中禁用油猴扩展

### 自定义设置

如需自定义颜色，可以修改脚本中的 CSS 变量：

```css
/* 主要颜色变量 */
--bg-primary: #121212;      /* 主要背景色 */
--bg-secondary: #1e1e1e;    /* 次要背景色 */
--text-primary: #e0e0e0;    /* 主要文字颜色 */
--accent-color: #64b5f6;    /* 强调色 */
