---
title: Migrated from Vimium to Cvim
date: '2017-07-26T00:00:53-04:00'
tags:
  - vim
  - chrome
---
I did this simply because Cvim is more powerful on all aspects. I would say that the default settings from Vimium are more friendly to new in-browser vim users(less nerdy bars, smooth scrolling, etc.), but for advanced users, no smooth scroll feels more natural.

New Cvim config:
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
