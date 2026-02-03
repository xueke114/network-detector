# Network Detector

一个VSCode插件，用来检测电脑的互联网是否通畅。

> 📚 **语言**: [English](README.md) | [中文](README.zh-CN.md)

---

## 功能

- 定时检测用户和目标地址（默认：www.baidu.com）之间的连通性
- 互联网正常时显示绿色图标
- 互联网异常时显示黄色图标
- 支持tooltip显示互联网状态
- 支持在设置页面自定义检测地址和间隔时间
- 支持自定义Unicode图标（可以是任意Unicode字符，如雨伞、企鹅、太阳等）
- 支持i18n国际化

## 安装

1. 克隆或下载本项目
2. 在项目目录运行 `npm install` 安装依赖
3. 运行 `npm run compile` 编译代码
4. 在VSCode中按 `F5` 启动调试

## 配置

在VSCode设置页面搜索 "Network Detector" 可以配置以下选项：

- `networkDetector.targetAddress`: 检测地址（默认：www.baidu.com）
- `networkDetector.checkInterval`: 检测间隔时间（默认：5000毫秒）
- `networkDetector.statusIcon`: 状态显示图标（默认：⬤）

## 自定义图标

你可以在设置页面的 `statusIcon` 选项中输入任意Unicode字符作为显示图标，例如：

- 圆形：⚪（U+26AA）◯（U+25EF）◎（U+25CE）
- 符号：☀（U+2600）☁（U+2601）☂（U+2602） ☃（U+2603） ☄（U+2604） ☕（U+2615） ☯（U+262F）
- 符号：✓（U+2713）✔（U+2714）❤（U+2764）❀（U+2740）
- 也可以输入任何文字：网 络 OK NG

**注意**：

1. 由于设置项是一个文本输入框，理论上可以输入任意文本，甚至是一段话。但这不会造成安全问题，因为输入的内容只会显示在状态栏上，不会被执行或注入到任何代码中。
2. 当输入emoji时，图标的颜色不会变化（说不定未来会支持emoji，比如笑脸和哭脸，嗯，这确实是一个不错的主意），所以推荐输入Unicode字符。

## 国际化

- 支持英文和中文
- 插件会根据VSCode的语言设置自动切换语言
