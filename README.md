# 个人作品集网站

赵春江 - 2D游戏买量设计师 / AIGC设计师 个人作品集网站

## 技术栈

- Vite 5.x
- 原生 JavaScript
- 原生 CSS3

## 项目结构

```
portfolio-vite/
├── public/              # 静态资源目录
├── src/
│   ├── assets/          # 资源文件
│   ├── components/      # 组件目录
│   ├── styles/
│   │   └── main.css     # 全局样式
│   └── main.js          # 入口文件
├── .gitattributes       # Git属性配置
├── .gitignore           # Git忽略配置
├── index.html           # HTML入口
├── package.json         # 项目配置
├── README.md            # 项目说明
└── vite.config.js       # Vite配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录

### 预览生产构建

```bash
npm run preview
```

## 功能特性

- ✨ 暗色科技风设计
- 🎬 视频背景与作品展示
- 🎨 鼠标悬停边框光效
- 📱 响应式布局，支持移动端
- ⚙️ 管理员后台配置功能
- 💾 本地存储配置持久化
- 📤 配置导出功能
