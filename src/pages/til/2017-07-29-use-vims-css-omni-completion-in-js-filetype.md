---
title: Use Vim's css omni completion in js filetype
date: '2017-07-29T01:13:57-04:00'
tags:
  - vim
  - css
  - productivity
---
```vim
let g:cm_sources_override = {
    \ 'cm-css': {'scopes': ['css', 'scss', 'javascript', 'jsx', 'javascript.jsx']}
    \ }
```
more info: https://github.com/roxma/nvim-completion-manager/issues/103

