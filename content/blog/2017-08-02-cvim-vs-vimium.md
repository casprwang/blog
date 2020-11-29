---
title: Cvim vs. Vimium
date: '2017-07-26T14:13:31-04:00'
tags:
  - vim
  - cvim
  - chrome
---

Let me just say this: CVim wins, hands down.

I would say that the default settings from Vimium are more friendly to new in-browser vim users(less nerdy bars, smooth scrolling, etc.), but for advanced users, no smooth scroll feels more natural. And critically, Cvim can search strings with highlighting all the possibilities, which, Vimium has never accomplished(they claimed that it is a Chrome issue and I bought it, but who knows now...).

## Demos

### Open a url

![url opening](./Screen%20Shot%202017-07-26%20at%202.11.21%20PM.png)

### Open from buffer

![buffer opening](./Screen%20Shot%202017-07-26%20at%202.11.37%20PM.png)

### Open from history

![image opening](./Screen%20Shot%202017-07-26%20at%202.12.14%20PM.png)

### Highlighting all the possibilities

![highlighting](./Screen%20Shot%202017-07-26%20at%203.04.04%20PM.png)

## Cvim config:

```
set nosmoothscroll
set noautofocus
let scrollstep = 80
set typelinkhints
let hintcharacters = "sadfjklewcmpgh"
map h gT
map l gt
map H g0
map L g$
map q lastClosedTab
map w closeTab
map J goBack
map K goForward
map gb lastUsedTab
```

## Styling

```css
#cVim-command-bar,
#cVim-command-bar-mode,
#cVim-command-bar-input,
#cVim-command-bar-search-results,
.cVim-completion-item,
.cVim-completion-item .cVim-full,
.cVim-completion-item .cVim-left,
.cVim-completion-item .cVim-right {
  font-family: Helvetica, Helvetica Neue, Neue, sans-serif, monospace, Arial;
  font-size: 16pt !important;
  -webkit-font-smoothing: antialiased !important;
}

#cVim-command-bar {
  position: fixed;
  z-index: 2147483646;
  color: #1b1d1e;
  background-color: #bbb;
  display: none;
  box-sizing: content-box;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
  left: 0;
  width: 100%;
  height: 40px;
}

#cVim-command-bar-mode {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  padding-left: 2px;
  height: 100%;
  width: 10px;
  padding-top: 2px;
  color: #888;
}

#cVim-command-bar-input {
  color: #1b1d1e;
  background-color: #bbb;
  height: 100%;
  right: 0;
  top: 0;
  width: calc(100% - 40px);
  position: absolute;
}

#cVim-command-bar-search-results {
  position: fixed;
  width: 100%;
  overflow: hidden;
  z-index: 2147483647;
  left: 0;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
  background-color: #bbb;
}

.cVim-completion-item,
.cVim-completion-item .cVim-full,
.cVim-completion-item .cVim-left,
.cVim-completion-item .cVim-right {
  text-overflow: ellipsis;
  padding: 1px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  overflow: hidden;
  white-space: nowrap;
}

.cVim-completion-item:nth-child(even) {
  background-color: #bbc;
}

.cVim-completion-item {
  width: 100%;
  left: 0;
  color: #bcbcbc;
}

.cVim-completion-item[active] {
  width: 100%;
  left: 0;
  color: #1b1d1e;
  background-color: #f1f1f1;
}

.cVim-completion-item[active] span {
  color: #1b1d1e;
}

.cVim-completion-item .cVim-left {
  color: #1b1d1e;
  width: 37%;
}

.cVim-completion-item .cVim-right {
  font-style: italic;
  color: #888;
  width: 57%;
}

#cVim-link-container,
.cVim-link-hint,
#cVim-hud,
#cVim-status-bar {
  font-family: Helvetica, Helvetica Neue, Neue, sans-serif, monospace, Arial;
  font-size: 10pt !important;
  -webkit-font-smoothing: antialiased !important;
}

#cVim-link-container {
  position: absolute;
  pointer-events: none;
  width: 100%;
  left: 0;
  height: 100%;
  top: 0;
  z-index: 2147483647;
}

.cVim-link-hint {
  position: absolute;
  color: #302505 !important;
  background-color: #ffd76e !important;
  border-radius: 1px !important;
  padding: 2px !important;
  font-size: 9pt !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  border: 1px solid #ad810c;
  display: inline-block !important;
  vertical-align: middle !important;
  text-align: center !important;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25) !important;
}

.cVim-link-hint_match {
  color: #777;
  text-transform: uppercase !important;
}

#cVim-hud {
  background-color: rgba(28, 28, 28, 0.9);
  position: fixed !important;
  transition: right 0.2s ease-out;
  z-index: 24724289;
}

#cVim-hud span {
  padding: 2px;
  padding-left: 4px;
  padding-right: 4px;
  color: #8f8f8f;
  font-size: 10pt;
}

#cVim-frames-outline {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9999999999;
  box-sizing: border-box;
  border: 3px solid yellow;
}
```
