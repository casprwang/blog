---
title: Find duplicated Vim key-maps
date: 2019-02-10T18:14:10-08:00
---
Vim is not a typed language and it allows keymapping multiple handlers onto the same key, which sometimes leads to unexpected behavior. Here's a simple way to find conflicts. 

`:verbose imap <search your key here>` 

Here's what I got, it greps all the keymaps from plugins too, which is pretty helpful. 

```
i  (           * coc#_insert_key('request', 'iKA==0')
i  (<CR>       * (<CR>)<C-O>O
        Last set from ~/.config/nvim/init.vim line 76
Press ENTER or type command to continue
```