# Network Detector

A VSCode extension to detect if your computer's internet connection is working properly.

> 📚 **Language**: [English](README.md) | [中文](README.zh-CN.md)

---

## Features

- Periodically check connectivity to a target address (default: www.baidu.com)
- Display a green icon when the internet is working
- Display a yellow icon when the internet is not working
- Support tooltip to show internet status
- Support customizing target address and check interval in settings
- Support custom Unicode icons (can be any Unicode character, such as umbrella, penguin, sun, etc.)
- Support i18n internationalization

## Installation

1. Clone or download this project
2. Run `npm install` in the project directory to install dependencies
3. Run `npm run compile` to compile the code
4. Press `F5` in VSCode to start debugging

## Configuration

Search for "Network Detector" in VSCode settings page to configure the following options:

- `networkDetector.targetAddress`: Target address (default: www.baidu.com)
- `networkDetector.checkInterval`: Check interval (default: 5000 milliseconds)
- `networkDetector.statusIcon`: Status display icon (default: ⬤)

## Custom Icons

You can enter any Unicode character as the display icon in the `statusIcon` option in settings, for example:

- Circles: ⚪ (U+26AA) ◯ (U+25EF) ◎ (U+25CE)
- Symbols: ☀ (U+2600) ☁ (U+2601) ☂ (U+2602) ☃ (U+2603) ☄ (U+2604) ☕ (U+2615) ☯ (U+262F)
- Symbols: ✓ (U+2713) ✔ (U+2714) ❤ (U+2764) ❀ (U+2740)
- You can also enter any text: Net OK NG

**Notes:**

1. Since the setting is a text input box, you can theoretically enter any text, even a paragraph. But this won't cause security issues because the input content is only displayed on the status bar and won't be executed or injected into any code.
2. When entering emojis, the color of the icon won't change (maybe emoji support will be added in the future, such as smiley and sad faces, which is indeed a good idea), so it's recommended to enter Unicode characters.

## Internationalization

- Support English and Chinese
- The extension will automatically switch languages based on VSCode's language settings
